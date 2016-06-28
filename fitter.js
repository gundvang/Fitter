var Fitter = {
	info: {
		version: '0.4',
		documentation: 'https://github.com/gundvang/FitterJS',
	},
	enabled: true,
	settings: {
		defaultRatio: 1.95, // IDEA: screen formats 16:9, 16:10, 4:3, ?
		defaultPosition: 'absolute',
		defaultOrientation: 'vertical',
		defaultLocation: 'center',
		defaultSize: 'cover',
	},
};

Fitter.change = function() {
	$('[data-fitter]').each(function(data) {
		var fitterData = $(this).data('fitter').split(';'),
			fitter = {},
			css = {};

		for (i = 0; i < fitterData.length; i++) {
			var property = fitterData[i].split(':')[0];
			var value = fitterData[i].split(':')[1];
			if (!property || !value) {	continue; }
			property = property.trim();
			value = value.trim();
			fitter[property] = value;
		}

		if (typeof(fitter['orientation']) == 'undefined') { fitter['location'] = Fitter.settings.defaultOrientation; }
		if (typeof(fitter['position']) == 'undefined') { fitter['position'] = Fitter.settings.defaultPosition; }
		if (typeof(fitter['ratio']) == 'undefined') { fitter['ratio'] = Fitter.settings.defaultRatio; }
		if (typeof(fitter['location']) == 'undefined') { fitter['location'] = Fitter.settings.defaultLocation; }
		if (typeof(fitter['size']) == 'undefined') { fitter['size'] = Fitter.settings.defaultSize; }

		css['position'] = fitter['position'];

		if (fitter['orientation'] == 'vertical') {
			css['height'] = '100%';
			css['width'] = $(window).height() / fitter['ratio']; // FIXME: should change according to position type
		} else {
			css['width'] = '100%';
			css['height'] = $(window).width() / fitter['ratio']; // FIXME: should change according to position type
		}
		if (fitter['position'] == 'absolute' || fitter['position'] == 'fixed') {
			if (fitter['orientation'] == 'vertical') {
				css['top'] = '0';
				if (fitter['location'] == 'left') {
					css['left'] = '0';
				} else if (fitter['location'] == 'right') {
					css['right'] = '0';
				} else {
					css['left'] = '50%';
					css['transform'] = 'translateX(-50%)';
				}
			} else {
				css['left'] = '0';
				if (fitter['location'] == 'top') {
					css['top'] = '0';
				} else if (fitter['location'] == 'bottom') {
					css['bottom'] = '0';
				} else {
					css['top'] = '50%';
					css['transform'] = 'translateY(-50%)';
				}
			}
		}
		$(this).css( css );
	});
};

Fitter.setup = function(data) {
	if (typeof(data.orientation) != 'undefined') { Fitter.settings.defaultOrientation = data.orientation; }
	if (typeof(data.position) != 'undefined') { Fitter.settings.defaultPosition = data.position; }
	if (typeof(data.ratio) != 'undefined') { Fitter.settings.defaultRatio = data.ratio; }
	if (typeof(data.location) != 'undefined') { Fitter.settings.defaultLocation = data.location; }
	if (typeof(data.size) != 'undefined') { Fitter.settings.defaulSize = data.size; }
};

Fitter.init = function() {
	$(window).resize( Fitter.change );
	$(window).trigger('resize');
};
