"use strict";

function solveEquation(a, b, c) {
  const d = b ** 2 - 4 * a * c;

  if (d < 0) {
    return [];
  }

  if (d === 0) {
    return [-b / (2 * a)];
  }

  return [
    (-b + Math.sqrt(d)) / (2 * a),
    (-b - Math.sqrt(d)) / (2 * a),
  ];
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const monthlyPercent = percent / 100 / 12;
  const creditBody = amount - contribution;

  if (creditBody <= 0) {
    return 0;
  }

  const monthlyPayment =
    creditBody *
    (monthlyPercent +
      monthlyPercent / ((1 + monthlyPercent) ** countMonths - 1));

  const totalAmount = contribution + monthlyPayment * countMonths;

  return Number(totalAmount.toFixed(2));
}
