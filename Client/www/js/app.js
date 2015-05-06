'use strict';
var app = angular.module('appName', ['ui.router'])
	.run()
	.config(function ($stateProvider, $urlRouterProvider) {
				$urlRouterProvider.otherwise('/index');

				$stateProvider
					.state('index', {
						url: '/index',
						templateUrl: 'templates/hallo.html'
					});

			});