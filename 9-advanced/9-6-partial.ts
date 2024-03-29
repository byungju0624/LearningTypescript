{
  //부분적으로 업데이트가 필요할 때 사용한다.
  type ToDo = {
    title: string;
    description: string;
    label: string;
    priority: "high" | "low";
  };

  function updateToDo(todo: ToDo, fieldsToUpdate: Partial<ToDo>): ToDo {
    return { ...todo, ...fieldsToUpdate };
  }
  const todo: ToDo = {
    title: "learn TypeScript",
    description: "study hard",
    label: "study",
    priority: "high",
  };
  console.log(todo);
  const update = updateToDo(todo, { priority: "low" });
  console.log(update);
}
