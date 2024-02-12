function selectDish(descriptionId, imgElement) {
  document.querySelectorAll(".imageGallery img").forEach((img) => {
    img.classList.remove("active");
  });
  document.querySelectorAll(".dishDescription").forEach((desc) => {
    desc.classList.remove("active");
  });

  imgElement.classList.add("active");

  document.getElementById(descriptionId).classList.add("active");
}
