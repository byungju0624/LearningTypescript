{
  const num: number = 1;

  const str: string = "hello";

  const boo: boolean = true;

  let age: number | undefined;
  age = undefined;
  age = 1;

  let person: number | null;

  //unknown -> 가능하면 쓰지 않는 게 좋다. 구체적으로 쓰는 게 좋다.
  let notSure: unknown = 0;
  notSure = "he";
  notSure = true;

  //any -> 어느 것이든 담을 수 있는 것: 가능하면 쓰지 않는 것이 좋다.

  let anything: any = 0;
  anything = "hello";

  //void 함수를 사용할때 아무런 값을 리턴하지 않을때-> 생략가능 변수에 선언하는 경우는 없다.

  function print();

  //never 어떠한 에러를 던질 때 끝나지 않게 해준다. 리턴되지 않을때 명시하기 위해서 사용
  function thorwError(message: string): never {
    //message -> sever (log)
    throw new Error(message);
    while(true){}
    
  }

  //object
  let obj:object;// 배열도 전달이 가능, 쓰지 않는 것이 좋다.
function acceptSomeObject(obj: object) {

}
}
