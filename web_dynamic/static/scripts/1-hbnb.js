$(document).ready(function(){
	ls = {};
	$('.checkBox').change(function(){
		const amId = $(this).data('id');
		const amnm = $(this).data('name');
		if ($(this).is(':checked')) {
			ls[amId] = amnm;
		}
		else {
			delete ls[amId];
		}
		$('.amenities h4').empty();
		for (const key in ls) {
			$('.amenities h4').append('<li>' + ls[key] + '</li>');
		}
	});
});
