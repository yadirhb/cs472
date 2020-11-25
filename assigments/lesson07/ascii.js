let animationOn = false;
let startButton;
let stopButton;
let textArea;
let intervalId;

let animationSelect;

function getAnimation() {
  const animation = textArea.value;
  if (animation) return animation.split("=====\n");

  return [];
}

let currentIndex = 0;

function animate(animation) {
  currentIndex = currentIndex < animation.length ? currentIndex : 0;
  textArea.value = animation[currentIndex++];
}

function onStartClicked() {
  startButton.disabled = true;
  stopButton.disabled = false;

  const animation = getAnimation();

  currentIndex = 0;
  intervalId = setInterval(() => animate(animation), 250);
}

function onStopClicked() {
  startButton.disabled = false;
  stopButton.disabled = true;

  clearInterval(intervalId);
}

function onSelectChange() {
  onStopClicked();
  textArea.value = ANIMATIONS[animationSelect.value];
}

function onDocumentReady() {
  // Handler when the DOM is fully loaded
  textArea = document.getElementById("text-area");

  startButton = document.getElementById("start");
  startButton.addEventListener("click", onStartClicked);

  stopButton = document.getElementById("stop");
  stopButton.addEventListener("click", onStopClicked);

  animationSelect = document.getElementById("animation");
  animationSelect.addEventListener("change", onSelectChange);
}

if (
  document.readyState === "complete" ||
  (document.readyState !== "loading" && !document.documentElement.doScroll)
) {
  onDocumentReady();
} else {
  document.addEventListener("DOMContentLoaded", onDocumentReady);
}
