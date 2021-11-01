# LearningTypescript

> - 타입스크립트는 자바스크립트 위에 만들어진 언어
> - tsc : 타입스크립트 컴파일러를 실행할 수 있는 명령어
>   컴파일러를 이용해서 자바스크립트로 변환해줘야 실행가능하다. 업데이트 된 내용이 자동으로 컴파일 되지 않는다.
> - ts-node : 내부적으로 타입스크립트 파일을 자바스크립트 파일로 변환해서 실행시켜준다.
> - watch모드 : 기존에 업데이트 시 컴파일을 해줬어야 하는데 이 모드에서는 파일 업데이트시 자동으로 컴파일이 진행된다.

---

> 1. Type
>
> - primitive: number, string, boolean, bigint(더 큰 숫자의 범위를 설정), null, undefined, symbol
>   - Number Type

```javascript
const num: number = 1;
```

> - String Type

```javascript
const str: string = "hello";
```

> - Boolean Type

```javascript
const boal: boolean = false;
```

> - undefined: 값이 있는지 없는지 아무것도 결정되지 않은 상태, 단독적으로 쓰지는 않는다.
> - null: 조금 더 명확하게 비어있다라고 결정된 것
> - unknown: 어떤 데이터 타입이든 변수에 담을 수 있다. 가능하면 쓰지 않는 것이 좋다.
> - any: 무엇이든 할당할 수 있다. 가능하면 쓰지 않는 것이 좋다.
> - void: 아무것도 리턴하지 않으면 자동으로 void라는 타입이 된다. void의 경우 생략 가능하다. 변수에 선언해서 쓰는 일은 극히 드물다.
> - never: 어플리케이션에서 에러를 던질 때 리턴하는 값이 없을 때 사용한다. 함수가 절대 리턴하지 않을 때 명시해준다.
> - object: 원시타입을 제외한 모든 object타입을 전달할 수 있다. 잘 쓰지 않는다. 조금 더 명시해서 사용하는 것이 좋다.

---

> 2. 함수 정의 방법
>
> - Optional parameter: **?**를 사용한 파라미터는 전달해도 되고 안해도 되는 optional이 된다. 전달하지 않으면 undefined가 출력된다.
> - Defult parameter: 파라미터에 아무것도 전달하지 않아도 기본으로 값을 지정해 놓으면 기본으로 지정한 값이 출력된다.
> - Rest parameter

---

> 3. Array, Tuple
>
> - Array 정의 방법

```javascript
const fruits: string[] = ["hello", "world"];
const scores: Array<number> = [1, 2, 3];
```

> - readonly: 데이터를 읽을 수만 있게 만들 수 있다. **readonly**는 첫번재 버전에서만 사용가능하기 때문에 코드의 일관성을 지키고 싶으면 첫번째 버전을 사용하는 것이 유용하다.
> - Tuple: 서로다른 타입을 함께 가질 수 있는 배열

```javascript
let student: [string,number] student = ['name', 10] ;
student[0]//name
studnet[1]//10
```

> - Tuple사용은 권장하지 않는다. 데이터에 접근할 때 인덱스처럼 접근하는 것이 가독성이 떨어진다. 데이터에 직접 접근하기 전에는 어떤 값이 들어 있는 지 확인하기 힘들다. interface, type alias, class로 대체 가능

---

> 4. Type Alias
>
> - 원시 타입 뿐만 아니라 오브젝트 타입을 우리가 원하는 새로운 타입으로 정의할 수 있다. 다양한 타입을 지정할 수 있다.

```typescript
type Text = string;
const name: Text = "hello";
const address: Text = "korea";
type Num = number;
type Student = {
  name: string;
  age: number;
};
const student: Student = {
  name: "name",
  age: 12,
};
```

> - String Literal Types
> - 타입을 문자열로도 지정할 수 있다.

---

> 5. Union Types
>
> - or로 생각하고 있으면 된다. 모든 가능한 케이스 중 발생할 수 있는 딱 하나를 받을 수 있는 타입을 만들고 싶을 때 사용, 활용도가 높은 타입

```typescript
type Direction = "left" | "right" | "up" | "down";
function move(direction: Direction) {
  console.log(direction);
}
```

---

> 6. Intersection Type
>
> - 모든 것을 다 포함하는 성격의 타입, &와 같은 속성

```typescript
type Student = {
  name: string;
  score: number;
};
type Worker = {
  employeeId: number;
  work: () => void;
};
function internWork(person: Student & Worker) {
  console.log(person.name, person.employeeId);
}
internWork({
  name: "byung",
  score: 1,
  employeeId: 123,
  work: () => {},
});
//두가지 데이터 모두를 포함한 오브젝트를 전달해야 에러가 생기지 않는다.
```

> - 함수를 호출할 때 두가지가 모두 포함된 오브젝트를 전달해야 한다.
> - 다양한 타입들을 하나로 묶어서 선언할 수 있다.

---

> 7. Enum Type
>
> - 여러가지의 관련된 상수값를 한곳에 모아서 정의해 주는 타입, 자바스크립트에서는 사용할 수 없다. 타입스크립트 안에서 자체적으로 제공하는 타입
> - 자바스크립트에서의 상수는 대문자로 정의한다. 서로 연관되 있는 상수들끼리 묶어서 정의할 수 없다.
> - enum type을 쓸때는 전부다 대문자로 쓰지않고 앞 글자만 대문자로 사용한다. 타입이 보장되면서 간편하게 사용할 수 있다.

```typescript
enum Days {}
```

> - 값을 따로 정해주지 않으면 처음부터 0을 시작으로 자동으로 숫자가 정해진다.
> - 문자열을 값으로 지정할 수 있으나, 숫자처럼 다음 값을 알 수 없기 때문에 하나하나 지정해줘야 한다.
> - 가능하면 쓰지 않는 것이 좋다. enum으로 타입이 지정된 변수에 다른 어떤 숫자도 할당 가능하다. 타입이 정확하게 보장되지 않는다.
> - Union Type으로 대체되어 사용 가능하다.

---

> 8. 타입추론
>
> - 변수에 어떤 값을 넣는 지에 따라서 그 변수의 타입에 따라서 타입을 추론한다. 타입이 뻔한 경우에 생략해서 사용하기도 한다.

```typescript
let text = "hello";
text = "world";
text = 1; //type error
```

> - 타입스크립트가 알아서 타입을 추론해서 지정해주지만, 프로젝트에서는 코드가 복잡해 따로 타입을 명시해주는 것이 좋다.

---

> - 객체지향 4가지 원칙
>   - 캡슐화: 서로 연관있는 데이터와 함수들을 캡슐화하는 것. 내부의 상태를 외부에서 설정할 수 없다. 외부의 행동을 통해서 내부의 상태를 변경할 수 있다.
>   - 추상화: 내부의 복잡한 기능을 다 이해하지 않고 외부에서 간단한 인터페이스를 통해서 쓸 수 있는 것.
>   - 상속성: 잘만들어진 데이터와 함수를 그대로 가져오면서 내가 조금 더 필요한 기능을 더해서 다른 종류의 기능을 만들 수 있다. 한번 잘 정의해둔 클래스를 재사용할 수 있다. IS-A관계라고 한다.
>     DOM요소도 상속을 통해 만들어진다.
>   - 다형성: 상속을 통해 만들어진 함수를 신경쓰지 않고 공통된 함수를 이용해서 접근을 할 수 있다.
