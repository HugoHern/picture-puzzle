let rows = 5;
let columns = 5;

let currTile; //selected tile
let otherTile; //tile to be swapped with

let turns = 0; //keep track of turns

window.onload = function () {
  //initialize the 5x5 board
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      //<img>
      let tile = document.createElement("img");
      tile.src = "./images/blank.jpg";

      document.getElementById("board").append(tile);
    }
  }
};
