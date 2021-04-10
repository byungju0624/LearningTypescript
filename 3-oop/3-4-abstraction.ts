{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };
  interface ICoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  } // 의사소통이 규약을 명시해 놓은 계약서 같은 것

  interface ICommercialCoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    fillCoffeeBeans(beans: number): void;
    clean(): void;
  }

  class CoffeeMaker implements ICoffeeMaker, ICommercialCoffeeMaker {
    //위의 인터페이스를 구현하는 클래스,
    //인터페이스를 구현하는 클래스는 인터페이스에 적혀있는 모든 함수를 적어줘야한다.
    private static BEANS_GRAMM_PER_SHOT = 7;
    private coffeeBeans: number = 0;
    private constructor(coffeeBeans: number) {
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
  }

  const maker = CoffeeMaker.makerMachine(32);

  class User {
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
    private internalAge = 4;

    constructor(private firstName: string, private lastName: string) {}
  }
  const user = new User("byungju", "jeong");
  console.log(user.fullName);
  maker.makeCoffee(2);

  //추상화는 인터페이스를 굉장히 간단하게 만듦으로써 사용자가 간편하게 사용가능하다.
  //인캡슐레이션(정보은닉)을 통해서 추상화가 가능하다. 또한 인터페이스를 통해서 추상화 가능,

  class AmateurUser {
    constructor(private machine: ICoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
    }
  }

  class ProBarista {
    constructor(private machine: ICommercialCoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
      this.machine.fillCoffeeBeans(45);
      this.machine.clean();
    }
  }
  const maker2: ICommercialCoffeeMaker = CoffeeMaker.makerMachine(32);
  const amateur = new AmateurUser(maker2);
  const pro = new ProBarista(maker2);
  pro.makeCoffee(); //동일한 오브젝트의 인스턴스일지라도 두가지의 인터페이스를 구현하기 때문에 인터페이스에서 규약된 함수들만 접근이 가능하다.
}
