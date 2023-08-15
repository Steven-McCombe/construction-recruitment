export const resizeImage = (file, maxWidth, maxHeight) => {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.src = URL.createObjectURL(file);

        image.onload = () => {
            const canvas = document.createElement('canvas');
            const aspectRatio = image.width / image.height;
            let newWidth = image.width;
            let newHeight = image.height;

            if (image.width > maxWidth || image.height > maxHeight) {
                if (image.width > image.height) {
                    newWidth = maxWidth;
                    newHeight = newWidth / aspectRatio;
                } else {
                    newHeight = maxHeight;
                    newWidth = newHeight * aspectRatio;
                }
            }

            canvas.width = newWidth;
            canvas.height = newHeight;
            const context = canvas.getContext('2d');
            context.drawImage(image, 0, 0, newWidth, newHeight);

            canvas.toBlob(blob => {
                resolve(blob);
            }, file.type);
        };

        image.onerror = error => {
            reject(error);
        };
    });
};

