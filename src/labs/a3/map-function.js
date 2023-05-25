function MapFunction() {
  let numberArray1 = [1, 2, 3, 4, 5];
  const square = (a) => a * a;

  const squares = numberArray1.map(square);
  const cubes = numberArray1.map((a) => a * a * a);

  return (
    <>
      <h3>Map</h3>
      squares = {squares}
      <br />
      cubes = = {cubes}
      <br />
      <h4>JSON Stringify</h4>
      squares = {JSON.stringify(squares)}
      <br />
      cubes = = {JSON.stringify(cubes)}
      <br />
    </>
  );
}

export default MapFunction;
