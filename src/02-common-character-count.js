/**
* Учитывая две строки, найдите количество общих персонажей между ними.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
* Для s1 = "aabcc" и s2 = "adcaa", выход должен быть 3
 * Строки имеют 3 общих персонажа - 2 «A» и 1 «C».
 */
function getCommonCharacterCount (s1, s2) {
  let counter = 0;
  for (let i = 0; i < s1.length; i += 1) {
    if (s2.indexOf(s1[i]) !== -1) {
      counter += 1;
    }
  }
  return counter - 1;
}

module.exports = getCommonCharacterCount;
