import 'css/style.css';
import './lazyModule.js'

document.getElementById("lazy-button").addEventListener("click", () => {
  import("./lazyModule.js").then((module) => {
    module.default();
  });
});

console.log("hello")