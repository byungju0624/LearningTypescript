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
/*
Imperative and Procedural Programming(명령과 절차를 따라가는 프로그래밍)
-> 어플리케이션이 동작하기 위한 데이터와 함수들 위주로 구성하는 것을 말한다.
정의된 순서대로 절차적으로 함수가 하나씩 호출하는 것을 절차지향적 프로그래밍이라한다. 
단점: 
하나를 수정하기 위해서는 전체적인 어플리케이션이 어떻게 작동하는지 잘 이해해야한다. 하나를 수정했을 때 다른 사이드 이펙트가 발색할 확률이 높아진다. 한눈에 이해하기 어렵다. 유지보수 확장성도 떨어진다.

객체지향 프로그래밍(Object Oriented Programming): 프로그램을 객체로 정의해서 객체들끼리 서로 의사소통하도록 디자인하고 코딩하는 것
사람과 가까운 생각을 하면서오브젝트를 구성한다.
오브젝트 단위로 구성해 나가기 때문에 한곳에서 문제가 생긴다면 관련 있는 오브젝트만 이해하고 수정하면 된다. 관련된 오브젝트를 재사용할 수 있다. 확장성도 높다.

생산성, 퀄리티, 빠르게 작동한다. 

오브젝트의 속성을 가지고 있는 데이터와 행동을 할 수 있는 코드를수행할 수 있는 함수로 이뤄져있다. 
Class- template: 어떻게 생겼는지 정의
Object- class의 인스턴스

4가지 원칙
캡슐화: 서로 연관있는 데이터를 묶어서 캡슐화 하는것-> 외부에서 보이지 않는다.
           내부상태를 외부에서 변경하지 못하지만 외부행동을 통해서 내부상태를 변	   경할수 있다.
추상화: 내부의 복잡한 기능을 이해하지 않고 외부에서 간단한 인터페이스를 
	   이해하고 사용하는것
상속성: 한번 잘 정의해둔 것을 다시 사용할 수 있다.
다형성: 공통적으로 함수를 호출할 수 있다. 
*/
