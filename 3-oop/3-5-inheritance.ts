{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
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
      };
    }
    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  } //인터페이스 구현시 implements 사용

  //다른 클래스를 상속할 때 extends사용, overwriting: 자식클래스에서 부모클래스에 있는 함수를 덮어 씌울 수 있다.
  class CafeLatteMachine extends CoffeeMaker {
    constructor(beans: number, private serialNumber: string) {
      super(beans);
    }
    private steamMilk(): void {
      console.log("steaming milk....");
    }
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots); // 부모 클래스에 있는 함수를 사용하고 싶으면 super라는 키워드를 사용하면 된다.
      this.steamMilk();
      return { ...coffee, hasMilk: true };
    }
  }
  const maker = CoffeeMaker.makerMachine(32);

  const machine = new CoffeeMaker(23);
  const latteMachine = new CafeLatteMachine(23, "sssssss");
  const coffee = latteMachine.makeCoffee(1);
  console.log(coffee);
}
