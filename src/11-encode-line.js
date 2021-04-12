function encodeLine(str) {
  let counter = 1;
  let result = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      counter += 1;
    } else if (counter >= 2) {
      result += counter + str[i];
      counter = 1;
    } else {
      result += str[i];
      counter = 1;
    }
  }
  return result;
}

module.exports = encodeLine;
