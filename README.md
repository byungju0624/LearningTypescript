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

> - 객체지향프로그래밍
>   - 프로그래밍 패러다임
>   - 객체들을 컨셉으로 프로그래밍을 해가는 것
>   - 오브젝트: 관련된 데이터나 코드를 함께 묶을 수 있는 것
>   - 객체들끼리 서로 의사소통하도록 디자인하고 코딩하는 것, 서로 관련있는 함수와 데이터들을 여러가지 오브젝트로 정의해서 프로그래밍해 나가는 것
>   - 한 곳에서 문제가 생긴다면 관련있는 오브젝트만 이해하고 수정하면 된다. 여러번 재사용되면 관련있는 오브젝트를 재사용할 수 있다.
>   - class: 어떻게 생겼는 지 정의만 하는 템플릿과 같은 것
>   - object: class의 인스턴스라고 하고, 클래스를 이용해서 다른 데이터를 넣어서 생성가능하다.

---

> - 절차지향프로그래밍
>   - 하나의 어플리케이션 만들 때 어플리케이션이 동작하기 위한 데이터와 함수들 위주로 구성하는 것,정의된 순서대로 절차적으로 함수가 하나씩 호출하는 것
>   - 단점
>     1. 하나를 수정하기 위해서는 전체적인 어플리케이션이 어떻게 동작하는지를 이해, 하나 수정시 다른 사이드 이펙트가 발생할 수 있다.
>     2. 한눈에 이해하기 어렵다. 유지보수도 힘들고 확장도 어렵다.

---

> 9. 다형성(Polymorphism)
>
> - 한가지의 클래스나 한가지의 인터페이스를 통해서 다른 방식으로 구현한 클래스를 만들 수 있다.
> - 다형성의 장점
>   - 내부적으로 구현된 다양한 클래스들이 한가지의 인터페이스를 구현하거나 동일한 부모 클래스를 상속받았을 때 동일한 함수를 어떤 클래스인지 구분하지 않고 공통된 API를 호출할 수 있다.
>   - 사용하는 사람도 간편하게 사용할 수 있다.

---

> 10. Composition
>
> 1. 상속의 문제점
>
> - 상속의 깊이가 길어질수록 서로 간의 관계가 복잡해질 수 있다.
> - 상속은 수직적으로 관계가 형성된다. 부모클래스를 수정하게 되면 부모클래스를 상속받는 모든 자식클래스에 영향이 갈 수 있다.
> - 한가지 이상의 부모클래스를 상속할 수 없다.
>
> 2. Composition
>
> - 필요한 것들을 가져와서 조립해 나가는 것을 말한다.
> - 코드의 재사용을 높여준다.

---

> - 객체지향 4가지 원칙
>   - 캡슐화: 서로 연관있는 데이터와 함수들을 캡슐화하는 것. 내부의 상태를 외부에서 설정할 수 없다. 외부의 행동을 통해서 내부의 상태를 변경할 수 있다.
>   - 추상화: 내부의 복잡한 기능을 다 이해하지 않고 외부에서 간단한 인터페이스를 통해서 쓸 수 있는 것.
>   - 상속성: 잘만들어진 데이터와 함수를 그대로 가져오면서 내가 조금 더 필요한 기능을 더해서 다른 종류의 기능을 만들 수 있다. 한번 잘 정의해둔 클래스를 재사용할 수 있다. IS-A관계라고 한다.
>     DOM요소도 상속을 통해 만들어진다.
>   - 다형성: 상속을 통해 만들어진 함수를 신경쓰지 않고 공통된 함수를 이용해서 접근을 할 수 있다.

---

> 11. Exception Handling
>
> - Exception: 예상하지 못한 에러를 말한다.
> - Exception을 잘 처리하면 안정성 뿐만 아니라 유지 보수성도 높일 수 있다.
> - 어플리케이션 내부에서 예상할 수 있는 것을 **Error State**라고 한다.
> - 우리가 예상이 되어지는 error state인지 예상하지 못한 Exception인지 구분할 필요가 있다.
> - 3가지 단계: try -> catch -> finally
>   - try: 에러가 발생할 수 있는 부분을 시도
>   - catch: 에러 발생시 잡을 수 있다.
>   - finally: 에러가 발생하든 발생하지 않든 마무리를 해준다.

---

> 12. Type Alias, Interface
>
> - Interface: 어떤 것의 규격사항, 오브젝트 간에 의사소통할 때 정해진 인터페이스를 토대로 해서 서로 간의 상호작용을 할수 있게 해준다.
> - Type: 어떠한 데이터를 담을 때 어떤 데이터를 담을 수 있는데 데이터의 형태를 결정하는 것. 데이터를 담을 목적으로 사용한다.
>   - 둘 다 오브젝트를 정의하고, 타입을 할당할 수 있다.
>   - 클래스에서 구현가능하다.
>   - extends(확장)도 가능하다.
>   - 차이점
>     - 인터페이스는 결합이 가능하다.
>     - 타입은 computed properties가 사용 가능하다. 새로운 타입을 만들 수 있고, Union 타입을 만들 수 있다.

---

> 13. Utility Types
>
> - 타입 변환이 가능하다. 한가지의 타입을 기본으로 해서 다른 타입으로 변환이 가능하다.
> - condition type: 조건에 따라 타입을 변경할 수 있다.
>   //

---

> 14. Prototype
>
> - 상속을 위해서 쓰이는 것
> - 클래스에서 속성과 함수를 정의 한 것처럼 마찬가지로 동일하게 반복적으로 쓰일 수있게 속성과 함수를 정의하는 것
> - 자바스크립트는 프로토타입을 기반으로 한 프로그래밍 언어, 객체지향프로그래밍을 할 수 있는 한 방법.
> - 모든 오브젝트는 프로토라는 오브젝트를 갖고 있다.
> - 다른 변수에 할당한 오브젝트의 프로토는 같은 오브젝트를 상속받기 때문에 같다.

```javascript
const x = {};
const y = {};
console.log(x.__proto__ === y.__proto__); // true
```

---

> 15. This
>
> - 다른 객체지향언어에서의 This는 클래스 자신을 가리키는 것. 만들어진 객체 그 자신을 가리키는 것
> - 자바스크립트에서의 This는 누가 부르냐에 따라서 This가 달라질 수 있다. 호출한 문맥에 따라서 This가 동적으로 변한다.
> - 브라우저 환경에서의 This는 Window(global object)를 가리킨다.

```javascript
console.log(this); // window

class Counter {
  count = 0;
  increase = function () {
    console.log(this);
  };
}
const counter = new Counter();
counter.increase(); // 여기서의 this는 Counter를 가리킨다.
```

> - let 과 const로 선언한 변수는 window에 등록돼 있지 않으므로 변수를 호출하는 것은 window가 아니라 어느 object도 아니기 때문에 undefined가 호출된다.

```javascript
class Counter {
  count = 0;
  increase = function () {
    console.log(this);
  };
}
const counter = new Counter();
const caller = counter.increase; // undefined-> 포인터가 클래스에서 변수로 바뀌면서 this의 정보를 잃어버린다.
```

> - 우리가 선언한 함수는 기본적으로 window 객체에 등록된다.
> - var같은 경우는 window객체에 등록된다.
> - 정보를 잃어버리지 않으려면 할당할 때 binding을 해주면 된다.

```javascript
....
const caller = counter.increase.bind(counter)
```

> - 하나하나 binding을 해주는 대신 class 내부 함수를 화살표함수로 만들면 해결된다.

```javascript
class Counter {
  count = 0;
  increase = () => {
    console.log(this);
  };
}
const counter = new Counter();
const caller = counter.increase; // Counter를 가리킨다.
```

> - 화살표 함수를 이용하면 선언될 당시의 문맥, 스코프의 this context를 유지한다.

---

> 16. Module
>
> - 자바스크립트에서 module이란 파일안에 코드를 모듈화 해서 작성하는 것
> - 한 모듈이라 하는 것은 한 파일안에 작성되어 있는 코드를 말한다.
> - 따로 모듈화해서 작성하지 않으면 코드는 글로벌 스코프로 측정된다.
> - 브라우저 환경이라면 window에 노드 환경이라면 global에 등록된다.
> - 각각의 파일에서 동일한 이름의 함수를 만들었다면 충돌이 생길 수 있다.
> - 모듈화 해놓으면 서로 다른 파일에서는 접근할 수 없다.
> - type을 module이라고 지정하면 다른 두 파일이 서로 접근할 수 없게 된다.

```javascript
<script type='module' src='module1.js'></script>
<script type='module' src='module2.js'></script>
//서로 접근할 수 없다.
```

> - 다른 모듈에서 사용하려면 export.default를 사용하면 된다.
> - 사용하려면 import를 사용하면 된다.

```javascript
//module1.js
export.default function add(x,y){
  return x + y
}
//module2.js
import add from './module1.js'
console.log(10,1)
```

> - import하는 곳에서는 어떤 이름을 써도 상관없이 정의해서 쓸 수 있다.
> - 한 파일에서 두가지 export.default를 사용할 수 없다. 한 파일에서는 무조건 하나여야 한다.
> - 다른 함수를 가져오려면 중괄호{}를 사용하여 가져온다.

```javascript
//module1.js
...(생략)
export function minus(a,b){
  return a- b
}
//module2.js
import add,{minus} from './module1.js' //default요소 빼고 다른 함수는 동일한 이름을 사용해줘야한다.
console.log(minus(10,1))
```

> - 변경하고 싶으면 이름 뒤에 as를 붙여 바꾸면 된다.

```javascript
...(생략)
import add,{minus as min} from './module1.js'
console.log(min(10,1))
```

> - 같은 파일 안에 default 요소를 없애고 모든 함수를 가져오게 할 수 있다.

```javascript
...(생락)
import * as calculator from './module1.js' // 파일 안에 export 함수 모두를 가져온다.
console.log(calculator.add())
console.log(calculator.minus())
```

> - 변수도 export할 수 있다.

```javascript
//module1.js
...(생략)
export const num = 10;
//module2.js
...(생략)
console.log(calculator.num)
```
