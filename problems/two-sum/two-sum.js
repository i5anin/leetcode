/**
 * Функция для поиска индексов двух чисел, сумма которых равна target
 * @param {number[]} nums - Массив чисел
 * @param {number} target - Целевая сумма
 * @return {number[]} - Массив индексов двух чисел
 */
function twoSum(nums, target) {
    const map = {}; // Хеш-таблица для хранения пар "значение -> индекс"
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]; // Вычисляем разницу
        if (map[complement] !== undefined) return [map[complement], i]; // Если есть в хеш-таблице, возвращаем
        map[nums[i]] = i; // Добавляем в хеш-таблицу
    }
    return []; // Если решение не найдено (не должно быть согласно условиям)
}

/**
 * Универсальная функция для тестирования
 * @param {number[]} nums - Массив чисел
 * @param {number} target - Целевая сумма
 * @param {number[]} expected - Ожидаемый результат
 */
function runTest(nums, target, expected) {
    const result = twoSum(nums, target);
    console.log(`Input: nums = [${nums}], target = ${target}`);
    console.log(`Output: ${JSON.stringify(result)}`);
    console.log(`Expected: ${JSON.stringify(expected)}`);
    console.log('Result:', JSON.stringify(result) === JSON.stringify(expected) ? '✅ Passed' : '❌ Failed');
    console.log('-------------------------');
}

/**
 * Запуск всех тестов
 */
function runTests() {
    const tests = [
        { nums: [2, 7, 11, 15], target: 9, expected: [0, 1] },
        { nums: [3, 2, 4], target: 6, expected: [1, 2] },
        { nums: [3, 3], target: 6, expected: [0, 1] },
    ];

    tests.forEach(({ nums, target, expected }) => runTest(nums, target, expected));
}

// --- Запуск всех тестов ---
runTests();
