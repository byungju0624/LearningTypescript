{
  const obj = {
    name: "byung",
  };
  obj.name;
  obj["name"];
  type Animal = {
    name: string;
    age: number;
    gender: "male" | "female";
  };
  type Name = Animal["name"];
  const text: Name = "hello";
  type Gender = Animal["gender"];
  type Keys = keyof Animal; // 'name' | 'age' | 'gender'
  const key: Keys = "age";
  type Person = {
    name: string;
    gender: Animal["gender"];
  };
  const person: Person = {
    name: "byung",
    gender: "male",
  };
}
