const solveEquation = require('./task'); // Подключаем функцию

describe('Проверка решения квадратного уравнения', () => {
    test('Нет корней (дискриминант < 0)', () => {
        expect(solveEquation(1, 0, 1)).toEqual([]);
    });

    test('Один корень (дискриминант = 0)', () => {
        expect(solveEquation(1, -2, 1)).toEqual([1]);
    });

    test('Два корня (дискриминант > 0)', () => {
        expect(solveEquation(1, -3, 2)).toEqual([2, 1]);
    });

    test('Ошибка при неверных параметрах', () => {
        expect(() => solveEquation('a', 'b', 'c')).toThrow();
    });
});
