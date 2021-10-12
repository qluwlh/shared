const sort = ([h, ...t]) =>
  h === undefined
    ? []
    : [
        ...sort(t.filter((item) => item <= h)),
        h,
        ...sort(t.filter((item) => item > h)),
      ];

const swap = (arr, x, y) => {
  let temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
};
const quick = (arr, left, right) => {
  if (!arr || !arr.length) {
    return;
  }
  if (left < right) {
    let currentLeft = left;
    let currentRight = right;
    let temp = arr[left];
    while (currentLeft !== currentRight) {
      while (currentLeft < currentRight && arr[currentLeft] < temp) {
        currentLeft++;
      }
      while (currentLeft < currentRight && arr[currentRight] >= temp) {
        currentRight--;
      }
      swap(arr, currentLeft, currentRight);
    }
    arr[currentLeft] = temp;
    quick(arr, left, currentLeft - 1);
    quick(arr, currentLeft + 1, right);
  }
};

const a = [8, 5, 5, 3, 8, 7, -13, 5345, 4, 6, 4];
console.log(`a`, a);
quick(a, 0, a.length - 1);
console.log(`a`, a);
