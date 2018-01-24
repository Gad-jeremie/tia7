$('.opener').click(function () {
	$(this).parent('.search').toggleClass('inactive').find('input').focus();
});