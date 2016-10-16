define(['countriesList'], function(countriesList) {
	
	var directive = function(dataFactory, $state){
	
		return {
			scope: {
				contact: '&',
				title: '@'
			}, 
			restrict: 'E', 
			templateUrl: 'templates/editAddForm.html',
			replace: true,
			link: function(scope, elem, attrs, ctrl) {
				
				scope.isValid = false;

				scope.fields = scope.contact();

				scope.modelToCompair = JSON.stringify( Object.assign( {}, scope.fields ) );

				scope.isThisEditForm = Object.keys( scope.fields ).length;

				scope.countries = countriesList.map( countryObj => countryObj.name ); 

				scope.emailpattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,4})$/i;

				scope.submitValidation = function() {
					
					var condition1 = scope.addContact.$valid,
							condition2 = JSON.stringify( scope.fields ) !==  scope.modelToCompair ;

					scope.isValid = condition1 && condition2 ? true : false;

				};

				scope.goHome = () => $state.go('fulllist');

				scope.submit = function() {
					var result;
					
					if( scope.isThisEditForm ) {
						result = dataFactory.updateContact( scope.fields );	
					} else {
						result = dataFactory.setContact( scope.fields );	
					}

				  if( result ) {
						$state.go('fulllist')
					}

				};

				scope.deleteContect = function() {
					var result = dataFactory.deleteContact( scope.fields.id );
					if( result ) {
						$state.go('fulllist')
					}
				};

			}
		};
	}

	return ['dataFactory', '$state', directive];

});