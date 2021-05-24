// Вопросы

// 1
// Вопрос: Function declaration?
// Ответ:
// function showMessage() {
//   alert( 'Всем привет!' );
// }

// 2
// Вопрос: Function expression?
// Ответ:
// let sayHi = function() {
//     alert( "Привет" );
//   };

// 3
// Вопрос: Параметры по умолчанию?
// Ответ:
// function showMessage(from, text = "текст не добавлен") {
//     alert( from + ": " + text );
//   }

//   showMessage("Аня"); // Аня: текст не добавлен

// 4
// Вопрос: Напишите пример функции колбэк?
// Ответ:
// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }

//   ask(
//     "Вы согласны?",
//     function() { alert("Вы согласились."); },
//     function() { alert("Вы отменили выполнение."); }
//   );

// 5
// Вопрос: Отличие declaration от expression?
// Ответ:
// 1. Синтаксис
// 2. Declaration можно использовать в любом месте кода
// Expression только когда выполненние кода доходит до этой функции
// 3. Declaration видна только внутри блока, но не в не его в отличии от Expression
