console.log(getArrayParams(-99, 99, 10));
console.log(summElementsWorker(10, 10, 11, 20, 10));
console.log(differenceMaxMinWorker(10, 10, 11, 20, 10));

const arr = [
  [10, 10, 11, 20, 10],
  [67, 10, 2, 39, 88],
  [72, 75, 51, 87, 43],
  [30, 41, 55, 96, 62]
];

console.log(makeWork(arr, summElementsWorker));
console.log(makeWork(arr, differenceMaxMinWorker));
