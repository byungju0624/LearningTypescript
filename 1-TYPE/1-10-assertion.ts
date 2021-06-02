{
  /*
    ** Type Assertions
    -> 쓰지 않는 것이 좋다
    -> Type Assertions가 많다면 어떻게 Type Assertions안쓰고 할 수 있는지 고민해야한다.
    */
  //불가피하게 써야하는 경우
  function jsStrFunc(): any {
    return "hello";
  }
  const result = jsStrFunc(); // 문자열 타입에서 이용가능한 API를 사용하지 못한다. 이유: 타입이 any이기 때문에
  //타입이 어떤 것이 올것을 확실히 알고 있을때 사용한다.(100%장담할때)
  console.log((result as string).length); //문자열이라고 캐스팅할 수 있다.
  console.log((<string>result).length);

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers();
  numbers!.push(2); //"!" 값이 절대적으로 있다라고 할때 쓰는 것
  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); //이렇게 사용하면 안된다.
}
