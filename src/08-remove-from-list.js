function removeKFromList (l, k) {
  const newL = [];
  l.forEach((el) => {
    if (el !== k) {
      newL.push(el);
    }
  });
  return newL;
}

module.exports = removeKFromList;
