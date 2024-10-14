const arr1 = Array.from({ length: 4 }, (_, i) => i + 1);
let arr2 = [];
const func = (arr) => {
  for (let i = 0; i < 4; i++) {
    arr.push(i + 5);
  }
  return arr;
};
arr2 = func(arr1);
console.log(arr2); //[1, 2, 3, 4, 4, 5, 6, 7]
