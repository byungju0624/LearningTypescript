{
  /*
    ** Union Types: OR
    -> 많이 쓰인다. 활용도가 높은 타입
    */
  type Direction = "left" | "right" | "up" | "down"; //모든 가능한 케이스 중에 발생할 수 있는 딱하나를 담을 수 있는 타입을 만들고 싶을때
  function move(direction: Direction) {
    console.log(direction);
  }
  move("left");

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 8; //위의 3가지 중 하나만 가능하다.
}
