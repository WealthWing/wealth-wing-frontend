import {
	Button,
	CenterContent,
	ModalBody,
	ModalFooter,
	ScreenReaderOnly,
	Text,
	theme
} from '@wealth-wing/tayo';
import React, { useRef } from 'react';
import { MoonLoader } from 'react-spinners';
import { useAppSelector } from 'redux/hooks';
import { useCompleteImportMutation, useStartImportMutation } from 'redux/import-queries';
import { useS3Upload } from 'router/account/hooks/use-s3-upload';
import { useImport } from 'router/import/components/import-management';
import { dropZoneValidation } from 'router/import/components/import-steps/helper';
import { dropZone } from 'router/import/components/import-steps/import-drop-zone.styles';
import { Upload } from 'router/import/icons/upload';

export const ImportDropZone = () => {
	const { canCreateOrUpdate } = useAppSelector((state) => state.auth);
	const { accountId, onImportClose } = useImport();
	const { s3UploadFile } = useS3Upload();
	const [dragged, setDragged] = React.useState(false);
	const [fileName, setFileName] = React.useState<string | null>(null);
	const [validationError, setValidationError] = React.useState<string | null>(null);
	const inputRef = useRef<HTMLInputElement>(null);

	const [startImport, { isLoading: isStartLoading }] = useStartImportMutation();
	const [completeImport, { isLoading: isCompleteLoading }] = useCompleteImportMutation();

	const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		setDragged(true);
	};

	const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		setDragged(false);
	};

	const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
		setDragged(false);
		setValidationError(null);

		if (!accountId) {
			setValidationError('Please select an account');
			return;
		}

		const { files } = e.dataTransfer;
		if (dropZoneValidation(files)) {
			setValidationError(dropZoneValidation(files));
			return;
		}
		const file = files[0];
		setFileName(file.name);
		setValidationError(null);

		if (!canCreateOrUpdate) {
			setValidationError('You do not have permission to perform this action.');
			return;
		}
		startImport({
			account_id: accountId,
			file_name: file.name,
			file_size: file.size,
			file_type: file.type
		})
			.unwrap()
			.then((resp) => {
				if (resp.file_url) {
					s3UploadFile(resp.file_url, file, file.type).then(() => {
						completeImport({ import_job_id: resp.uuid }).then(() => onImportClose());
					});
				}
			});
	};

	const handleSelectFile = () => {
		inputRef.current?.click();
	};

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { files } = e.target;

		if (!accountId) {
			setValidationError('Please select an account');
			return;
		}

		if (dropZoneValidation(files)) {
			setValidationError(dropZoneValidation(files));
			return;
		}
		if (!canCreateOrUpdate) {
			setValidationError('You do not have permission to perform this action.');
			return;
		}
		const file = files?.[0];

		if (file) {
			setFileName(file.name);
			setValidationError(null);
			startImport({
				account_id: accountId,
				file_name: file.name,
				file_size: file.size,
				file_type: file.type
			})
				.unwrap()
				.then((resp) => {
					if (resp.file_url) {
						s3UploadFile(resp.file_url, file, file.type).then(() => {
							completeImport({ import_job_id: resp.uuid }).then(() =>
								onImportClose()
							);
						});
					}
				});
		}
	};

	if (isStartLoading || isCompleteLoading) {
		return (
			<ModalBody>
				<CenterContent>
					<MoonLoader color={theme.color.darkBlue40} size={80} />
				</CenterContent>
			</ModalBody>
		);
	}

	return (
		<>
			<ModalBody>
				<div
					id="drop_zone"
					css={[dropZone.root, dragged && dropZone.dragged]}
					onDragOver={handleDragOver}
					onDragLeave={handleDragLeave}
					onDrop={handleDrop}
					role="button"
					aria-label="Upload files"
					aria-describedby="upload-instructions"
					tabIndex={0}
					onClick={handleSelectFile}
					onKeyDown={(e) => {
						if (e.key === 'Enter' || e.key === ' ') {
							e.preventDefault();
							handleSelectFile();
						}
					}}
				>
					<ScreenReaderOnly>
						<div id="upload-instructions">
							To upload a file, drag and drop it here or use the &quot;Select
							File&quot; button.
						</div>
					</ScreenReaderOnly>

					<Upload width={80} height={80} />
					<Text color="textSecondary" font="md">
						We currently only support CSV files for import.
					</Text>
					<input
						ref={inputRef}
						type="file"
						style={{ display: 'none' }}
						onChange={handleFileChange}
						accept=".csv"
						tabIndex={-1}
					/>
					{validationError && (
						<Text color="red90" font="md">
							{validationError}
						</Text>
					)}
					{fileName && (
						<Text color="textSecondary" font="lg">
							Selected: {fileName}
						</Text>
					)}
				</div>
			</ModalBody>
			<ModalFooter>
				<Button variant="tertiary" format="text" onClick={onImportClose}>
					Close
				</Button>
			</ModalFooter>
		</>
	);
};
