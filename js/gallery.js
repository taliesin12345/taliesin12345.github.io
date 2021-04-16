// Activates the image gallery.
// The main task is to attach an event listener to each image in the gallery and respond appropriately on click.
function activateGallery() {
  let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");
  let mainImage = document.querySelector("#gallery-photo img");
  // Image info to be updated
  let galleryInfo = document.querySelector("#gallery-info");
  let title       = galleryInfo.querySelector(".title");
  let description = galleryInfo.querySelector(".description");

  thumbnails.forEach(function(thumbnail) {
    thumbnail.addEventListener("click", function() {
      // Set clicked image as display image.
      mainImage.setAttribute("src", thumbnail.dataset.largeVersion);
      mainImage.setAttribute("alt", thumbnail.alt);
      // More verbose version, but it sets two nice variables that could be useful:
      // let newImageSrc = thumbnail.dataset.largeVersion;
      // let newImageAlt = thumbnail.alt;
      // mainImage.setAttribute("src", newImageSrc);
      // mainImage.setAttribute("alt", newImageAlt);

      // Change which image is current (shown with orange box).
      document.querySelector(".current").classList.remove("current");
      thumbnail.parentNode.classList.add("current");

      // Update image info on right-side column.
        title.innerHTML       = thumbnail.dataset.title;
        description.innerHTML = thumbnail.dataset.description;
    });
  });
}
