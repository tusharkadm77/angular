'user strict'

myAppModule.controller('loginController', function($rootScope, $scope, loginService){

	// Call login to validate user credential.
	$scope.login = function() {
		$scope.errorMessage = ""; // clear error message.
		
		var userName = $scope.userName;
		var password = $scope.password;
		
		var loginSuccessHandler = function(responseData){
			if(responseData.data.success == 1){
				alert("Login SuccessFul");
			}else{
				$scope.errorMessage = "Invalid login credential";
			}
		};
		
		var loginErrorHandler = function(errorData){
			alert("Error while login");
		};
	
		
		if(userName == undefined || password == undefined || userName == "" || password == ""){
			$scope.errorMessage = "User Name and Password required."
		}else{
			// call login service.
			loginService.login(userName, password).then(loginSuccessHandler, loginErrorHandler);
		}
	};
});