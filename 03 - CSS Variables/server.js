const inputs = document.querySelectorAll(".controls input");
// It is a object which contains all input elements with the controls class
console.log(inputs);
function handleUpdate() {
  // console.log(this.value);

  console.log(this.dataset);
  // It is a object which contains all the data elements
  const suffix = this.dataset.sizing || " ";
  // console.log(this.name);
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}
inputs.forEach((input) => input.addEventListener("change", handleUpdate));
inputs.forEach((input) => input.addEventListener("mousemove", handleUpdate));
