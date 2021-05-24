// Вопросы

// 1
// Вопрос: Создайте метод объекта с помощью Expression
// Ответ:
// let user = {
//     name: "Джон",
//     age: 30
//   };

//   user.sayHi = function() {
//     alert("Привет!");
//   };

//   user.sayHi(); // Привет!

// 2
// Вопрос: Короткая запись методов объекта
// Ответ:

// эти объекты делают одно и то же (одинаковые методы)

// user = {
//     sayHi: function() {
//       alert("Привет");
//     }
//   };

//   // сокращённая запись выглядит лучше, не так ли?
//   user = {
//     sayHi() { // то же самое, что и "sayHi: function()"
//       alert("Привет");
//     }
//   };

// 3
// Вопрос: Как получить доступ к инфе внутри объекта?
// Ответ: Для доступа к информации внутри объекта метод может использовать ключевое слово this.

// let user = {
//     name: "Джон",
//     age: 30,

//     sayHi() {
// this - это "текущий объект"
//       alert(this.name);
//     }

//   };

//   user.sayHi(); // Джон

// 4
// Вопрос: Что выведет при вызове функции без объекта?
// Ответ:
// function sayHi() {
//     alert(this);
//   }

//   sayHi(); // undefined в строгом режиме
// в нестроггом this явялется глобальным объектом(window )

// 5
// Вопрос: Reference type, и что будет при вызове,(user.name == "Джон" ? user.hi : user.bye)();
// Ответ: Ошибка
// Значение ссылочного типа – это «триплет»: комбинация из трёх значений (base, name, strict), где:

// base – это объект.
// name – это имя свойства объекта.
// strict – это режим исполнения. Является true, если действует строгий режим (use strict)

// 6
// Вопрос: Имеет ли стрелочная функция this?
// Ответ: Нет, его значение берётся из внешней «нормальной» функции

// learn.js 4.4
