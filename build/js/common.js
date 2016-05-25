$(document).ready(function() {
	var plus = (function() {
		var count = 0;
		return function() {
			var num = $('input').val();
			var count = num !== undefined ? num : count;
			//var count = num // практически одно и тоже
			return ++count;
		};
	}());

	// ^
	//скобки в конце для того, чтобы ВЫЗВАТЬ функцию сразу после того, как она инициализированна.
	//получить значение пересенной и что-то дальше с ней делать
	// https://gist.github.com/roman01la/bee756ac395b809d6636
	$('button').on('click', function() {
		$('input').val(plus);
	});


});


	function Hi() {
		// coun = a+9;
		var coun = 0;
		this.plus =  function(){
			return console.log(++coun);
		};
		this.minus =  function(){
			return console.log(--coun);
		};
	};

	var r = new Hi(); //< Hi декоратор поэтому с Большой

	r.plus();
	r.plus();
	r.minus();
	r.minus();

	// var t = hi();
	// var p = hi();

	// t();//1
	// t();//2
	// t();//3
	// p();//1


/*	function hi() {
		// coun = a+9;
		var coun = 0;
		return function(){
			coun++;
			return console.log(coun);
		};
	};

	var t = hi();
	var p = hi();

	t();//1
	t();//2
	t();//3
	p();//1*/

	/*
		var coun = 0;
	hi = {
		plus : function(){
			console.log(coun++);
		},
		minus : function() {
			console.log(--coun);
		}
	};

	hi.plus();
	hi.plus();
	// hi.plus();
	hi.minus().plus(); <- тоже работает
	hi.minus();
	*/
//

	//
	// УСЛОВНЫЕ ОПЕРАТОРЫ
	//

	// выражение ? выражение1 : выражение2
	// var x= 15;
	// var text = x > 10 ? "X > 10" : "X < 10"
	//            если true то возвращается "X > 10" иначе "X < 10"


/*
	var i = -1;
	setTimeout(function f(){
		console.log("Worked! " + dwq());
		function dwq(){
			return i += 1;
		}
		setTimeout(f, 2000);// f != this   this не поможет
	}, 1000)
*/
	// FUNCTION DECLARATION

	/*	function chears(name) {//name - это Аргумент
		// return arguments;
		return "yeap " + name;
	}//<= Инструкция определения ф-ции
	console.log(chears('Serekjkj'));

	// FUNCTION EXPRESSION

	var greeting = (function(v){
	return "Hello "+ v;
	}('Veremey'));//<=возвращает только то, что указано здесь
	// это анонимная самовызывающааяся функция
	console.log(greeting);
	console.log('');

	var func = function(callback){
		var name = 'Sorry';
		callback(name);
	};
	func(function(n){
		console.log(n+ " Wader")
	});
	console.log('-------');



	var zamikanie = function(){
		var m = 10;
		return function(){//оборачиваем в функцию, чтобы значение  переменной "m" сохранилось и к нему можно было вернуться
			return m;
		}
	};
	var anotherZamikanie = function(){
		var m = 15;
		console.log(zamikanie()());
	};
	anotherZamikanie();// вызываю ф-циюсщ
	// поскольку anotherZamikanie - это просто переменная
	*/


	/*// перебор параметров в ф-ции

	function sayHi(){
		for(var i = 0; i < arguments.length; i++){
			alert('Привет ' + arguments[i]);
		}
	}

	sayHi('Введите', 'Serekjkj');*/

	// ***************************
	// конструкторы и прототипы
	//
	//
	//

	// Function.prototype.bind = function(context) {
	//    return function() {
	//       return this.apply(context, arguments);
	//    };
	// }

	/*
		var fun = function f (n){return n > 1 ? n*f(n-1) : 1; };
		var f = fun;
		fun = null;
		console.log(f(3)); // 6
	*/


	/*
	var Person, person, anotherPerson, AnotherPerson;

	Person = function(name, age){
		this.age = age;
		this.name = name;
	};
	AnotherPerson = function(gender){
		this.gender = gender;
	};

	Person.prototype.greet = function(){
		console.log('Hello my friend ' +this.name + '!');
	};

	Person.prototype.hello = function(name){
		console.log(name + ' how are you?\nAre you '+this.age+' years old?');
	};

	person = new Person('Ser' ,25);
	conon = new AnotherPerson('male');
	console.log(person.age);
	console.log(person.name);
	person.greet();
	person.hello('Red');
	console.log(conon.gender);
	*/
/*
	alert('Сообщение');

	var answer = prompt('Вопрос?', '');// 2-й параметр шаблонный вариант ответа
	alert(answer); // Вернет СТРОКУ string || null - если нажали "ОТМЕНА"

	var agreed = confirm('Ok?');
	alert(agreed); // boolean

	alert(1 + '2'); //вернет СТРОКУ    12
	alert(+'1' + +'2'); //вернет Число  3
	*/


	//***********
	// && ||

	/*alert(0 && 5); //0
	alert(1 && 0); //0
	alert(1 && 5); // возвращает значение false или то, что справа //5
	alert(1 || 5); // возвращает значение true или то, что справа / 1
	alert(0 || 5); // возвращает значение true или то, что справа/ 5
	alert(1 || 0); // возвращает значение true или то, что справа/ 1
	alert(0 || null || 1 || undefined); //возвр то, которое перрвое true //1

	*/


	//
	//  OBJECT
	//
	//
	//
// http://learn.javascript.ru/object-for-in#tasks
	//Есть ли в обьекте какието свойства
	// -----------------------------------------------
	// function isEmpty(obj) {
	// 	var counter = 0;
	// 	for (var key in obj) {
	// 		counter++;
	// 		console.log(counter);
	// 	}
	// 	if (counter == 0) {
	// 		return true;
	// 	}
	// 	return false;
	// }

	// var schedule = {};

	// alert( isEmpty(schedule) ); // true

	// schedule["8:30"] = "подъём";

	// alert( isEmpty(schedule) ); // false

	// который выведет сумму всех зарплат.
	// ------------------------------------------------------

	/*var salaries = {
	  "Вася": 100,
	  "Петя": 300,
	  "Даша": 250
	};

	var sum = 0;
	function check(obj) {
		for (var key in obj) {
			sum += obj[key];
		}
		console.log(sum);
	};

	check(salaries);*/

	// Свойство с наибольшим значением
	//  -------------------------------------------------------

	/*var salaries = {
	  "Вася": 100,
	  "Петя": 300,
	  "Даша": 250
	};
	function getMax(obj) {
		var max = 0;
		for (var key in obj){
			if(max < obj[key]){
				max = obj[key];
			}
		}
		return max;
	}
	console.log(getMax(salaries));*/

	// числовые значения умножаем на 2
	//---------------------------------------------
	/*var salaries = {
	  "Вася": 100,
	  "Петя": 300,
	  "Даша": 250,
	  'POt': "string"
	};
	function isNumeric(n) {
		return !isNaN(parseFloat(n)) && isFinite(n)
	}
	// console.log(isNumeric(salaries['POt']));

	function getMax(obj) {
		for (var key in obj){
			if(isNumeric(obj[key]) !== false){
				console.log(obj[key] *= 2);
			}
		}
	}
	console.log(getMax(salaries));*/



	/*var pers = {
		name : "Vasja",
		age : 40,
		phone : 65
	}
	for ( key in pers){
		console.log(key);
	} // Вернет ключи обьекта в консоль

	for (key in pers){
			//если ключи число то умножим его на 2
		if (parseFloat(pers[key]) ? !NaN: NaN) {
			// и выведем в АЛЕРТ
			alert(pers[key] *=2);
		}
	}
	*/
	/*
	// У кого больше зарплата
	var salaries = {
  "Вася": 100,
  "Петя": 300,
  "Алина": 600,
  "Даша": 250
};
	var max = 1;
	var less = 0;
	for (var key in salaries){
		if (max < salaries[key]) {
			max = salaries[key];
			less = key;
		};
	}
	console.log(less || "Нету такого сотрудника");*/


	//
	//
	//  ARRAY
	//

	// art = ["test", 2, 1.5, false];
	// find(art, 2);
	// (function find(a, value) {
	// 	for (var i = 0; i < a.length; i++) {}
	// 		if (a[i] === value) {
	// 			return i;
	// 		}
	// 		return -1;
	// }());

	// var arr = [];
	// var property;
	// var sum += property;

	// (function recur() {
	// 	property = +(prompt('Введите цифры для их суммы', 0));
	// 	console.log( typeof(property));
	// 	console.log(sum);

	// 	if(property == null) {
	// 		return false;
	// 		} else if(property == NaN){
	// 			return false;
	// 		} else if(property == ''){
	// 			return false;
	// 		}
	// 		arr.push(property);
	// 		return recur();
	// }());
	// console.log( arr );


	/*var styles = ['Джаз', 'Блюз'];
	styles.push('Рок-н-Ролл');
	styles[styles.length - 2] = 'Классика';
	// alert(styles.shift());
	styles.unshift('Рэп', 'Регги');
	console.log(styles);
	*/

	/*var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];
	var rand = 0 + Math.floor(Math.random() * ((arr.length-1) + 1 - 0));
	alert(arr[rand]);
*/
	//СКОПРОВАТЬ МАСИВ МОЖНО ТАК:
	/*
		var arr = [];
		for (var i = 0; i < arr.length; i++)
		{arr2[i] = arr[i];}
		--
		arr2[i] == arr[i] // true
	*/

	/*
	// ф-ция которая ищет в массиве arr значение value и возвращает его номер

	arr = ["test", 2, 1.5, false];
	function find (arr, value){
		for (var i = arr.length - 1; i>=0; i--){ //перебераем масив
			if(arr[i] == value){ // если на позиции есть значение
				console.log(i); // возвращаем позицию
			}
		}
	}
	*/

	// var arr = [1, 2, 3, 4, 5];

	// перебор обьектов в масиве.
	// for (var i = arr.length - 1; i >= 0; i--) {
	// 	alert(arr[i]);
	// };

	//Вывести рандомное значение масива
	/*var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];
	var rand = 0 + Math.floor(Math.random() * (+(arr.length -1) + 1 - 0));
	console.log( arr[rand] );
*/

	//
	//калькулятор для введённых значений
	//

	/*number = [];
	while(true){
		var values = prompt('Введите число', "0");
		if (values === '' || values == null || isNaN(values)) break;
		number.push(+values);
	}

	var sum = 0;
	for (var i = 0; i < number.length; i++){
		sum += number[i];
	}
	alert('Сумма всех введенных чисел равна ' + sum+ "!");*/

//  д1

	// "use strict " ;

	// Создайте страницу, которая
	// предлагает ввести два числа
	// и выводит их сумму.
	// -------------------------------------

	// var first = + prompt('Ведите первое число','1');
	// var second = + prompt('Ведите второе число','2');

	// function sum(a, b){
	// 	return a + b;
	// };

	// console.log(sum(first, second));

	// ------------------------------

	//alert((0.10 * 100 + 0.20 * 100) / 100 + '$');

	// функция которая выводит только
	// дробную часть

	// function getDecimal(num){
	// 	return (num - Math.floor(num)).toFixed(2);
	// };
	// alert(getDecimal(12.35656));

	// Любое рандомное число из интервала
	// min..max должно иметь одинаковую вероятность.
	// -------------------------------------

	// function randomInteger(min, max) {
	// 	var rand = min + Math.random() * (max + 1 - min);
	// 	rand = Math.floor(rand);
	// 	return rand;
	// }

	// alert(randomInteger(5, 10));