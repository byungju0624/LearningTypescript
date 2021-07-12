//java: Exception
//Javascript: error

//Error(Exception) Handling: try(에러 발생 부분 시도) -> catch(발생시 잡을 수 있다.) -> finally

function readFile(fileName: string): string {
  if (fileName === "not exist!") {
    throw new Error(`file not exist ${fileName}`);
  }
  return "file contents";
}

function closeFile(fileName: string) {
  //
}
const fileName = "byungju!";

try {
  console.log(readFile(fileName));
} catch (error) {
  console.log("catched!");
} finally {
  closeFile(fileName);
  console.log("finally!!!");
}
