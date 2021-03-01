{
  /*
    ** Type Alias
    -> 새로운 타입을 정의할 수 있다.
    */
  type Text = string;
  const name: Text = "byungju";
  type Num = number;
  type Student = {
    name: string;
    age: number;
  };
  const student: Student = {
    name: "byungju",
    age: 32,
  }; //아무거나 정의 할 수 없다.

  /*
  ** String Literal Types
  -> 문자열로도 지정할 수 있다.
  */
  type Name = "name";
  let byungjuName: Name;
  byungjuName = "name";

  type Boal = true;
  const isCat: Boal = true;
}
