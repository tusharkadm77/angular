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
		when(applicationUrls.products, {
			templateUrl: 'view/products.html',
			controller: 'productController',
			pageContext: 'Product'
		}).
		otherwise({
			redirectTo: applicationUrls.login
		});
	}
]);