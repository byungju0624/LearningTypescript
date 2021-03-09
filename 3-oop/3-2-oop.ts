{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };
  //청사진
  class CoffeeMaker {
    //static은 멤버변수 뿐만 아니라 함수에서도 사용 가능하다.
    static BEANS_GRAMM_PER_SHOT = 7; //타입추론을 이용할 수 있기때문에 타입을 따로 정해주지 않아도 된다. static을 사용하면 classLevel
    coffeeBeans: number = 0;
    constructor(coffeeBeans: number) {
      //인스턴스를 만들때 항상 처음에 호출 되는 함수
      this.coffeeBeans = coffeeBeans;
    }
    static makerMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }
    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        //this대신 클래스name을 넘겨줘야한다.
        throw new Error("Not enough coffee beans");
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }
  //인스턴스
  const maker = new CoffeeMaker(32);
  console.log(maker);
  CoffeeMaker.makerMachine(5);
}
