function testInterceptor() {
	return {
		request : function(config) {
			console.log(config);
			console.log("Primer interceptor - REQUEST");
			return config;
		},

		requestError : function(config) {
			console.log(config);
			return config;
		},

		response : function(res) {
			console.log(res);
			console.log("Primer interceptor - RESPONSE");
			return res;
		},

		responseError : function(res) {
			console.log(res);
			return res;
		}
	}
}

function testInterceptor2() {
	return {
		request : function(config) {
			console.log(config);
			console.log("SEGUNDO interceptor - REQUEST");
			return config;
		},

		requestError : function(config) {
			console.log(config);
			return config;
		},

		response : function(res) {
			console.log(res);
			console.log("SEGUNDO interceptor - RESPONSE");
			return res;
		},

		responseError : function(res) {
			console.log(res);
			return res;
		}
	}
}

angular.module('app', []).factory('testInterceptor', testInterceptor).factory(
		'testInterceptor2', testInterceptor2).config(function($httpProvider) {
			$httpProvider.interceptors.push('testInterceptor');
			$httpProvider.interceptors.push('testInterceptor2');
}).run(
		function($http) {
			$http.get('http://test-routes.herokuapp.com/test/hello').then(
					function(res) {
						console.log(res.data.message)
					})
		})