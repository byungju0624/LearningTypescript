/**
 * interface -> 어떤 것의 규격사항, 다른 사람과 의사소통 할 때, 오브젝트와 오브젝트 간의 의사소통을 할 때 
                정해진 인터페이스를 토대로 해서 서로 간의 상호작용을 할 수 있도록 도와주는 것, 이런 경우에 타입을 쓰는 것은 좋지 않다. 어떠한 것을 구현할 목적으로는 인터페이스가 좋다.
 * tpye -> 우리가 어떠한 데이터를 담을 때 어떤 데이터를 담을 수 있을지 이 데이터의 모습, 데이터의 타입을 결정하는 것 데이터를 담을 목적으로는 타입을 쓰는 것이 좋다.
 */

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
  z: 1,
};

//★ class

class Pos1 implements PositionType {
  x: number;
  y: number;
}

class Pos2 implements PositionInterface {
  x: number;
  y: number;
  z: number;
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
