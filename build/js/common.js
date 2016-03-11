$(document).ready(function() {

	var plus = (function (){
		var count = 0;
		return function(){
			var num = $('input').val();
			var count = num !==undefined ? num : count;
			// var count = num // практически одно и тоже
			return ++count;
		}
	}());
// ^
//скобки в конце для того, чтобы ВЫЗВАТЬ функцию сразу после того, как она инициализированна.
//получить значение пересенной и что-то дальше с ней делать
// https://gist.github.com/roman01la/bee756ac395b809d6636
	$('button').on('click', function(){
		$('input').val(plus);
	});

	function chears(name) {//name - это Аргумент
		// return arguments;
		return "yeap " + name;
	}//<= Инструкция определения ф-ции
	console.log(chears('Serekjkj'));

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
	anotherZamikanie();// вызываю ф-цию
	// поскольку anotherZamikanie - это просто переменная


});









