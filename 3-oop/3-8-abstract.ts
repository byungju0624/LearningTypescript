{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean; //옵션
  };
  interface ICoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  abstract class CoffeeMaker implements ICoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT = 7;
    private coffeeBeans: number = 0;
    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
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
    protected abstract extract(shots: number): CoffeeCup;
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
    protected extract(shots: number): CoffeeCup {
      this.steamMilk();
      return {
        shots,
        hasMilk: true,
      };
    }
  }
  class SweetCoffeMaker extends CoffeeMaker {
    constructor(bean: number) {
      super(bean);
    }
    private addSugar(): void {
      console.log("adding sugar...");
    }
    protected extract(shots: number): CoffeeCup {
      this.addSugar();
      return {
        shots,
        hasSugar: true,
      };
    }
  }

  const machines: CoffeeMaker[] = [
    new SweetCoffeMaker(16),
    new CafeLatteMachine(16, "ssssss"),
  ];
  machines.forEach((machine) => {
    console.log("----------------------");
    machine.makeCoffee(1);
  });
  console.log(machines);
}
