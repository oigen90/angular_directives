(function(){

	'use strict';

	var app = angular.module('directives', []);

	app.directive('superhero', function() {
		return {
			restrict: 'E',
			scope: {
				hisName: '@',
				say: '&'
			},
			controller: function($scope) {
				$scope.abilities = [];
				this.addStrength = function() {
					$scope.abilities.push('strength');
				};
				this.addFlight = function() {
					$scope.abilities.push('flight');
				};
				this.addSpeed = function() {
					$scope.abilities.push('speed');
				};
				this.addWeapon = function() {
					$scope.abilities.push('weapon');
				};
				this.addTeam = function() {
					$scope.abilities.push('team');
				};
			},
			template: '<div ng-click="say({name: hisName, abilities: abilities})">{{hisName|uppercase}}</div>',
			replace: true,
			link: function(scope, element, attrs) {
				element.addClass('btn');
				element.addClass(attrs.hisName);
				element.bind('mouseenter', function(){
					console.log(scope.abilities);
				});
			}
		};
	});

	app.directive('strength', function() {
		return {
			require: 'superhero',
			restrict: 'A',
			link: function(scope, element, attrs, superheroCtrl) {
				superheroCtrl.addStrength();
			}
		};
	});

	app.directive('flight', function() {
		return {
			require: 'superhero',
			restrict: 'A',
			link: function(scope, element, attrs, superheroCtrl) {
				superheroCtrl.addFlight();
			}
		};
	});

	app.directive('speed', function() {
		return {
			require: 'superhero',
			restrict: 'A',
			link: function(scope, element, attrs, superheroCtrl) {
				superheroCtrl.addSpeed();
			}
		};
	});

	app.directive('weapon', function() {
		return {
			require: 'superhero',
			restrict: 'A',
			link: function(scope, element, attrs, superheroCtrl) {
				superheroCtrl.addWeapon();
			}
		};
	});

	app.directive('team', function() {
		return {
			require: 'superhero',
			restrict: 'A',
			link: function(scope, element, attrs, superheroCtrl) {
				superheroCtrl.addTeam();
			}
		};
	});

})();