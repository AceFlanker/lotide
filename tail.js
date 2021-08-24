const tail = (arr) => {
  if (arr.slice(1).length === 0) {
    return [];
  } else {
    return arr.slice(1);
  }
};

module.exports = tail;