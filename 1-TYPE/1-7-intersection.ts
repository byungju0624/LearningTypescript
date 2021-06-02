{
  /** 
    *Intersection types: &(and)
    다양한 타입들을 하나로 묶어서 사용가능하다.
    */

  type Student = {
    name: string;
    score: number;
  };
  type Worker = {
    empolyeeId: number;
    work: () => void;
  };
  function internWork(person: Student & Worker) {
    console.log(person.name, person.score, person.empolyeeId, person.work());
  }
  internWork({
    name: "byungju",
    score: 1,
    empolyeeId: 123,
    work: () => {},
    //해당하는 것들을 모두 작성해줘야 에러가 생기지 않는다.
  });
}
