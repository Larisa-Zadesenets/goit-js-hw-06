function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorEl = document.querySelector(".chenge-color");
const textColorEl = document.querySelector(".color");

changeColorEl.addEventListener("click", onChangeColor);
textColorEl.textContent = document.body.getAttribute(backgroundColor);

  function onChangeColor() {
  const color = getRandomHexColor();
  textColorEl.textContent = color;
  document.body.style.backgroundColor = color;
};





/*function onChangeColor() {
  document.body.style.backgroundColor = getRandomHexColor();
  textColorEl.textContent = document.body.style.backgroundColor;
   
 }*/
 
