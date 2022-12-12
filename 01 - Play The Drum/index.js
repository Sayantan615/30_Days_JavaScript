function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  //audio is a audio type element.
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  console.log(audio);
  if (!audio) return; //stop the function from running all togather
  audio.currentTime = 0; //rewined to the start
  audio.play();
  // console.log(e.keyCode);
  // if(key.classList.contains("playing")){
  //   key.classList.remove("playing");
  // }
  key.classList.add("playing");
  // setTimeout(function(){
  //     key.classList.remove("playing");
  // }, 100);

}

function removeTransition(e) {
  // console.log(e);
  if (e.propertyName !== "transform") return; //skip it if it is not a transform
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

// keys.forEach((key) => key.set);
window.addEventListener("keydown", playSound);

