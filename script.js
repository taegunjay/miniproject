//need to create 2player, with even and odd clicked. need buttons to reset,
//need to create board.

let playingBoard = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
]

let buttons = document.querySelectorAll(".gridItem");
console.log(buttons);
for (let i = 0; i < buttons.length; i++) {


  buttons[i].addEventListener("click", playingGame)
  function playingGame(e) {
    e.preventDefault();
    buttons[i].style.backgroundColor = "red";
    console.log(e.target.parentNode);

  }
};
