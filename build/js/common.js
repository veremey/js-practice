$(document).ready(function() {
	var plus = (function (){
		var count = 0;
		return function(){
			var num = $('input').val();
			count = num !==undefined ? num : count;
			return ++count;
		}
	}());

	$('button').on('click', function(){
		$('input').val(plus);
	});

});









