function selectDish(descriptionId, imgElement) {
    // Deactivate all images and descriptions
    document.querySelectorAll('.imageGallery img').forEach(img => {
        img.classList.remove('active');
    });
    document.querySelectorAll('.dishDescription').forEach(desc => {
        desc.classList.remove('active');
    });

    // Activate the clicked image
    imgElement.classList.add('active');

    // Show the corresponding description
    document.getElementById(descriptionId).classList.add('active');
}
