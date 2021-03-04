{
  /** 
    *Intersection types: &
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
  });
}
