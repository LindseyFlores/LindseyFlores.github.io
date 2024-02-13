function selectDish(descriptionId, imgElement) {
  // Remove active class from all image gallery images
  document.querySelectorAll(".imageGallery img").forEach((img) => {
    img.classList.remove("active");
  });

  // Remove active class from all dish descriptions
  document.querySelectorAll(".dishDescription").forEach((desc) => {
    desc.classList.remove("active");
  });

  // Add active class to clicked image
  imgElement.classList.add("active");

  // Add active class to corresponding dish description
  document.getElementById(descriptionId).classList.add("active");
}
