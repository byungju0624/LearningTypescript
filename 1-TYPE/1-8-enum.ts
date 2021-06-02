{
  /*
    **enum
    -> 여러가지 관련된 상수값들을 한곳에 모아서 정의할 수 있게 도와주는 타입,자바스크립트에서는 존재하지 않는다.
    -> 문제점: 다른 어떤 숫자를 할당할 수 있다는 게 문제, 타입이 정확하게 보장되지 않는다.
    -> 유니언 타입으로 태체 되서 사용가능하다.
    */
  //JavaScript
  const MAX_NUM = 6;
  const MAX_STUDENT_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  //enum에 가깝게 표현할 수 있는 방법
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1 });
  const daysOfToday = DAYS_ENUM.MONDAY;
  enum Days { //숫자를 정하지 않으면 자동으로 0부터 시작해서 하나씩 증가해서 나타내준다.
    Monday = 1, //문자열은 수동적으로 하나하나씩 설정해줘야한다.
    Tuesday, //관련있는 상수값을 묶어서 사용한다.
    Wednesday, //가능한 한 쓰지 않는것이 좋다. 이유: 이넘으로 타입이 지정된 변수에 다른 어떤 숫자도 할당할 수 있다는 게 문제!! 타입이 정확하게 보장되지 않는다.
  }
  console.log(Days.Tuesday);
}
