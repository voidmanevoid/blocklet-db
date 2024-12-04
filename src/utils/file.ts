export function getFileNameWithoutExtension(url: string): string {
    if (!url) {
        return '(empty)';
    }
    // Extract the file name from the URL
    const fileNameWithExtension = url.split('/').pop();
    
    if (!fileNameWithExtension) {
        return '';
    }

    // Split the file name by the last '.' to separate the name and the extension
    const nameParts = fileNameWithExtension.split('.');
    
    // If there's no extension, return the file name as is
    if (nameParts.length === 1) {
        return nameParts[0]!;
    }

    // Remove the last part (extension) and join the rest to form the file name without the extension
    return nameParts.slice(0, -1).join('.');
}