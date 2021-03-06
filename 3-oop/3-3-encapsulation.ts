{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };
  /**
   * 정보를 은닉할 수 있는 방법
   * public : 따로 작성하지 않으면 default가 public으로 돼 있다.
   * private : 외부에서 절대 볼수 없고 접근할 수 없다.
   * protected : 외부에서는 접근불가지만 클래스를 상속한  자식클래스에서는 접근 가능하게 할 수 있다.
   * 캡슐화 : 클래스를 만들 때 외부에서 접근할 수 있는 것은 무엇인지 내부적으로만 가지고 있어야하는 것은 무엇인지 결정가능.
   */

  class CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT = 7;
    private coffeeBeans: number = 0;
    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }
    static makerMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      // 조금더 안정성을 높일 수 있다.
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enough coffee beans");
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const maker = CoffeeMaker.makerMachine(32);
  //캡슐화를 하지 않으면 제약사항이 없기 때문에 정보를 바꿀 수 있다.

  class User {
    get fullName(): string {
      //멤버변수처럼 사용가능하다.
      return `${this.firstName} ${this.lastName}`;
    }
    private internalAge = 4;
    get age(): number {
      return this.internalAge;
    }
    set age(num: number) {
      this.internalAge = num;
    }
    constructor(private firstName: string, private lastName: string) {}
  }
  const user = new User("byungju", "jeong");
  console.log(user.fullName);
  user.age = 6;
}
