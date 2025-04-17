function upDate(previewPic) {
  console.log("Mouse over or focus triggered");
  const imageBox = document.getElementById("image");
  const img = previewPic.querySelector("img");

  imageBox.style.backgroundImage = `url(${img.src})`;
  imageBox.innerHTML = img.alt;
}

function undo() {
  console.log("Mouse leave or blur triggered");
  const imageBox = document.getElementById("image");
  imageBox.style.backgroundImage = "";
  imageBox.innerHTML = "Hover over or focus an image to display it here.";
}

function addTabFocus() {
  console.log("Page loaded - adding tabindex");
  const figures = document.querySelectorAll("figure");
  for (let i = 0; i < figures.length; i++) {
    figures[i].setAttribute("tabindex", "0");
  }
}
