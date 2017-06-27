angular
	.module('ngCribs')
	.controller('cribsController', function($scope, cribsFactory) {

		$scope.cribs;


		cribsFactory.getCribs().then(function(data) {
			$scope.cribs = data.data;
		}, function(error) {
			console.log(error);
		});




		$scope.hhh = function(){
			console.log("Hello!");
		}


	


	});