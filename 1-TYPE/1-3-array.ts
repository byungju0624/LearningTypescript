{
  const fruits: string[] = ["🍎", "🍊"]; //일관성있게 코드를 짜고 싶다면 이렇게 하는게 좋다.
  const scroes: Array<number> = [1, 2, 3];
  function printArray(fruits: readonly string[]) {
    //읽기만 가능하고 변경 불가능하다.
  }
  //Tuple -> 서로다른 타입을 함께 가질 수 있는 배열, interfase, type alias, class 대체해서 사용하는 것이 좋다.
  let student: [string, number];
  student = ["name", 123];
  student[0];
  student[1];
  //튜플 사용 권장 X -> 인덱스로 접근하는 것이 가독성이 떨어진다.
  const [name, age] = student; //이렇게 접근하면 더 확실하게 알 수 있다.
}
