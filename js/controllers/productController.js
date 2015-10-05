'user strict'

myAppModule.controller('productController', function($scope, productService){
	console.log("Product Controller...Work in progress.");
	
	var successHandler = function(responseData){
		$scope.productList = responseData.data.items;
	}
	
	var errorHandler = function(errorData){
		alert("error");
	}
	
	//service to get the list of product.
	productService.getProductList().then(successHandler, errorHandler);
});