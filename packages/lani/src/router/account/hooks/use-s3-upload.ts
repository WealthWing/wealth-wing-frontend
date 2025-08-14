import React from 'react';

export function useS3Upload() {
	const [isUploading, setIsUploading] = React.useState(false);
	const [isS3Error, setIsS3Error] = React.useState(false);
	const [isS3Success, setIsS3Success] = React.useState(false);

	async function s3UploadFile(
		signedUrl: string,
		file: File,
		fileType: string,
		signal?: AbortSignal
	) {
		setIsUploading(true);
		setIsS3Error(false);
		setIsS3Success(false);

		try {
			const response = await fetch(signedUrl, {
				method: 'PUT',
				body: file,
				headers: {
					'Content-Type': fileType
				},
				signal
			});

			if (!response.ok) {
				setIsS3Error(true);
				throw new Error(`Upload failed with status: ${response.status}`);
			}

			setIsS3Success(true);
		} catch (error) {
			setIsS3Error(true);
			throw error;
		} finally {
			setIsUploading(false);
		}
	}

	return { isUploading, isS3Error, isS3Success, s3UploadFile };
}
