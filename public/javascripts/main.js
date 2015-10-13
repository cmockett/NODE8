angular.module('JobApp', [])

angular.module('JobApp')
	.controller('homeController', ['$scope', function($scope){
		
	}]);

angular.module('JobApp')
	.controller('applicantController', ['$scope', '$http', function($scope, $http){
		$http.get('/getapplicants').then(function(returnData){
			console.log("Hi!" + returnData)},
			function(error){
				console.log('error')
			}
		)
		$http.get('/applicants').then(function(returnData){

			
		$scope.applicantArray = []
		$scope.applicantArray.push(returnData)
		})
	}]);