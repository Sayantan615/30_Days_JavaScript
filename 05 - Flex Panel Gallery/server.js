const panelList = document.querySelectorAll(".panel");

function toggleOpen() {
  this.classList.toggle("open");
}

function toggleAOpen(e) {
  console.log(e.propertyName);
  if (e.propertyName.includes("felx")) {
    this.classList.toggle("o");
  }
}
panelList.forEach((panel) => panel.addEventListener("click", toggleOpen));
panelList.forEach((panel) => panel.addEventListener("hover", toggleOpen));
panelList.forEach((panel) =>
  panel.addEventListener("transitionend", toggleAOpen)
);
