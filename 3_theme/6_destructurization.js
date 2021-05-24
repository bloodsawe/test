// Вопросы

// 1
// Вопрос: Что такое деструктуризация
// Ответ: Деструктурирующее присваивание – это специальный синтаксис, который позволяет нам «распаковать» массивы или объекты в кучу переменных, так как иногда они более удобны. Деструктуризация также прекрасно работает со сложными функциями, которые имеют много параметров, значений по умолчанию и так далее.

// // у нас есть массив с именем и фамилией
// let arr = ["Ilya", "Kantor"]

// // деструктурирующее присваивание
// // записывает firstName=arr[0], surname=arr[1]
// let [firstName, surname] = arr;

// alert(firstName); // Ilya
// alert(surname);  // Kantor

// Вопросы

// 2
// Вопрос: Остаточные параметры
// Ответ: let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// alert(name1); // Julius
// alert(name2); // Caesar

// // Обратите внимание, что `rest` является массивом.
// alert(rest[0]); // Consul
// alert(rest[1]); // of the Roman Republic
// alert(rest.length); // 2

// Вопросы

// 3
// Вопрос: Значения по умолчанию
// Ответ: // значения по умолчанию
// let [name = "Guest", surname = "Anonymous"] = ["Julius"];

// alert(name);    // Julius (из массива)
// alert(surname); // Anonymous (значение по умолчанию)

// Вопросы

// 4
// Вопрос: Деструктуризация объекта
// Ответ: let {var1, var2} = {var1:…, var2:…}

// let options = {
//     title: "Menu",
//     width: 100,
//     height: 200
//   };

//   let {title, width, height} = options;

//   alert(title);  // Menu
//   alert(width);  // 100
//   alert(height); // 200

// Вопросы

// 5
// Вопрос: как присвоить свойства переменным с другим названием
// Ответ: let options = {
//   title: "Menu",
//   width: 100,
//   height: 200
// };

// // { sourceProperty: targetVariable }
// let {width: w, height: h, title} = options;

// // width -> w
// // height -> h
// // title -> title

// alert(title);  // Menu
// alert(w);      // 100
// alert(h);      // 200
