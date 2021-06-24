{
  interface Employee {
    pay(): void;
  }
  class FullTimeEmployee implements Employee {
    pay() {
      console.log("full time");
    }
    workFullTime() {}
  }
  class PartTimeEmployee implements Employee {
    pay() {
      console.log(`part time`);
    }
    workPartTime() {}
  }
  //세부적인 타입을 인자로 받아서 추상적인 타입으로 다시 리턴하는 함수는 안좋다. 타입을 광범위하게 만드는 행위는 아주 위험하다.
  function payBad(employee: Employee): Employee {
    employee.pay();
    return employee;
  }
  function pay<T extends Employee>(employee: T): T {
    employee.pay();
    return employee;
  }
  const ellie = new FullTimeEmployee();
  const bob = new PartTimeEmployee();
  ellie.workFullTime();
  bob.workPartTime();
  const ellieAfterPay = pay(ellie); //세부 클래스의 정보를 잃어버린다.
  const bobAfterPay = pay(bob);
  function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }
  const obj = {
    name: "ellie",
    age: 20,
  };

  const obj2 = {
    animal: "puppy",
  };

  console.log(getValue(obj, "name"));
  console.log(getValue(obj, "age"));
  console.log(getValue(obj2, "animal"));
}
