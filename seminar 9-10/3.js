console.log('Задание 3 - шахматная доска')
let cell = "";
let size = 8;
for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0)
      cell += " ";
    else
      cell += "#";
  }
  cell += "\n";
}


console.log(cell);