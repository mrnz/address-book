({
	paths: {
		'angular': '../../node_modules/angular/angular',
		'angularAnimate': '../../node_modules/angular-animate/angular-animate.min',
		'uiRouter': '../../node_modules/angular-ui-router/release/angular-ui-router',
		'uiBootstrap': '../../node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls',
		'localStorage': '../../node_modules/angular-local-storage/dist/angular-local-storage',
		
		'countriesList': 'data/country-list',
		'app': 'app',
		'templates': 'templates',
		// controllers
		'fulllistCtrl': 'controllers/fulllistCtrl',
		'editItemCtrl': 'controllers/editItemCtrl',
		'addItemCtrl': 'controllers/addItemCtrl',
		// factories
		'dataFactory': 'factories/dataFactory',
		// Directives
		'formDirective': 'directives/formDirective'
	},

	shim: {
		angular: {
			exports: 'angular'
		},
		angularAnimate: {
			exports: 'angularAnimate',
			deps: ['angular']
		},

		uiRouter: {
			exports: 'uiRouter',
			deps: ['angular']
		},
		uiBootstrap: {
			exports: 'uiBootstrap',
			deps: ['angular']
		},
		localStorage: {
			exports: 'localStorage',
			deps: ['angular']
		}
	},

	baseUrl: './',
	name: './../../node_modules/almond/almond',
	out: '../build/js/main.js',
	include: ['main'],
	insertRequire: ['main'],
	wrap: true
});
