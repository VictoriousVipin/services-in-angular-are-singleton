/**
 * Created by vipintomar on 1/31/2016.
 */
angular.module("myApp",[])
    .controller("myMainController",function($scope,myService){
		$scope.controllerName = "Ritesh Srivastava";
		$scope.serviceName = myService.name;
    })
	.controller("mySecondController",function($scope,myService){
		$scope.controllerName = "Vipin Tomar";
		$scope.serviceName = myService.name;
    })
	.service('myService',function(){
		this.name = "Victorious Vipin";
	})