	
	function contentFit() {
		var rx = 1.95;
		var ww = $(window).width();
		$('.xfit').css({ 'height':ww/rx, 'width':'100%' });
 		$('.xfit.middle').css({ 'margin-top': '-'+(ww/rx)/2+'px'}); 
		$('*[data-fontsizebyscreenwidth]').each(function(){ $(this).css({'font-size': parseFloat($(this).data('fontsizebyscreenwidth') * $(window).width() / 100) + 'px', 'line-height': parseFloat($(this).data('fontsizebyscreenwidth') * $(window).width() / 80) + 'px' }) });
	}

/*--------------------------------------------------------------------------------------------------------------------*/

    function buttonSize() {
		if ( $(window).width() > 991 ) {
			$('.btn-prev').css({'margin-top':'-'+ ($('body').width()/50)+'px'});
			$('.btn-next').css({'margin-top':'-'+ ($('body').width()/50)+'px'});
			$('#pagination').css({'margin-top':'-255px'});
		} else {
			$('.btn-prev').css({'margin-top':'-'+ ($('body').width()/12.6)+'px'});
			$('.btn-next').css({'margin-top':'-'+ ($('body').width()/12.6)+'px'});
			$('#pagination').css({'margin-top': ''});
		}
	}
	
    function orientationCheck() {
	    if ( ($(window).width() <= 991) && ($(window).width() >= $(window).height()) ) {
			$('#animatrix-scene').css({'visibility':'hidden'});
			$('#error-orientation').css({'visibility':'visible'});
		} else {
			$('#animatrix-scene').css({'visibility':'visible'});
			$('#error-orientation').css({'visibility':'hidden'});			
		}
	}

/*--------------------------------------------------------------------------------------------------------------------*/

	var slideId,
		firstTime = true;
	
	$('#btn-sound').on('click', function(e) {
    	slideId = $('body').attr('class');
    		
		if ( $('#btn-sound-off').hasClass('hidden') ) {
			$('#btn-sound-off').removeClass('hidden');
			$('#btn-sound-on').addClass('hidden');
			$('#sound-'+slideId).trigger('pause');
			$('#sound-'+slideId).prop('currentTime',0);
		} else {
			$('#btn-sound-off').addClass('hidden');
			$('#btn-sound-on').removeClass('hidden');
			$('#sound-'+slideId).trigger('play');
	
			if(firstTime) {
				setTimeout(function(){ $('.sound').not('#sound-'+slideId).trigger('play').prop('currentTime',0).trigger('pause'); }, 500);
				firstTime = false;
			}
		}
	});

	$('.sound-click').on('click', function(e) {		
		slideId = $('body').attr('class');
		if ( $('#btn-sound-off').hasClass('hidden') ) {
			$('.sound').trigger('pause');
			$('.sound').prop('currentTime',0);
			$('#sound-'+slideId).trigger('play');
		}
	});

	$('.btn-next').on('click', function(e) {
		slideId = $('body').attr('class');
		if ( $('#btn-sound-off').hasClass('hidden') ) {
			$('.sound').trigger('pause');
			$('.sound').prop('currentTime',0);
			$('#sound-'+slideId).trigger('play');
		}
	});

/*--------------------------------------------------------------------------------------------------------------------*/

	$('#btn-help').click(function() {
		$('#popup-help').css({'top':'0'});
	});
	$('#popup-help #help-close').click(function() {
		$('#popup-help').css({'top':''});
	});
	$('#popup-help #help-pagination .link').click(function() {
		$('#popup-help').css({'top':''});
	});
	
	$('#pagination').click(function() {
		if ( $(window).width() <= 991 ) {
			$('#popup-help').css({'top':'0'});
		}
	});

/*--------------------------------------------------------------------------------------------------------------------*/

	$('#s12p-btn1').click(function() {
		$('#slide12-popup .slide-btn.active').removeClass('active');
		$('#slide12-popup .slide-text:not(.hidden)').addClass('hidden');
		$('#slide12-popup #s12p-btn1:not(.active)').addClass('active');
		$('#slide12-popup #s12p-text1.hidden').removeClass('hidden');
		console.log('button');
	});
	$('#s12p-btn2').click(function() {
		$('#slide12-popup .slide-btn.active').removeClass('active');
		$('#slide12-popup .slide-text:not(.hidden)').addClass('hidden');
		$('#slide12-popup #s12p-btn2:not(.active)').addClass('active');
		$('#slide12-popup #s12p-text2.hidden').removeClass('hidden');
		console.log('button');
	});
	$('#s12p-btn3').click(function() {
		$('#slide12-popup .slide-btn.active').removeClass('active');
		$('#slide12-popup .slide-text:not(.hidden)').addClass('hidden');
		$('#slide12-popup #s12p-btn3:not(.active)').addClass('active');
		$('#slide12-popup #s12p-text3.hidden').removeClass('hidden');
		console.log('button');
	});

/*--------------------------------------------------------------------------------------------------------------------*/

	$('#s8p-btn1').click(function() {
		$('#slide8-popup .slide-btn.active').removeClass('active');
		$('#slide8-popup .slide-text:not(.hidden)').addClass('hidden');
		$('#slide8-popup .slide-img:not(.hidden)').addClass('hidden');
		$('#slide8-popup #s8p-btn1:not(.active)').addClass('active');
		$('#slide8-popup #s8p-text1.hidden').removeClass('hidden');
		$('#slide8-popup #s8p-img1.hidden').removeClass('hidden');
	});
	$('#s8p-btn2').click(function() {
		$('#slide8-popup .slide-btn.active').removeClass('active');
		$('#slide8-popup .slide-text:not(.hidden)').addClass('hidden');
		$('#slide8-popup .slide-img:not(.hidden)').addClass('hidden');
		$('#slide8-popup #s8p-btn2:not(.active)').addClass('active');
		$('#slide8-popup #s8p-text2.hidden').removeClass('hidden');
		$('#slide8-popup #s8p-img2.hidden').removeClass('hidden');
	});
	$('#s8p-btn3').click(function() {
		$('#slide8-popup .slide-btn.active').removeClass('active');
		$('#slide8-popup .slide-text:not(.hidden)').addClass('hidden');
		$('#slide8-popup .slide-img:not(.hidden)').addClass('hidden');
		$('#slide8-popup #s8p-btn3:not(.active)').addClass('active');
		$('#slide8-popup #s8p-text3.hidden').removeClass('hidden');
		$('#slide8-popup #s8p-img3.hidden').removeClass('hidden');
	});
	
	var vimeo_player;

/*--------------------------------------------------------------------------------------------------------------------*/

	Animatrix.init({
		hashPrefix: '#',
		transitionTime: 1000,
		keyboardControl: true,
		keyboardControlInterval: 1000,
		pagination: false,
		onInit: function(){
			Animatrix.addSlideEvent('slide1', 'in', function(){
				$('#pagination .link').removeClass('active').slice(0,1).addClass('active'); $('#help-pagination .link').removeClass('active').slice(0,1).addClass('active'); 
				$('.sound-click').trigger('click');
			});
			Animatrix.addSlideEvent('slide2', 'in', function(){
				$('#pagination .link').removeClass('active').slice(0,2).addClass('active'); $('#help-pagination .link').removeClass('active').slice(0,2).addClass('active'); 
				if ( !$('#slide2-popup').hasClass('out') ) {
					$('.sound-click').trigger('click');
				} else {
					vimeo_player = $f( $('#vimeo')[0] );
					vimeo_player.api('pause');
				}
			});
			Animatrix.addSlideEvent('slide3', 'in', function(){ 
				$('#pagination .link').removeClass('active').slice(0,4).addClass('active'); $('#help-pagination .link').removeClass('active').slice(0,4).addClass('active');
				$('.sound-click').trigger('click');
			});
			Animatrix.addSlideEvent('slide4', 'in', function(){ 
				$('#pagination .link').removeClass('active').slice(0,5).addClass('active'); $('#help-pagination .link').removeClass('active').slice(0,5).addClass('active');
				$('.sound-click').trigger('click');
			});
			Animatrix.addSlideEvent('slide5', 'in', function(){ 
				$('#pagination .link').removeClass('active').slice(0,6).addClass('active'); $('#help-pagination .link').removeClass('active').slice(0,6).addClass('active');
				if ( !$('#slide5-popup').hasClass('out') ) {
					$('.sound-click').trigger('click');
				}
			});
			Animatrix.addSlideEvent('slide6', 'in', function(){ 
				$('#pagination .link').removeClass('active').slice(0,7).addClass('active'); $('#help-pagination .link').removeClass('active').slice(0,7).addClass('active');
				$('.sound-click').trigger('click');
			});
			Animatrix.addSlideEvent('slide7', 'in', function(){ 
				$('#pagination .link').removeClass('active').slice(0,9).addClass('active'); $('#help-pagination .link').removeClass('active').slice(0,9).addClass('active');
				$('.sound-click').trigger('click');
			});
			Animatrix.addSlideEvent('slide8', 'in', function(){ 
				$('#pagination .link').removeClass('active').slice(0,10).addClass('active'); $('#help-pagination .link').removeClass('active').slice(0,10).addClass('active');
				if ( !$('#slide8-popup').hasClass('out') ) {
					$('.sound-click').trigger('click');
				}
			});
			Animatrix.addSlideEvent('slide9', 'in', function(){ 
				$('#pagination .link').removeClass('active').slice(0,11).addClass('active'); $('#help-pagination .link').removeClass('active').slice(0,11).addClass('active');
				$('.sound-click').trigger('click');
			});
			Animatrix.addSlideEvent('slide10', 'in', function(){ 
				$('#pagination .link').removeClass('active').slice(0,13).addClass('active'); $('#help-pagination .link').removeClass('active').slice(0,13).addClass('active');
				$('.sound-click').trigger('click');
			});
			Animatrix.addSlideEvent('slide11', 'in', function(){ 
				$('#pagination .link').removeClass('active').slice(0,14).addClass('active'); $('#help-pagination .link').removeClass('active').slice(0,14).addClass('active');
				$('.sound-click').trigger('click');
			});
			Animatrix.addSlideEvent('slide12', 'in', function(){ 
				$('#pagination .link').removeClass('active').slice(0,15).addClass('active'); $('#help-pagination .link').removeClass('active').slice(0,15).addClass('active');
				if ( !$('#slide12-popup').hasClass('out') ) {
					$('.sound-click').trigger('click');
				}
			});
			Animatrix.addSlideEvent('slide2-popup', 'in', function(){ 
				$('#sound-slide2').trigger('pause');
				$('#sound-slide2').prop('currentTime',0);
			});
			Animatrix.addSlideEvent('slide5-popup', 'in', function(){ 
				$('#sound-slide5').trigger('pause');
				$('#sound-slide5').prop('currentTime',0);
			});
			Animatrix.addSlideEvent('slide8-popup', 'in', function(){ 
				$('#sound-slide8').trigger('pause');
				$('#sound-slide8').prop('currentTime',0);
			});
			Animatrix.addSlideEvent('slide12-popup', 'in', function(){ 
				$('#sound-slide12').trigger('pause');
				$('#sound-slide12').prop('currentTime',0);
			});
		},
		onReady: function(){ }
	});
	
/*--------------------------------------------------------------------------------------------------------------------*/

	$(document).ready(function(){
		contentFit();
		buttonSize();
		orientationCheck();
	});
	$('body').css({'opacity':'0'});
	$(window).load(function(){
		contentFit();
		buttonSize();
		orientationCheck();
		$('body').css({'opacity':'1'});
	});
	$(window).resize(function(){
		contentFit();
		buttonSize();
		orientationCheck();
	});
	window.addEventListener("orientationchange", function() {
		orientationCheck();
	}, false);
	
	if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		$('#slide1 .gestures').toggleClass('hidden');
	}