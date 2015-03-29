'user strict'

myAppModule.factory("loginService", function($http, serviceUrls){
	return {
		login: login
	};
	
	/**
		Service call to validate credential.
	*/
	function login(userName, password){
		
		// make a request object.
		var params = { userName: userName,
					   password: password
		};
					 
		return $http({
			method: 'POST',
			url: serviceUrls.login,
			params: params
		});			 
	}
});