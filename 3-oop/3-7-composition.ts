{
  /*
   *상속이란 것은 수직적으로 관계가 형성된다.
   *상속의 문제점
    - 상속의 깊이가 점점 길어질수록 서로간의 관계가 조금 복잡해질 수 있다.
    - 치명적인 문제: 내가 어떤 부모 클래스를 행동을 수정하게 되면 수정된 사항때문에 이것을 상속하는 모든 자식 클래스에 영향을 끼칧 수 있다.
                  한가지 이상의 부모를 상속 받을 수 없다.
    이러한 상속의 문제 때문에 "composition"을 사용하는 것이 좋다. 
   *composition
    -필요한 기능을 가져와서 재사용할 수 있게 해주는 것
    -코드의 재사용을 높여주는 것이다.
    *치명적인 단점
     -굉장히 타이트하게 커플링되어 있다. 다른 클래스를 만들었을때 모든 클래스가 업데이트 되어야한다. 
     -클래스와 클래스 간에 서로 잘 알고 지내는 것은 좋지 않다. 
   */
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
    constructor(
      coffeeBeans: number,
      private milk: MilkFrother,
      private sugar: SugarProvider
    ) {
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
      const coffee = this.extract(shots);
      const sugarAdded = this.sugar.addSugar(coffee);
      return this.milk.makeMilk(sugarAdded);
    }
  }
  //싸구려 우유 거품기
  interface MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup;
  }
  class CheapMilkSteamer implements MilkFrother {
    private steamMilk(): void {
      console.log("steaming milk....");
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }
  class FancyMilkSteamer implements MilkFrother {
    private steamMilk(): void {
      console.log("Fancy steaming milk....");
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }
  class ColdMilkSteamer implements MilkFrother {
    private steamMilk(): void {
      console.log("Cold steaming milk....");
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }
  class NoMilk implements MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup {
      return cup;
    }
  }
  //설탕 제조기
  interface SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup;
  }
  class CandySugarMixer implements SugarProvider {
    private getSugar() {
      console.log("Getting som sugar from jar");
      return true;
    }
    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return {
        ...cup,
        hasSugar: sugar,
      };
    }
  }
  class SugarMixer implements SugarProvider {
    private getSugar() {
      console.log("Getting som sugar from jar!!!");
      return true;
    }
    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return {
        ...cup,
        hasSugar: sugar,
      };
    }
  }
  class NoSugar implements SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup {
      return cup;
    }
  }
  const cheapMilkMaker = new CheapMilkSteamer();
  const fancyMilkMaker = new FancyMilkSteamer();
  const coldMilkMaker = new ColdMilkSteamer();

  const candySugar = new CandySugarMixer();
  const sugar = new SugarMixer();

  const sweetCandyMachine = new SweetCoffeMaker(12, candySugar);
  const sweetMachine = new SweetCoffeMaker(12, sugar);
  const coldLatteMachine = new CafeLatteMachine(12, "ss", coldMilkMaker);
}
