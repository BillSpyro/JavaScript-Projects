function chessboard(size, squares = 10) {
  let row = document.createElement('div');
  row.style.height = (size * squares) + "px";
  row.style.width = (size * squares) + "px";
  let increase = 0;

  for (let number = 0; number < size; number++) {

    for (let number2 = 0; number2 < size; number2++) {

      if (number % 2 == 0) {
        if (number2 % 2 == 0) {
          let hash = document.createElement('div');
          hash.style.backgroundColor = "red";
          hash.style.height = squares + "px";
          hash.style.width = squares + "px";
          hash.style.position = "relative";
          hash.style.left = increase + "px";
          hash.style.top = -(size * increase) + "px";
          row.append(hash);
        } else {
          let space = document.createElement('div');
          space.style.backgroundColor = "black";
          space.style.height = squares + "px";
          space.style.width = squares + "px";
          space.style.position = "relative";
          space.style.left = increase + "px";
          space.style.top = -(size * increase) + "px";
          row.append(space);
        }

      } else {

        if (number2 % 2 == 0) {
          let space = document.createElement('div');
          space.style.backgroundColor = "black";
          space.style.height = squares + "px";
          space.style.width = squares + "px";
          space.style.position = "relative";
          space.style.left = increase + "px";
          space.style.top = -(size * increase) + "px";
          row.append(space);
        } else {
          let hash = document.createElement('div');
          hash.style.backgroundColor = "red";
          hash.style.height = squares + "px";
          hash.style.width = squares + "px";
          hash.style.position = "relative";
          hash.style.left = increase + "px";
          hash.style.top = -(size * increase) + "px";
          row.append(hash);
        }

      }

    }

    increase = increase + squares;

  }

  document.body.append(row);
}
