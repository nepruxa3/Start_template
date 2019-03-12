$(function() {

	function footerToBottom () {
		var browserHeight = $(window).height(),
			headerOuterHeight = $('.header').outerHeight(true),
			footerOuterHeight = $('.footer').outerHeight(true),
			mainHeightMarginPaddingBorder = $('.content').outerHeight(true) - $('.content').height();
		$('.content').css({
			'min-height': browserHeight - footerOuterHeight - mainHeightMarginPaddingBorder - headerOuterHeight,
		});
	}
	footerToBottom();
	$(window).resize(function () {
		footerToBottom();
	});

});
