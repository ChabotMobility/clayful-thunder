const set = require('lodash.set');

require('../../../node_modules/lightslider/dist/js/lightslider.min.js');

module.exports = Thunder => {

	// Implementation
	const implementation = {
		name: 'catalog-slider'
	};

	implementation.options = () => ({
		useNav: true,
		usePager: true,
		showCaption: true,
		autoLoop: 3000
	});

	implementation.pre = function(context, callback) {
		const errors = {
			default: context.m('loadFailed')
		};

		const catalogId = context.options.catalog;

		return Thunder.request({
			method: 'GET',
			url:    `/v1/catalogs/${catalogId}`,
			query:  {
				fields: [
					'items',
					'slug',
					'title'
				].join(',')
			}
		}).then(data => {

			context.targetCheck = (url) => {
				if (url[0] !== '/' && url.indexOf(window.location.host) === -1) return '_blank';
				return '_self';
			};

			return callback(null, set(context, 'catalog-slider', data));
		}, err => Thunder.util.requestErrorHandler(
			err.responseJSON,
			errors,
			callback
		));

	};

	implementation.init = function(context) {

		const options = {
			item: 1,
			speed: 800,
			slideMargin: 0,
			gallery: false,
			pauseOnHover: true,
			pager: context.options.usePager,
			controls: context.options.useNav,
			loop: !!context.options.autoLoop,
			auto: !!context.options.autoLoop,
			pause: context.options.autoLoop || 3000,
			prevHtml: `<img src="${Thunder.uis['left-arrow']()}">`,
			nextHtml: `<img src="${Thunder.uis['right-arrow']()}">`
		};

		$('.thunder--catlaog-slider').lightSlider(options);

	};

	return implementation;

};