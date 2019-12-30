const mix = require('laravel-mix');

mix.react('./resources/js/app.js', './static/js').sass(
	'./resources/sass/app.scss',
	'./static/css',
);
