'user strict'

var myAppModule = angular.module("myAppModule", ['ngRoute']);

myAppModule.config(['$routeProvider', 'applicationUrls', 
	function($routeProvider, applicationUrls){
	
		$routeProvider.when(applicationUrls.login, {
			templateUrl: 'view/login.html',
			controller: 'loginController',
			pageContext: 'Login'		
		}).
		when(applicationUrls.dashboard, {
			templateUrl: 'view/dashboard.html',
			controller: 'dashboardController',
			pageContext: 'DashBoard'		
		}).
		otherwise({
			redirectTo: applicationUrls.login
		});
	}
]);