/**
 * Let's make a game 🕹
 */
let position = { x: 0, y: 0 };
type Direction = "up" | "down" | "left" | "right";
function move(str: Direction) {
  switch (str) {
    case "up":
      return position.y++;
    case "down":
      return position.y--;
    case "left":
      return position.x--;
    case "right":
      return position.x++;
    default:
      new Error("unknown direction");
  }
  //   if (str === "up") {
  //     position.y++;
  //   } else if (str === "down") {
  //     position.y--;
  //   } else if (str === "left") {
  //     position.x--;
  //   } else if (str === "right") {
  //     position.x++;
  //   }
}

console.log(position); // { x: 0, y: 0}
move("up");
console.log(position); // { x: 0, y: 1}
move("down");
console.log(position); // { x: 0, y: 0}
move("left");
console.log(position); // { x: -1, y: 0}
move("right");
console.log(position); // { x: 0, y: 0}
