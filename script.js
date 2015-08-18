
	function contentFit() {
		var rx = 1.95;
		var ww = $(window).width();
		$('.fitter').css({ 'height':ww/rx, 'width':'100%' });
 		$('.fitter').css({ 'margin-top': '-'+(ww/rx)/2+'px'});
		$('*[data-fontsize]').each(function(){ $(this).css({'font-size': parseFloat($(this).data('fontsize') * $(window).width() / 100) + 'px', 'line-height': parseFloat($(this).data('fontsize') * $(window).width() / 80) + 'px' }) });
	}
