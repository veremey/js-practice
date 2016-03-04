$(document).ready(function() {


	var red = (function step (){
		var count = 0;
		return function(){
			return ++count;
		};
	})();
	$('button').on('click', function(){
		$('input').val(red);
	});

});









