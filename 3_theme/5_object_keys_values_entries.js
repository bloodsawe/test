// Вопросы

// 1
// Вопрос: Object.keys, values, entries
// Ответ:   Для простых объектов доступны следующие методы:

// Object.keys(obj) – возвращает массив ключей.
// Object.values(obj) – возвращает массив значений.
// Object.entries(obj) – возвращает массив пар [ключ, значение].

// 2
// Вопрос: Трансформация объекта
// Ответ: Object.fromEntries

// let prices = {
//     banana: 1,
//     orange: 2,
//     meat: 4,
//   };

//   let doublePrices = Object.fromEntries(
//     // преобразовать в массив, затем map, затем fromEntries обратно объект
//     Object.entries(prices).map(([key, value]) => [key, value * 2])
//   );

//   alert(doublePrices.meat); // 8
