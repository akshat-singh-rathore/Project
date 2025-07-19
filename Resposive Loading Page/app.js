// Create an interactive navigation menu that changes color or style when scrolled or when hovering over a menu item. The navigation menu should have a fixed position and be visible on all pages. Use HTML to structure the menu, CSS to style it, and JavaScript to add interactivity, such as changing the background color or font color of the menu when it is scrolled or when a menu item is hovered over.

let anchors = document.querySelectorAll(".option");
for (anchor of anchors) {
  anchor.addEventListener("mouseover", function () {
    this.style.transition = "0.25s";
    this.style.opacity = "1";
    this.style.transform = "translate(10px)";
    this.style.color = "bisque";
  });
  anchor.addEventListener("mouseleave", function () {
    this.style.transition = "0.25s";
    this.style.opacity = "0.8";
    this.style.transform = "translate(0px)";
    this.style.color = "whitesmoke";
  });
}
