import fn from "./modules/ticTacToe/main.js";

document.querySelectorAll(".cell").forEach((cell) => {
  cell.addEventListener("click", () => {
    fn(cell.id);
  });
});
