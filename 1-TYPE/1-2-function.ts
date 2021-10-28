{
  // JavaScript
  function jsAdd(num1, num2) {
    return num1 + num2;
  }
  // typeSctipt
  function Add(num1: number, num2: number): number {
    return num1 + num2;
  }
  // // JavaScript
  // function jsFetchNum(id) {
  //   //     code... code...     code...
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }
  // //TypeScript -> 조금더 나은 문서화 효과를 보여준다.
  // function FetchNum(id: string): Promise<number> {
  //   //code...     code...     code...
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }
  // JsvaScript => TypeScript Optional parameter
  function printName(firstName: string, lastName?: string) {
    //정해진 인자 갯수만큼 넘겨줘야한다.
    console.log(firstName);
    console.log(lastName); //'?'(optional parameter)를 사용함으로써 선택할 수 있게 만들어 준다.(써도 되고 안써도 되고)
  }
  printName("Steve", "yeon");
  printName("byung");

  //Default parameter

  function printMessage(message: string = "default message") {
    console.log(message);
  }
  printMessage();

  //Rest parameter

  function addNumbers(...num: Array<number>): number {
    return num.reduce((a, b) => a + b);
  }
  console.log(addNumbers(1, 2, 3, 4, 5, 6));
}
