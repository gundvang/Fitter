

	
	/* CHECK AVAILABILITY (start) */
	function check_availability() {
		if ( /MSIE (\d+\.\d+);/.test(navigator.userAgent) ) {
			var ieversion = new Number(RegExp.$1);
			if (ieversion < 10) {
				$('.alert.hidden').removeClass('hidden');
			} else {
				$('.alert:not(.hidden)').addClass('hidden');
			}
		}
	}
	check_availability();
	/* CHECK AVAILABILITY (end) */
	
	

	$(document).ready(function(){
		check_availability();
		vpFit();
		resize_fonts();
	});
	var button_width;
	$(window).resize(function(){
		check_availability();
		vpFit();
		resize_fonts();
		

		if ( ( $(window).width() / $(window).height() ) < $('*[data-vpfit]').data('vpfit') )   {

			if (Modernizr.touch) {   
				if ( $(window).width() < 767) {
					if ( $(window).width() < $(window).height() ) {
						button_width = parseInt( $('*[data-vpfit]').height() ) / 10;
					} else {
						button_width = parseInt( $('*[data-vpfit]').height() ) / 20;
					}
				} else {
					if ( $(window).width() < $(window).height() ) {
						button_width = parseInt( $('*[data-vpfit]').height() ) / 25;
					} else {
						button_width = parseInt( $('*[data-vpfit]').height() ) / 40;
					}
				}
			} else {
				button_width = parseInt( $('*[data-vpfit]').height() ) / 150;
			}
		} else {
			button_width = parseInt( $('*[data-vpfit]').width() ) / 290;
		}
		$('.button-up').css({'width':button_width+'%','margin-left':'-'+button_width/2+'%'});
		$('.button-down').css({'width':button_width+'%','margin-left':'-'+button_width/2+'%'});
//		$('.right.back').css({'width':(button_width/2)+'%'});
	});
	
	$(window).trigger('resize');
	$(window).trigger('mousemove');


/* ------------------------------------------------------------------------------------------------------------------ */

	/* VIEWPORT FIT (start) */
	function vpFit() {
		$('*[data-vpfit]').each(function(){
			$(this).css({'width':'','height':'','top':'','left':'','margin-top':'','margin-left':''});
			if ( ( $(window).width() / $(window).height() ) < $(this).data('vpfit') )   {
				$(this).width( parseFloat( $(window).width() ) );
				$(this).height( parseFloat( $(window).width() / $(this).data('vpfit')) );
				$(this).css({'margin-left': (-$(this).width()/2)+'px', 'margin-top': (-$(this).height()/2)+'px','left':'0','margin-left':'0' });
			} else {
				$(this).height( parseFloat( $(window).height() ) );
				$(this).width( parseFloat( $(window).height() * $(this).data('vpfit')) );
				$(this).css({'margin-left': (-$(this).width()/2)+'px', 'margin-top': (-$(this).height()/2)+'px','top':'0','margin-top':'0' });
			}
		});
	}
	/* VIEWPORT FIT (end) */


/* ------------------------------------------------------------------------------------------------------------------ */


	/* RESIZE FONTS (start) */
	var fontsize;
	var lineheight;
	function resize_fonts() {
		fontsize = $('.vpfit').width() / 100*1.25;
		lineheight = fontsize * 1.25;
		$('.text-large').css({'font-size': (fontsize*2)+'px', 'line-height': (lineheight*2)+'px'});
		$('.text-medium').css({'font-size': (fontsize)+'px', 'line-height': (lineheight)+'px'});
		$('.text-small').css({'font-size': (fontsize*0.5)+'px', 'line-height': (lineheight*0.5)+'px'});
		$('.text-xsmall').css({'font-size': (fontsize*0.25)+'px', 'line-height': (lineheight*0.25)+'px'});
	}
	/* RESIZE FONTS (end) */
	
	
	
/* ------------------------------------------------------------------------------------------------------------------ */