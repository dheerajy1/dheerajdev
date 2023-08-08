let dotContainer = document.getElementById("dot-container");
let length = 40;

window.onload = () => {
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      let dot = document.createElement("div");
      dot.classList.add("dot");
      let allFunctions = [
        Math.sin,
        Math.cos,
        Math.tan,
        Math.acos,
        Math.atan,
        Math.sinh,
        Math.cosh,
        Math.tanh,
        Math.asinh,
        Math.acosh,
      ];
      let ran = Math.floor(Math.random() * allFunctions.length);
      dot.style.animationDelay = `${allFunctions[ran](i * j) / 2}s`;
      dotContainer.appendChild(dot);
    }
  }
};
