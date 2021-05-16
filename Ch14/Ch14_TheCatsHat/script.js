let cat = document.querySelector("#cat");
let hat = document.querySelector("#hat");
let bat = document.querySelector("#cat2");

let angle = 0;
let lastTime = null;

function animate(time) {
  if (lastTime != null) angle += (time - lastTime) * 0.001;
  lastTime = time;
  cat.style.top = (Math.sin(angle) * 40 + 40) + "px";
  cat.style.left = (Math.cos(angle) * 200 + 230) + "px";
  hat.style.top = (Math.sin(angle + Math.PI) * 40 + 40) + "px";
  hat.style.left = (Math.cos(angle + Math.PI) * 200 + 230) + "px";
  cat2.style.top = (Math.sin(angle + (0.5 * Math.PI)) * 40 + 40) + "px";
  cat2.style.left = (Math.cos(angle + (0.5 * Math.PI)) * 200 + 230) + "px";

  //hat.style.top = (Math.random(angle) * 40 + 40) + "px";
  //hat.style.left = (Math.random(angle) * 200 + 230) + "px";

  requestAnimationFrame(animate);
}
requestAnimationFrame(animate);
