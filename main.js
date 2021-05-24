// // 1
// // class Pet {
// // 	constructor(name) {
// // 		this.name = name;
// // 	}
// // }

// // Pet.prototype.kick = function () {
// // 	console.log(`Lelia I am ${this.name}`);
// // };

// // const pet = new Pet('Kick');

// // pet.kick();

// // delete Pet.prototype.kick;

// // pet.kick();

// // Ответ: A;
// // Мы создаем класс Pet, для прототипа которого определяем метод kick, при создании экземпляра класса мы передаем name, в конструкторе который привязывается к this, поэтому при вызове pet.kick() мы видим log с именем, после этого мы просто используем оператор удаления delete,что бы удалить метод kick из прототипа класса, то есть Pet больше не имеет возможности пользоваться этим методом

// // 2
// // for (var i = 0; i < 3; i++) {
// // 	setTimeout(() => console.log(i), 1);
// // }
// // i = 2;
// // console.log(i);

// // for (let j = 0; j < 3; j++) {
// // 	setTimeout(() => console.log(j), 1);
// // }
// // j = 3;
// // console.log(j);
// // Ответ: C;
// // так как сначала отрабатывает первый for, logи из-за сет таймаут в event loop ждут в очереди когда он закончится, а особенностью var является то что она видна за циклом for, то есть переменная var доходит до трех и тогда logи считывают ее как уже var i =3 после этого event loop переходит ко второму for, в случае с let оно остается в области видимости for, и для каждого logа в его лесическом окружении let сохранется на каждой итерации то есть 0, 1, 2
// // 3

// // const texture = {
// // 	radius: 10,
// // 	diametr() {
// // 		return this.radius * 2;
// // 	},
// // 	perimetr: () => {
// // 		console.log(`fasdf ${this.radius}`);
// // 	},
// // };

// // console.log(texture.diametr());
// // console.log(texture.perimetr());

// // Ответ: B;
// // В первом выведет 20 потому что это обычная сокращенная запись метода объекта, и при вызове этого метода this находится в контексте объекта texture, то есть значением this будет являться ссылка на этот объект.
// // Во втором выведет NaN, так как у стрелочной функции нету this, поэтому this берется из внешнего лексического окружения, в данном случае глобальный объект, а NaN является ошибкой в расчетах, соответсвенно число умноженное на объект выдает NaN
// // 4

// // console.log(+true);
// // console.log(!'Frank');
// // console.log(!'');
// // console.log(!'0');
// // Ответ: A;
// // + является унарным оператором, имеет свойство преобразовывать не числа в числа, а true является 1, false 0
// // во втором во первых ! - это логический оператор НЕ, то есть он приводит к логическому типу данных, а потом возвращает противопложное значение то есть !true == false, !false == true,во вторых любая не пустая строка является true, даже если там просто пробел, а пустая '' является false, поэтому выведет false так как 'Frank' - true, !'Frank' - false

// // 5
// // let a = { question: 'How are you?' };
// // let b;

// // b = a;
// // a.question = 'What`s happened';
// // console.log(b.question);

// // Отвут: A;
// // Объект является ссылочным типом данных, то есть объект хранится не отдельно в переменной, а переменная хранит ссылку на данный объект, и когда мы копируем объект, мы копируем не переменную новую, а ссылку на уже существующий объект, соответственно когда мы меняем в каком то из объектов его свойство, оно меняется у данного объекта, и по ссылке мы всегда получаем этот объект с измененным свойством.

// // const button = document.querySelector('button');

// // const clickHandler = (evt) => {
// //     // data =1
// //     return (data) => {
// //         console.log(data);
// //         console.log(evt);
// //     };
// // }

// // button.addEventListener('click', clickHandler(1));

// // const button = document.querySelector('button');

// // const clickHandler = (data) => {
// // 	console.log(data);
// // };

// // button.addEventListener('click', (evt) => clickHandler(1));

// // document.addEventListener('keydown');

// // Variables

// // let , const, var

// // Declaration
// let nameUser = 'Sasha';

// console.log(nameUser);

// // Initialization
// nameUser = 'oleh';

// console.log(nameUser);

// const age = 23;

// console.log(age);

// // var пока что тоже самое что и let

// let color = 'red',
// 	user = 'alex';
// console.log('user: ', user);

// // Пример

// let a = 100,
// 	b = 200,
// 	c;

// console.log('undefined', c);

// c = a + b;

// console.log('c:', c);

// // Типы данных

// // Number

// let number = 1;

// // Nan, Infinity, -Infinity

// console.log('g' / 2);
// console.log(-1 / 0);
// // String

// let string = 'string';

// // Шаблонная строка, литеральная запись строки

// let stringLiteral = `Мне ${age} года`;
// console.log('stringLiteral: ', stringLiteral);

// // Boolean
// let booleanTrue = true;

// let booleanFalse = false;

// console.log(4 > 3);

// // BigInt

// // null

// let empty = null;

// // undefined

// let und = undefined;

// // Symbol

// // Object - не примитивный тип данных

// let object = {}; //литеральная запись объекта

// let superUser = {
// 	// key: value
// 	name: 'Sasha',
// 	age: 23,
// 	job: 'Front-end',
// };

// let userString = `Привет меня зовут ${superUser.name}, мне ${superUser.age}, я работаю ${superUser.job}`;
// console.log(userString);

// // type of

// console.log(typeof 1);
// console.log(typeof 'String');
// console.log(typeof true);
// console.log(typeof null);
// console.log(typeof undefined);
// console.log(typeof {});

// // Преоброзование типов данных
// let extraString = 1;
// let extraNumber = '1';
// console.log('extraNumber: ', extraNumber);

// console.log(String(extraString));
// console.log(Number(extraNumber));
// console.log(Boolean(extraString));

// console.log(Number(true));

// let h = 1,
// 	p = 1;

// // p = p + h;
// p += h;
// console.log(p);

// // Инкремент, декремент, постфиксный, префиксный

// let increment = 2;

// increment++; //постфиксная
// ++increment; //префиксная
// console.log(increment++);
// console.log(increment);

// let decrement = 1;

// decrement--;
// console.log(decrement);

// console.log(1 != '1');

// // Условное сравнение

// let myAge = '0';

// if (myAge > 18 && myAge < 100) {
// 	console.log('Доступ есть');
// } else if (myAge >= 16 && myAge <= 18) {
// 	console.log('Паспорт есть');
// } else {
// 	console.log('Досеупа нет');
// }

// if (myAge > 8) console.log('fasdfasd');

// // Тернарный оператор
// // let result = условие ? значение1 : значение2;
// let result = myAge > 1 ? console.log('10') : console.log('0');

// // Цикл
// // let condition = 10;
// // while (condition < 20) {
// // 	console.log(condition);
// // 	condition++;
// // }
// let condition2 = 10;
// // do {
// // 	console.log(condition2);
// // 	condition2++;
// // } while (condition2 == 11);

// for (let i = 0; i < condition2; i++) {
// 	if (i < 3) {
// 		console.log('i <3');
// 	} else if (i > 3 && i < 5) {
// 		console.log('i >3 && i <5');
// 	} else {
// 		if (i == 5) continue;

// 		console.log(i);
// 	}
// }

// // Function declaration

// function hello(a, b) {
// 	console.log(a - b);
// 	for (let i = 0; i < a; i++) {
// 		console.log(i);
// 	}
// }

// // Function Expression

// let helloExpresion = function (a, b = 5) {
// 	for (let i = 0; i < a; i++) {
// 		console.log(i);
// 		console.log(message);
// 	}
// };

// // Function Arrow
// let helloArrow = (a) => {
// 	return a + 2;
// };

// let m = helloArrow(2);

// console.log('m:', m);

// let array = [1, 2, 3, 4, 5, 6];
// console.log('array: ', array);

// console.log(array[1]);
// console.log(array.length);

// let arr = [1, 2, 3, 4, 5];

// arr.push(6);

// console.log(arr);

// arr.pop();

// console.log(arr);

// arr.shift();

// console.log(arr);

// arr.unshift(0);

// console.log(arr);

// arr.length = 0;

// console.log(arr);

// splice

// let arr = [1, 2, 3, 4, 5];
// let arr2 = [6, 7];
// let arr24 = ['Груша'];
// // let deleteArr = arr.splice(2, 1, 'Груша', 'Эдик');
// // delete arr[2];

// // console.log(deleteArr);
// // console.log(arr);

// let deleteArr = arr.slice(1, 4);
// console.log(arr);
// console.log(arr.slice(1, 4));

// let arr3 = arr.concat(arr2, arr24);

// console.log(arr3);
// console.log(arr2);
// console.log(arr);
// const showOk = () => {
// 	console.log('Вы готовы');
// };

// const showCancel = () => {
// 	console.log('Вы не готовы');
// };

// const ask = (question, yes, no) => {
// 	if (confirm(question)) {
// 		yes();
// 	} else {
// 		no();
// 	}
// };

// ask('Вы готовы?', showOk, showCancel);

// let arr = [1, 2, 3, 4, 5];

// let arr2 = arr.forEach((item) => {
// 	item = item + 1;
// 	console.log(item);
// });

// console.log(arr2);

// Поиск в массиве

// console.log(arr.indexOf(2, 5));
// Возврфщает позицию

// console.log(arr.includes(3, 4));

// find

// let array = [
// 	// {
// 	// 	id: 1,
// 	// 	userName: 'Sasha',
// 	// },
// 	// {
// 	// 	id: 2,
// 	// 	userName: 'Oleh',
// 	// },
// 	// {
// 	// 	id: 3,
// 	// 	userName: 'Denys',
// 	// },
// 	// [10, 2],
// 	// [3, 4],
// ];

// let item = array.find((element) => element.id < 4);
// console.log('item: ', item);

// let arr = array.filter((element) => {
// 	return element[0] > 1;
// });
// console.log(arr);

// let arr = [3, 2, 15, 6, 1];

// arr.sort((a, b) => a - b);

// console.log(arr);

// split, join
// let string = 'abc dsgd fgf';

// let arr = string.split(' ');

// console.log(arr);
// console.log(arr.join(' '));

// reduce

// let arr = [1, 2, 3, 4, 5];

// let sum = arr.reduce((accum, element) => {
// 	return accum + element;
// });
// console.log(sum);

// console.log(typeof {});
// console.log(typeof []);
// console.log(Array.isArray([]));

// function persistence(num) {
// 	let array = String(num).split('');
// 	let counter = 0;
// 	let multiply = null;
// 	while (true) {
// 		if (array.length > 1 && multiply < 10 && multiply != null) {
// 			for (let i = 0; i < array.length; i++) {
// 				multiply *= array[i];
// 			}
// 		} else {
// 			console.log(counter);
// 			return;
// 		}
// 	}
// }

// persistence(39);

// persistence(999);
// persistence(4);

// && String(multiply.length) > 1

// let str = 'Hello';

// console.log(str[1]);

// str[0] = 'P';
// console.log(str[0]);

// console.log(str.toUpperCase());

// let str = 'Helloll';

// console.log(str.indexOf('ll', 2));

// console.log(str.includes('eo', 0));

// let str2 = str.slice(0, 2);
// console.log('str2: ', str2);

// let str3 = str.substring(2, 0);
// console.log('str3: ', str3);

// let str4 = str.substr(1, 3);
// console.log('str4: ', str4);
// let red = 'red';
// document.body.style.backgroundColor = red;

// console.log(document.body.childNodes);
// let arr = Array.from(document.body.childNodes);
// console.log('arr: ', arr);
// arr.map((i) => {
// 	console.log(i);
// });

let potomok = document.querySelectorAll('.potomok');

// potomok.forEach((element) => {
// 	console.log(element);
// 	element.style.backgroundColor = 'green';
// });
// console.log('potomok: ', potomok);

// let flag = 0;

// let timerId = setInterval(() => {
// 	// potomok.style.backgroundColor = 'red';
// 	console.log(potomok[flag]);
// 	potomok[flag].style.backgroundColor = 'green';
// 	flag++;
// }, 1000);

// let time = potomok.length * 1000;
// setTimeout(() => {
// 	clearInterval(timerId);
// }, time);

let div = document.querySelectorAll('.potomok');
// div.hidden = 'true';
// div.innerHTML = '<div></div>';
// div.textContent = '<div></div>';

div.forEach((elem) => {
	elem.addEventListener('click', (e) => {
		// elem.classList.remove('j');
		elem.classList.toggle('green');
	});
});
