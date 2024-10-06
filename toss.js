function solution(value) {
  var answer = false;
  isEmpty(value) ? (answer = true) : (answer = false);
  console.log(answer);
}

function isEmpty(value) {
  if (value === null || value === undefined || value === "") return true;
  if (typeof value === "object") {
    if (Array.isArray(value)) {
      for (let i = 0; i < value.length; i++) {
        if (!isEmpty(value[i])) {
          return false;
        }
      }
      return true;
    } else {
      for (let key in value) {
        if (value.hasOwnProperty(key) && !isEmpty(value[key])) {
          return false;
        }
      }
      return true;
    }
  }
  return false;
}

solution(null);
solution({});
solution(0);
solution("");
solution([{}, { a: [] }]);
