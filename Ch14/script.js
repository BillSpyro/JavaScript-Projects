function talksAbout(node, string) {
  if (node.nodeType == Node.ELEMENT_NODE) {
    for (let i = 0; i < node.childNodes.length; i++) {
      if (talksAbout(node.childNodes[i], string)) {
        return true;
      }
    }
    return false;
  } else if (node.nodeType == Node.TEXT_NODE) {
    return node.nodeValue.indexOf(string) > -1;
  }
}

//console.log(document.body);

console.log(talksAbout(document.body, "book"));
// → true

let ostrich = document.getElementById("gertrude");
console.log(ostrich.src);
// → https://eloquentjavascript.net/img/ostrich.png

let paragraphs = document.body.getElementsByTagName("p");
document.body.insertBefore(paragraphs[6], paragraphs[4]);
// → Three
//   One
//   Two

function replaceImages() {
  let images = document.body.getElementsByTagName("img");
  for (let i = images.length - 1; i >= 0; i--) {
    let image = images[i];
    if (image.alt) {
      let text = document.createTextNode(image.alt);
      image.parentNode.replaceChild(text, image);
    }
  }
}
// → The Cat in the Hat

let arrayish = {
  0: "one",
  1: "two",
  length: 2
};
let array = Array.from(arrayish);
console.log(array.map(s => s.toUpperCase()));
// → ["ONE", "TWO"]

function elt(type, ...children) {
  let node = document.createElement(type);
  for (let child of children) {
    if (typeof child != "string") node.appendChild(child);
    else node.appendChild(document.createTextNode(child));
  }
  return node;
}

document.getElementById("quote").appendChild(
  elt("footer", "—",
    elt("strong", "Karl Popper"),
    ", preface to the second edition of ",
    elt("em", "The Open Society and Its Enemies"),
    ", 1950"));
// → No book can ever be finished. While working on it we learn just enough to find it immature the moment we turn away from it.
//—Karl Popper, preface to the second edition of The Open Society and Its Enemies, 1950

let paras = document.body.getElementsByTagName("p");
for (let para of Array.from(paras)) {
  if (para.getAttribute("data-classified") == "secret") {
    para.remove();
  }
}
// → I have two feet.

let para = document.body.getElementsByTagName("p")[0];
console.log("clientHeight:", para.clientHeight);
console.log("offsetHeight:", para.offsetHeight);
// → clientHeight: 18
//   offsetHeight: 24
