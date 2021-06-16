{
  //다형성을 이용하면 한가지의 클래스나 한가지의 인터페이스를 통해서 다른 방식으로 구현한 클래스를 제작 가능
  //다형성의 장점: 내부적으로 구현된 다양한 클래스 들이 한가지 인터페이스를 구현하거나 동일한 부모 클래스를 상속했을때 동일한 함수를 어떤 클래스인지 구분하지 않고 공통된 API를 호출할 수 있다.
  //다형성이란 한가지의 큻래스나 또는 한가지의 인터페이스를 상속하는 자식 클래스들이 인터페이스나 부모클래스에 있는 함수를 다른 방식으로 다양하게 구성함으로써 다형성을 만들어 볼 수 있는 것을 말한다.
  //이처럼 인터페이스나 부모클래스에 있는 동일한 함수 API를 통해서 각각의 구현된 자식 클래스의 내부 구현 사항을 신경쓰지 않고 약속된 한가지의 api를 호출함으로써 사용하는 사람도 간편하게 다양한 기능들을 활용할 수 있도록 도와주는것
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean; //옵션
  };
  interface ICoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMaker implements ICoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT = 7;
    private coffeeBeans: number = 0;
    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }
    static makerMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
    }
    clean() {
      console.log("cleaning the mashine");
    }
    private grindBeans(shots: number) {
      console.log(`grind beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enough coffee beans");
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
    }
    private preheat(): void {
      console.log("heating up...");
    }
    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots...`);
      return {
        shots,
        hasMilk: false,
        hasSugar: false,
      };
    }
    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }
  class CafeLatteMachine extends CoffeeMaker {
    constructor(beans: number, private serialNumber: string) {
      super(beans);
    }
    private steamMilk(): void {
      console.log("steaming milk....");
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      this.steamMilk();
      return { ...coffee, hasMilk: true };
    }
  }
  class SweetCoffeMaker extends CoffeeMaker {
    constructor(bean: number) {
      super(bean);
    }
    private addSugar(): void {
      console.log("adding sugar...");
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      this.addSugar();
      return { ...coffee, hasSugar: true };
    }
  }
  const maker = CoffeeMaker.makerMachine(32);
  const sweetCoffeeMaker = new SweetCoffeMaker(23);
  const sweeetCoffe = sweetCoffeeMaker.makeCoffee(1);
  const machine = new CoffeeMaker(23);
  const latteMachine = new CafeLatteMachine(23, "sssssss");
  const coffee = latteMachine.makeCoffee(1);
  const machines: CoffeeMaker[] = [
    new CoffeeMaker(24),
    new SweetCoffeMaker(16),
    new CafeLatteMachine(16, "ssssss"),
  ];
  machines.forEach((machine) => {
    console.log("----------------------");
    machine.makeCoffee(1);
  });
  console.log(machines);
}
