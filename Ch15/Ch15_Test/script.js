
let upAndDown = 50;
let leftAndRight = 50;

let bulletUpAndDown = 0;
let bulletLeftAndRight = 0;

window.addEventListener("keydown", event => {
  let square = document.querySelector("div.player");
  //let fire = document.querySelector("div.bullet");

  //Movement
  if (event.key == "w" && event.ctrlKey) {
    upAndDown = upAndDown - 5;
    square.style.top = upAndDown + "px";
  } else if (event.key == "w") {
    upAndDown = upAndDown - 10;
    square.style.top = upAndDown + "px";
  }
  if (event.key == "s" && event.ctrlKey) {
    upAndDown = upAndDown + 5;
    square.style.top = upAndDown + "px";
  } else if (event.key == "s") {
    upAndDown = upAndDown + 10;
    square.style.top = upAndDown + "px";
  }
  if (event.key == "a" && event.ctrlKey) {
    leftAndRight = leftAndRight - 5;
    square.style.left = leftAndRight + "px";
  } else if (event.key == "a") {
    leftAndRight = leftAndRight - 10;
    square.style.left = leftAndRight + "px";
  }
  if (event.key == "d" && event.ctrlKey) {
    leftAndRight = leftAndRight + 5;
    square.style.left = leftAndRight + "px";
  } else if (event.key == "d") {
    leftAndRight = leftAndRight + 10;
    square.style.left = leftAndRight + "px";
  }

  //Running Movement
  if (event.key == "W" && event.shiftKey) {
    upAndDown = upAndDown - 20;
    square.style.top = upAndDown + "px";
  }
  if (event.key == "S" && event.shiftKey) {
    upAndDown = upAndDown + 20;
    square.style.top = upAndDown + "px";
  }
  if (event.key == "A" && event.shiftKey) {
    leftAndRight = leftAndRight - 20;
    square.style.left = leftAndRight + "px";
  }
  if (event.key == "D" && event.shiftKey) {
    leftAndRight = leftAndRight + 20;
    square.style.left = leftAndRight + "px";
  }

  //Firing
  if (event.key == "ArrowUp") {
    let fire = document.createElement("div");
    fire.className = "bullet";
    document.body.append(fire);

    bulletUpAndDown = upAndDown;
    bulletLeftAndRight = leftAndRight;
    fire.style.top = upAndDown + "px";
    fire.style.left = leftAndRight + "px";

    for (let i = 1; i < 10; i++) {
      bulletUpAndDown = bulletUpAndDown - 10;
      fire.style.top = bulletUpAndDown + "px";
    }
    event.preventDefault();

  }

  if (event.key == "ArrowDown") {
    let fire = document.createElement("div");
    fire.className = "bullet";
    document.body.appendChild(fire);

    bulletUpAndDown = upAndDown;
    bulletLeftAndRight = leftAndRight;
    fire.style.top = upAndDown + "px";
    fire.style.left = leftAndRight + "px";

    for (let i = 1; i < 10; i++) {
      bulletUpAndDown = bulletUpAndDown + 10;
      fire.style.top = bulletUpAndDown + "px";
    }

    event.preventDefault();

  }

  if (event.key == "ArrowLeft") {
    let fire = document.createElement("div");
    fire.className = "bullet";
    document.body.appendChild(fire);

    bulletUpAndDown = upAndDown;
    bulletLeftAndRight = leftAndRight;
    fire.style.top = upAndDown + "px";
    fire.style.left = leftAndRight + "px";

    for (let i = 1; i < 10; i++) {
      bulletLeftAndRight = bulletLeftAndRight - 10;
      fire.style.left = bulletLeftAndRight + "px";
    }
  }

  if (event.key == "ArrowRight") {
    let fire = document.createElement("div");
    fire.className = "bullet";
    document.body.appendChild(fire);

    bulletUpAndDown = upAndDown;
    bulletLeftAndRight = leftAndRight;
    fire.style.top = upAndDown + "px";
    fire.style.left = leftAndRight + "px";

    for (let i = 1; i < 10; i++) {
      bulletLeftAndRight = bulletLeftAndRight + 10;
      fire.style.left = bulletLeftAndRight + "px";
    }
  }
});
