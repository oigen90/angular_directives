(function(){

	'use strict';

	angular.module('controllers', [])
		.controller('heroesCtrl', ['$scope', function($scope){
			$scope.sayName = function(name, abilities) {
				alert('I\'m ' + _.string.capitalize(name) + '! I have ' + abilities.join(', ') + '.');
			};
		}]);

})();