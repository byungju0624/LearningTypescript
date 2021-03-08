{
  /*
    ** Type Assertions
    -> 쓰지 않는 것이 좋다
    */
  function jsStrFunc(): any {
    return 2;
  }
  const result = jsStrFunc();
  //타입이 어떤 것이 올것을 확실히 알고 있을때 사용한다.(100%장담할때)
  console.log((result as string).length);
  console.log((<string>result).length);

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers()!;
  numbers.push(2); //숫자타입만 받으려고 장담할 떄
}
