// Вопросы

// 1
// Вопрос: Как удалить элемент из массива
// Ответ: arr.splice(index[, deleteCount, elem1, ..., elemN])
// Он начинает с позиции index, удаляет deleteCount элементов и вставляет elem1, ..., elemN на их место. Возвращает массив из удалённых элементов.

// Пример
// let arr = ["Я", "изучаю", "JavaScript"];

// arr.splice(1, 1);

// let arr = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];

// удалить 3 первых элемента и заменить их другими
// arr.splice(0, 3, "Давай", "танцевать");

// 2
// Вопрос: Метод slice
// Ответ: arr.slice([start], [end])

// Он возвращает новый массив, в который копирует элементы, начиная с индекса start и до end (не включая end). Оба индекса start и end могут быть отрицательными. В таком случае отсчёт будет осуществляться с конца массива.

// 3
// Вопрос: Как скопировать массив с помощью slice
// Ответ: arr.slice()

// 4
// Вопрос: arr.concat
// Ответ: arr.concat(arg1, arg2...)
// Метод arr.concat создаёт новый массив, в который копирует данные из других массивов и дополнительные значения.

// alert( arr.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6

// 5
// Вопрос: forEach
// Ответ: arr.forEach(function(item, index, array) {
// ... делать что-то с item
// });
// Результат функции (если она вообще что-то возвращает) отбрасывается и игнорируется.

// 6
// Вопрос: Методы поиска в массиве
// Ответ: indexOf/lastIndexOf и includes
// arr.indexOf(item, from) ищет item, начиная с индекса from, и возвращает индекс, на котором был найден искомый элемент, в противном случае -1.
// arr.lastIndexOf(item, from) – то же самое, но ищет справа налево.
// arr.includes(item, from) – ищет item, начиная с индекса from, и возвращает true, если поиск успешен.

// 7
// Вопрос: find и findIndex
// Ответ: let result = arr.find(function(item, index, array) {
// если true - возвращается текущий элемент и перебор прерывается
// если все итерации оказались ложными, возвращается undefined
// });

// let users = [
//     {id: 1, name: "Вася"},
//     {id: 2, name: "Петя"},
//     {id: 3, name: "Маша"}
//   ];

//   let user = users.find(item => item.id == 1);

//   alert(user.name); // Вася

// Метод arr.findIndex – по сути, то же самое, но возвращает индекс, на котором был найден элемент, а не сам элемент, и -1, если ничего не найдено.
// 9
// Вопрос: filter;
// Ответ: На тот случай, если найденных элементов может быть много, предусмотрен метод arr.filter(fn);
// let results = arr.filter(function(item, index, array) {
//     // если true - элемент добавляется к результату, и перебор продолжается
//     // возвращается пустой массив в случае, если ничего не найдено
//   });

// let users = [
//     {id: 1, name: "Вася"},
//     {id: 2, name: "Петя"},
//     {id: 3, name: "Маша"}
//   ];

//   // возвращает массив, состоящий из двух первых пользователей
//   let someUsers = users.filter(item => item.id < 3);

//   alert(someUsers.length); // 2

// 10
// Вопрос: map;
// Ответ: Он вызывает функцию для каждого элемента массива и возвращает массив результатов выполнения этой функции;

// let result = arr.map(function(item, index, array) {
//     // возвращается новое значение вместо элемента
//   });
// let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
// alert(lengths); // 5,7,6

// 11
// Вопрос: sort;
// Ответ: Он возвращает отсортированный массив, но обычно возвращаемое значение игнорируется, так как изменяется сам arr;
// let arr = [ 1, 2, 15 ];

// // метод сортирует содержимое arr
// arr.sort();

// alert( arr );  // 1, 15, 2

// 11
// Вопрос: Как сделать фильтрацию от большего к меньшему числу и наоборот;
// Ответ: function compareNumeric(a, b) {
//   if (a > b) return 1;
//   if (a == b) return 0;
//   if (a < b) return -1;
// }
// Либо так
// arr.sort( (a, b) => a - b );

// let arr = [ 1, 2, 15 ];

// arr.sort(compareNumeric);

// alert(arr);  // 1, 2, 15;

// 12
// Вопрос: reverse;
// Ответ: let arr = [1, 2, 3, 4, 5];
// arr.reverse();

// alert( arr ); // 5,4,3,2,1;

// 13
// Вопрос: split и join;
// Ответ: Метод str.split(delim) именно это и делает. Он разбивает строку на массив по заданному разделителю delim;
// let names = 'Вася, Петя, Маша';

// let arr = names.split(', ');

// for (let name of arr) {
//   alert( `Сообщение получат: ${name}.` ); // Сообщение получат: Вася (и другие имена)
// }

// Вызов arr.join(glue) делает в точности противоположное split. Он создаёт строку из элементов arr, вставляя glue между ними.
// 14
// Вопрос: Как разбить строку на массив
// Ответ: let str = "тест";

// alert( str.split('') ); // т,е,с,т

// 15
// Вопрос: Получения элемента по индексу из массива
// Ответ: array[i]

// 16
// Вопрос: reduce;
// Ответ: let value = arr.reduce(function(previousValue, item, index, array) {
// ...
// }, [initial]);

// Функция применяется по очереди ко всем элементам массива и «переносит» свой результат на следующий вызов.

// let arr = [1, 2, 3, 4, 5];

// let result = arr.reduce((sum, current) => sum + current, 0);

// alert(result); // 15
// при отсутствии initial в качестве первого значения берётся первый элемент массива, а перебор стартует со второго.

// 16
// Вопрос: как проверить что массив это массив
// Ответ: alert(Array.isArray({})); // false

// alert(Array.isArray([])); // true

// Задачи
// Написать функцию в которую передается массив. Она должна вернуть массив из четных чисел
