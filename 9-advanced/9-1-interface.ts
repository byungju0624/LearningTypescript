type PositionType = {
  x: number;
  y: number;
};
interface PositionInterface {
  x: number;
  y: number;
}

//★ object

const obj1: PositionType = {
  x: 1,
  y: 1,
};

const obj2: PositionInterface = {
  x: 1,
  y: 1,
};

//★ class

class Pos1 implements PositionType {
  x: number;
  y: number;
}

class Pos2 implements PositionInterface {
  x: number;
  y: number;
}

// Extends 기존의 인터페이스,타입를 확장할 수 있다.

interface ZPositionInterface extends PositionInterface {
  // 상속을 통해서 확장 가능
  z: number;
}

type ZPositionType = PositionType & { z: number }; //인터섹션을 이용해서 두가지를 묶은 타입을 만들 수 있다.

//오직 인터페이스만 머지 가능
interface PositionInterface {
  z: number;
}

//타입만 가능

type Person = {
  name: string;
  age: number;
};

type Name = Person["name"];

type NumberType = number;
type Direction = "left" | "right";
