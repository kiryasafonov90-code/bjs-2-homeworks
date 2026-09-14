// 2.functions/task.js
function getArrayParams(...arr) {
  if (arr.length === 0) return { min: 0, max: 0, avg: 0 };
  let min = Infinity, max = -Infinity, sum = 0;
  for (const v of arr) {
    if (v < min) min = v;
    if (v > max) max = v;
    sum += v;
  }
  return { min, max, avg: Number((sum / arr.length).toFixed(2)) };
}

function summElementsWorker(...arr) {
  if (arr.length === 0) return 0;
  return arr.reduce((a, b) => a + b, 0);
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) return 0;
  return Math.max(...arr) - Math.min(...arr);
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) return 0;
  let even = 0, odd = 0;
  for (const v of arr) {
    if (v % 2 === 0) even += v;
    else odd += v;
  }
  return even - odd;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) return 0;
  let sum = 0, count = 0;
  for (const v of arr) {
    if (v % 2 === 0) {
      sum += v;
      count++;
    }
  }
  if (count === 0) return 0;
  return Number((sum / count).toFixed(2));
}

function makeWork(arrOfArr, func) {
  if (!arrOfArr || arrOfArr.length === 0) return 0;
  let max = -Infinity;
  for (const sub of arrOfArr) {
    const r = func(...sub);
    if (r > max) max = r;
  }
  return max;
}
