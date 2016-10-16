define([], function() {

	var ctrl = function($scope, $stateParams, dataFactory) {
		
		$scope.contact = dataFactory.getContact( $stateParams.itemId );
		
	};

	return ['$scope', '$stateParams', 'dataFactory', ctrl];
});