'user strict'

myAppModule.service('productService', function($http, serviceUrls) {

	this.getProductList = function() {
		console.log("Get product list.");
		
		return $http({
			method: 'GET',
			url: serviceUrls.products
		});
	}
	
	this.addProduct = function() {
		alert("Add product not yet implemented.");
		return null;
	}
});