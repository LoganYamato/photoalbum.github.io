function initGallery() {
  console.log("Page loaded - initGallery triggered");

  const figures = document.querySelectorAll("figure");
  figures.forEach((figure, index) => {
    figure.setAttribute("tabindex", index + 1);

    // Mouse events
    figure.addEventListener("mouseover", () => {
      console.log(`Mouse over image ${index + 1}`);
    });

    figure.addEventListener("mouseleave", () => {
      console.log(`Mouse left image ${index + 1}`);
    });

    // Keyboard focus events
    figure.addEventListener("focus", () => {
      console.log(`Focused on image ${index + 1}`);
    });

    figure.addEventListener("blur", () => {
      console.log(`Blurred from image ${index + 1}`);
    });
  });
}