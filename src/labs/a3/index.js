import JavaScript from "./java-script";
import Classes from "./classes";
import Classes1 from "./classes1";
import Styles from "./styles";
import ConditionalOutput from "./conditional-output";
import ToDo from "./todo/todo-list";

function Assignment3() {
  // 2.2.7 Working with Arrays part1
  var functionScoped = 2;
  let blockScoped = 5;
  const constant1 = functionScoped - blockScoped;
  let numberArray1 = [1, 2, 3, 4, 5];
  let stringArray1 = ["string1", "string2"];

  let variableArray1 = [
    functionScoped,
    blockScoped,
    constant1,
    numberArray1,
    stringArray1,
  ];

  console.log("Working With Arrays");
  console.log(numberArray1);
  console.log(stringArray1);
  console.log(variableArray1);

  return (
    <div>
      <h1>Assignment 3</h1>
      <JavaScript />
      <br />
      <Classes1 />
      <br />
      <Classes />
      <br />
      <Styles />
      <br />
      <ConditionalOutput />
      <br />
      <ToDo />
      <br />
    </div>
  );
}
export default Assignment3;
