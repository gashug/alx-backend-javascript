// using ES6's for...of operator

export default function appendToEachArrayValue(array, appendString) {
  for (let [index, value] of array.entries()) {
    array[index] = `${appendString}${value}`;
  }

  return array;
}
