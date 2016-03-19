

	var plus = (function (){
		var count = 0;
		return function(){
			var num = $('input').val();
			var count = num !==undefined ? num : count;
			// var count = num // практически одно и тоже
			return ++count;
		}
	})();
// ^
//скобки в конце для того, чтобы ВЫЗВАТЬ функцию сразу после того, как она инициализированна.
//получить значение пересенной и что-то дальше с ней делать
// https://gist.github.com/roman01la/bee756ac395b809d6636
	$('button').on('click', function(){
		$('input').val(plus);
	});

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
/*
	var pers = {
		name : "Vasja",
		age : 40,
		phone : 6566
	}
	for ( key in pers){
		console.log(key);
	} // Вернет ключи обьекта

	for (key in pers){
			//если ключи число то умножим его на 2
		if (parseFloat(pers[key]) ? !NaN : NaN ) {
			// и выведем в АЛЕРТ
			alert(pers[key] *=2);
		}
	}*/

	//
	//
	//  ARRAY
	//
	//


	// var arr = [1, 2, 3, 4, 5];

	// перебор обьектов в масиве.
	// for (var i = arr.length - 1; i >= 0; i--) {
	// 	alert(arr[i]);
	// };