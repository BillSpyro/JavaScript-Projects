let hash = "#";
for (let number = 0; number < 10; number = number + 1) {
  let triangle = document.createElement('p');
  triangle.append(hash);
  hash += "#";
  document.body.append(triangle);
}
