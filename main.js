let body = document.querySelector("body");
let generator = document.querySelector(".c1");
let radialGenerator = document.querySelector(".c2");
let textColor = document.querySelector(".color-text");
let hashtag = "#";
const color = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];
const angle = [
  0, 15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180, 195, 210, 225, 240,
  255, 270, 285, 300, 315, 330, 345, 360,
];
generator.addEventListener("click", function () {
  let color1 = "";
  let color2 = "";
  let opacity = "90";
  let randomAngleIndex = Math.trunc(Math.random() * angle.length);
  let angle1 = angle[randomAngleIndex];
  let procent = Math.trunc(Math.random() * 70);

  for (let i = 0; i < 6; i++) {
    color1 += color[Math.trunc(Math.random() * color.length)];
    color2 += color[Math.trunc(Math.random() * color.length)];
  }
  const finalColor1 = hashtag + color1.toUpperCase() + opacity;
  const finalColor2 = hashtag + color2.toLowerCase() + opacity;
  body.style.background = `linear-gradient(${angle1}deg, ${hashtag}${color1}${opacity} ${procent}%, ${hashtag}${color2}${opacity} 100%)`;
  textColor.textContent = `linear-gradient(${angle1}deg, ${finalColor1}, ${finalColor2})`;
});
radialGenerator.addEventListener("click", function () {
  let color1 = "";
  let color2 = "";
  let opacity = "90";
  let randomAngleIndex = Math.trunc(Math.random() * angle.length);
  let angle1 = angle[randomAngleIndex];
  let procent = Math.trunc(Math.random() * 70);

  for (let i = 0; i < 6; i++) {
    color1 += color[Math.trunc(Math.random() * color.length)];
    color2 += color[Math.trunc(Math.random() * color.length)];
  }
  const finalColor1 = hashtag + color1.toUpperCase() + opacity;
  const finalColor2 = hashtag + color2.toLowerCase() + opacity;
  body.style.background = `radial-gradient(circle, ${hashtag}${color1}${opacity} ${procent}%, ${hashtag}${color2}${opacity} 100%)`;
  textColor.textContent = `radial-gradient(circle, ${finalColor1}, ${finalColor2})`;
});