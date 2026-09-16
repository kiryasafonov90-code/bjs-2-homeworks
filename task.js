"use strict";

function solveEquation(a, b, c) {
    // Преобразуем параметры в числа
    a = +a;
    b = +b;
    c = +c;

    // Вычисляем дискриминант
    const discriminant = b * b - 4 * a * c;

    // Проверяем дискриминант и возвращаем результат
    if (discriminant < 0) {
        return []; // Нет корней
    } else if (discriminant === 0) {
        return [-b / (2 * a)]; // Один корень
    } else {
        const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        return [root1, root2]; // Два корня
    }
}

// Пример использования
// const roots = solveEquation(1, -3, 2);
// console.log(roots);
