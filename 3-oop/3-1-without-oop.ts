{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };
  const BEANS_GRAMM_PER_SHOT = 7; //타입추론을 이용할 수 있기때문에 타입을 따로 정해주지 않아도 된다.
  let coffeeBeans: number = 0;
  function makeCoffee(shots: number): CoffeeCup {
    if (coffeeBeans < shots * BEANS_GRAMM_PER_SHOT) {
      throw new Error("Not enough coffee beans");
    }
    coffeeBeans -= shots * BEANS_GRAMM_PER_SHOT;
    return {
      shots,
      hasMilk: false,
    };
  }
  coffeeBeans += 3 * BEANS_GRAMM_PER_SHOT;
  const coffee = makeCoffee(2);
  console.log(coffee);
}
