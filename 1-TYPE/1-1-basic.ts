{
  /**
   * Javascript
   * primitive: number, string, boolean, bigint, symbol, null, undefined
   * object: function, array
   **/
  //Number: number로 설정하면 정수나 소수점 마이너스 값이 할당 가능하다.
  const num: number = 1;

  //String: 문자열만 할당 가능
  const str: string = "hello";

  //Boolean: 참과 거짓만 할당 가능
  const boo: boolean = true;

  //undefined: 값이 있는지 없는지 아무것도 결정되지 않은 상태 보편적으로 많이 쓴다.
  let age: number | undefined;
  age = undefined;
  age = 1;
  function find(): number | undefined {
    return undefined;
  }

  //null: 텅텅 비어져있다고 알려주는 것
  let person: number | null;
  person = null;
  person = 1;

  //unknown -> 가능하면 쓰지 않는 게 좋다. 구체적으로 쓰는 게 좋다. 있는 이유: 타입이 없는 자바스크립트와 연동해서 쓸 수 있게 하기 위해서
  // 어떤 종류의 데이터가 담길지 알 수 없는 타입이 돼 버린다. 어떤 타입이든 다 넣을 수 있다.
  let notSure: unknown = 0;
  notSure = "he";
  notSure = true;

  //any -> 어느 것이든 담을 수 있는 것: 가능하면 쓰지 않는 것이 좋다.

  let anything: any = 0;
  anything = "hello";

  //void 함수를 사용할때 아무런 값을 리턴하지 않을때-> 생략가능 변수에 선언하는 경우는 극히 드물다.

  function print() {
    console.log("hello");
  }

  //never 어떠한 에러를 던질 때 끝나지 않게 해준다. 리턴되지 않을때 명시하기 위해서 사용

  function thorwError(message: string): never {
    //message -> sever (log)
    throw new Error(message);
    while (true) {}
  }

  //object

  let obj: object; // 배열도 전달이 가능, 쓰지 않는 것이 좋다. 원시타입을 제외한 모든 오브젝트 타입을 담을 수 있다.
  function acceptSomeObject(obj: object) {}
}
