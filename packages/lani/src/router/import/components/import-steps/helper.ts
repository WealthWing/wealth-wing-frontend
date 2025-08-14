const isCSVFile = (file: File) => {
	const type = file.type.toLowerCase();
	const name = file.name.toLowerCase();
	return type === 'text/csv' || name.endsWith('.csv');
};

export const dropZoneValidation = (files: FileList | null) => {
	if (!files || files.length === 0) {
		return 'No file was dropped. Please drop a CSV file.';
	}
	if (files.length > 1) {
		return 'Please drop only one file at a time.';
	}
	const file = files[0];
	if (!isCSVFile(file)) {
		return 'Only CSV files are supported. Please upload a .csv file.';
	}

	return null;
};
