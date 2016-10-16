define(['countriesList'], function(countriesList) {

	var ctrl = function( $scope, $state, dataFactory ) {
		

		$scope.list = dataFactory.getContacts();

		$scope.editContact = function(itemId) {
			$state.go('edit', { itemId } );
		};
		
		$scope.addNewContact = function() {
			$state.go('add');
		};


	};

	return ['$scope', '$state' ,'dataFactory', ctrl];
});