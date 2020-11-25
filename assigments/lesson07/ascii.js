let animationOn = false;
let startButton;
let stopButton;
let textArea;
let intervalId;

let animationSelect;
let fontSizeSelect;

let turboCheck;

function getAnimation() {
  const animation = textArea.value;
  if (animation && animation.length > 0) return animation.split("=====\n");

  return [];
}

let currentIndex = 0;

function animate(animation) {
  if (animation && animation.length > 0) {
    currentIndex = currentIndex < animation.length ? currentIndex : 0;
    textArea.value = animation[currentIndex++];
  }
}

function start() {
  const animation = getAnimation();

  currentIndex = 0;
  intervalId = setInterval(
    () => animate(animation),
    turboCheck.checked ? 50 : 250
  );
  animationOn = true;
}

function onStartClicked() {
  startButton.disabled = true;
  stopButton.disabled = false;

  start();
}

function stop() {
  clearInterval(intervalId);
  textArea.value = ANIMATIONS[animationSelect.value];
  animationOn = false;
}

function onStopClicked() {
  startButton.disabled = false;
  stopButton.disabled = true;

  stop();
}

function onSelectChange() {
  textArea.value = ANIMATIONS[animationSelect.value];
  if (animationOn) restart();
}

function restart() {
  stop();
  start();
}

function onFontSizeSelectChange() {
  textArea.className = fontSizeSelect.value.toLowerCase().replace(" ", "-");
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
  fontSizeSelect = document.getElementById("fontsize");
  fontSizeSelect.addEventListener("change", onFontSizeSelectChange);

  turboCheck = document.getElementById("turbo");
  turboCheck.addEventListener("change", onSelectChange);
}

if (
  document.readyState === "complete" ||
  (document.readyState !== "loading" && !document.documentElement.doScroll)
) {
  onDocumentReady();
} else {
  document.addEventListener("DOMContentLoaded", onDocumentReady);
}
