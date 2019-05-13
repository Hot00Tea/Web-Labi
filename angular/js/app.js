var myApp = angular.module("myApp", ["ngRoute"])
	.config(function ($routeProvider) {
	$routeProvider.when("/page1", {
		templateUrl: "../views/page1.html",
		controller: "page1Controller"
	});

	$routeProvider.when("/page2", {
		templateUrl: "../views/page2.html",
		controller: "page2Controller"
	});
})
