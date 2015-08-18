var Fitter = {
	info: {
		version: '0.1',
		documentation: 'https://github.com/gundvang/fitter',
	},
	settings: {
		defaultRatio: 1.95,
		defaultPosition: 'absolute',
		defaultOrientation: 'horizontal',
		defaultLocation: 'center',
	},
};

Fitter.change = function() {
	$('[data-fitter]').each(function(data) {
		var css = {},
			orientation,
			position;

		if ($(this).data('orientation')) {
			orientation = $(this).data('orientation');
		} else {
			orientation = Fitter.settings.defaultOrientation;
		}
		if ($(this).data('ratio')) {
			if (orientation == 'vertical') {
				css['width'] = $(window).height() / $(this).data('ratio');
				css['height'] = '100%';
			} else {
				css['width'] = '100%';
				css['height'] = $(window).width() / $(this).data('ratio');
			}
		} else {
			if (orientation == 'vertical') {
				css['width'] = $(window).height() / Fitter.settings.defaultRatio;
				css['height'] = '100%';
			} else {
				css['width'] = '100%';
				css['height'] = $(window).width() / Fitter.settings.defaultRatio;
			}
		}

		if ($(this).data('position')) {
			position = $(this).data('position');
		} else {
			position = Fitter.settings.defaultPosition;
		}
		css['position'] = position;
		if (position == 'absolute' || position == 'fixed') {
			if (orientation == 'vertical') {
				css['top'] = '0';
				css['left'] = '50%';
				css['transform'] = 'translateX(-50%)';
			} else {
				css['left'] = '0';
				css['top'] = '50%';
				css['transform'] = 'translateY(-50%)';
			}
		}

		$(this).css( css );

		console.log( $(this).data('fitter') );
		console.log( css );
	});
};

Fitter.setup = function(data) {
	if (typeof(data.orientation) != 'undefined') { Fitter.settings.defaultOrientation = data.orientation; }
	if (typeof(data.position) != 'undefined') { Fitter.settings.defaultPosition = data.position; }
	if (typeof(data.ratio) != 'undefined') { Fitter.settings.defaultRatio = data.ratio; }
	if (typeof(data.location) != 'undefined') { Fitter.settings.defaultLocation = data.location; }
};

Fitter.init = function() {
	$(window).resize( Fitter.change );
	$(window).trigger('resize');
};
