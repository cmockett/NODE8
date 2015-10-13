angular.module('JobApp', [])

angular.module('JobApp')
	.controller('homeController', ['$scope', function($scope){
		
	}]);

angular.module('JobApp')
	.controller('applicantController', ['$scope', '$http', function($scope, $http){
		
		$scope.getApplicantFunc = function(returnData){
		$http.get('/getapplicants').then(function(returnData){

			// $scope.applicantArray = []
			$scope.applicantArray = returnData.data
			// $scope.applicantArray.push(returnData.data)
			console.log($scope.applicantArray)
			console.log("Hi!" + returnData)},
			function(error){
				console.log('error')
			}
		)


		// $http.get('/applicants').then(function(returnData){


		}
		$scope.getApplicantFunc()
	}]);