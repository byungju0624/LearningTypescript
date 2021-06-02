{
  /*
    ** Union Types: OR이해하면 충분하다
    -> 많이 쓰인다. 활용도가 높은 타입
    */
  type Direction = "left" | "right" | "up" | "down"; //모든 가능한 케이스 중에 발생할 수 있는 딱하나를 담을 수 있는 타입을 만들고 싶을때
  function move(direction: Direction) {
    console.log(direction);
  }
  move("left");

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 8; //위의 3가지 중 하나만 가능하다. 다른 숫자는 쓰지 못한다. 하나만 할당할 수 있을 때 사용하면 된다.
  type SuccessState = {
    response: {
      body: string;
    };
  };
  type FailState = {
    reason: string;
  };
  type LoginState = SuccessState | FailState;

  function login(): LoginState {
    return {
      response: {
        body: "Loged in",
      },
    };
  }
  function printLoginState(state: LoginState) {
    if ("response" in state) {
      console.log(`${state.response.body} 🎉`);
    } else {
      console.log(`${state.reason} 😂`);
    }
  }
}
