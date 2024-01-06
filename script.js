const redFader = document.getElementById("red");
const greenFader = document.getElementById("green");
const blueFader = document.getElementById("blue");
const bgColor = document.getElementById("body");
const hexText = document.getElementById("hex");

function mainColor() {
  const red = redFader.value;
  const green = greenFader.value;
  const blue = blueFader.value;

  const color = `rgb(${red},${green},${blue})`;
  bgColor.style.backgroundColor = color;
  hexText.textContent = `rgb(${red},${green},${blue})`;
}

redFader.addEventListener("input", mainColor);
greenFader.addEventListener("input", mainColor);
blueFader.addEventListener("input", mainColor);

function rndmClrPckr() {
  fetch("https://dummy-apis.netlify.app/api/color")
    .then((res) => res.json())
    .then((data) => {
      const { r, g, b } = data.rgb;
      redFader.value = r;
      greenFader.value = g;
      blueFader.value = b;
      mainColor();
    });
}

mainColor();
