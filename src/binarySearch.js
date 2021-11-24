const binarySearch = (nums = [], target) => {
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    const middle = Math.floor((low + high) / 2);
    const guess = nums[middle];

    if (guess === target) {
      return middle;
    }

    if (target < guess) {
      high = middle - 1;
    } else {
      low = middle + 1;
    }
  }

  return -1;
};

export default binarySearch;
