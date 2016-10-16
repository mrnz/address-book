define([
	'uiRouter', 
	'angularAnimate',
	'uiBootstrap', 
	'localStorage', 
	'templates', 
	'fulllistCtrl',
	'editItemCtrl',
	'addItemCtrl',
	'dataFactory',
	'formDirective'
	], function(uiRouter, angularAnimate, uiBootstrap, LocalStorageModule, templates, fulllistCtrl, editItemCtrl, addItemCtrl, dataFactory, formDirective) {
	
	var app = angular.module('app',['ui.router', 'ngAnimate', 'ui.bootstrap', 'LocalStorageModule']);
	
	app.run( templates );

	app.controller('fulllistCtrl', fulllistCtrl);
	app.controller('editItemCtrl', editItemCtrl);
	app.controller('addItemCtrl', addItemCtrl);

	app.factory('dataFactory', dataFactory);
	
	app.directive('formDirective', formDirective);

	app.config(["$stateProvider", "$urlRouterProvider", "$httpProvider",function($stateProvider, $urlRouterProvider, $httpProvider ) {
		
		$urlRouterProvider.otherwise('/fulllist');
		
		$stateProvider
			// .state('wrapper', {
			//   abstract: true,
			//   url: '/contacts',

			//   // Note: abstract still needs a ui-view for its children to populate.
			//   // You can simply add it inline here.
			//   template: '<ui-view/>'
			// })			
			.state('fulllist', {
				url:'/fulllist',
				templateUrl: 'templates/fulllist.html',
				controller: 'fulllistCtrl'
			})
			.state('edit', {
				url:'/edit/:itemId',
				templateUrl: 'templates/editItem.html',
				controller: 'editItemCtrl'
			})
			.state('add', {
				url:'/add',
				templateUrl: 'templates/addItem.html',
				controller: 'addItemCtrl'
			})

	}]);

	return app;


});