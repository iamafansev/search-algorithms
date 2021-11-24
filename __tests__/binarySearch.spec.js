import binarySearch from '../src/binarySearch';

const length = 128;
const sortedNums = Array.from({ length }, (_, i) => i + 1);

test('binarySearch', () => {
  const actual1 = binarySearch(sortedNums, 50);
  expect(actual1).toBe(49);

  const actual2 = binarySearch(sortedNums, length);
  expect(actual2).toBe(length - 1);

  const actual3 = binarySearch(sortedNums, 1);
  expect(actual3).toBe(0);

  const actual4 = binarySearch(sortedNums, 53.5);
  expect(actual4).toBe(-1);
});
