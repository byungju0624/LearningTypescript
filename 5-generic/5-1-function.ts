{
  //문제점: 숫자만 확인 가능
  function checkNotNullBad(arg: number | null): number {
    //Bad
    if (arg === null) {
      throw new Error("not valid number");
    }
    return arg;
  }
  //문제점: 타입이 보장되지 않는다.
  function checkNullAnyBad(arg: any | null): any {
    if (arg === null) {
      throw new Error("not valid number");
    }
    return arg;
  }
  //제네릭: 어떤 타입을 받아올 수 있고, 타입이 보장된다.
  //사용하는 사람이 타입을 지정할 수 있다.
  function checkNotNull<T>(arg: T | null): T {
    if (arg === null) {
      throw new Error("not valid number");
    }
    return arg;
  }
  const number = checkNotNull(11);
  const boal: boolean = checkNotNull(true);
  console.log(number);
}
