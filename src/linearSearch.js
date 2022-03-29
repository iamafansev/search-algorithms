const linearSearch = (elements = [], target) => {
  for (let i = 0; i < elements.length - 1; i += 1) {
    const current = elements[i];

    if (current === target) {
      return i;
    }
  }

  return -1;
};

export default linearSearch;
