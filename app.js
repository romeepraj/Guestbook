var app = angular.module('loop', []);



app.controller('PersonsCtrl', function ($scope) {
	//$scope.selectedIndex = null;
	$scope.selectedPerson = null;
	$scope.search = "";
	$scope.order = "email";



	$scope.searchSensitive = function(person){
		if($scope.search){
			return person.name.indexOf($scope.search) == 0 || person.email.indexOf($scope.search) == 0;

		}
		return true;

	}
	$scope.selectPerson = function(person){
		//$scope.selectedIndex = index;
		$scope.selectedPerson = person;
	}
$scope.persons = [
{
"name": "Romee Prajapati",
"email":"romee.prajapati@gmail.com",
"birthday":"2015-03-23T18:00:37-07:00",
"country":"Nepal"
},
{
"name": "Manish Shrestha",
"email":"man.shrestha@gmail.com",
"birthday":"2015-03-23T18:00:37-07:00",
"country": "Singapore"
},
{
"name": "Navya Prajapati",
"email":"navya.prajapati@gmail.com",
"birthday":"2015-03-23T18:00:37-07:00",
"country": "USA"
}
]	
});