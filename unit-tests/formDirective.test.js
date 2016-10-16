

define([ 'app', 'angularMocks', 'formDirective' ], function(app, mocks, formDirective ) {

	describe('Form directive test', function (){ 

		var $compile,
				$scope,
				testData = {"firstname":"Adam","lastname":"Smith","email":"adam@mail.com","country":"Scotland","id":1476305393289},
				elem =  '<form-directive data-contact="contact" data-title="{{title}}"></form-directive>';

		beforeEach(module('app'));
		
		beforeEach( inject(function( _$rootScope_, _$compile_, _$state_ ) {
			
			$compile = _$compile_;
			$scope = _$rootScope_.$new();
			$state = _$state_;
	
		}));

		it('Add new contect form should corect title and only two buttons', function() {
			
			$scope.contact = {};
			$scope.title = 'Add contact';
			
			var element = $compile( angular.element(elem) )( $scope );
			
			$scope.$digest();

			expect( element.html() ).toContain( $scope.title );

			var buttons = element.find('button');
			expect( buttons.length ).toBe(2);

		});

		it('Edit contect form should corect title and three buttons', function() {
			
			$scope.contact = testData;			
			$scope.title = 'Edit contact';
			
			var element = $compile( angular.element(elem) )( $scope );
			
			$scope.$digest();

			expect( element.html() ).toContain( $scope.title );

			var buttons = element.find('button');
			expect( buttons.length ).toBe(3);

		});		
		



		describe('First name input test', function (){ 
			
			beforeEach( inject(function() {
				$scope.contact = testData;
				$scope.title = 'Edit contact';
			}));

			it('First name input with empty string should be invalid', function() {
			
				$scope.contact.firstname = ''; 
				
				var element = $compile( angular.element( elem ) )( $scope );
				$scope.$digest();

			  var result = element[0].querySelectorAll('#firstname');
			  expect( angular.element(result).hasClass('ng-invalid') ).toBe(true);
			
			});

			it('First name input with string longer then 20 characters should be invalid', function() {
				
				$scope.contact.firstname = ('r').repeat(21);

				var element = $compile( angular.element( elem ) )( $scope );
				$scope.$digest();

			  var result = element[0].querySelectorAll('#firstname');
			  expect( angular.element(result).hasClass('ng-invalid') ).toBe(true);
			
			});			
			
			it('First name input with string shorter then 3 characters should be invalid', function() {

				$scope.contact.firstname = ('r').repeat(2);

				var element = $compile( angular.element( elem ) )( $scope );
				$scope.$digest();

			  var result = element[0].querySelectorAll('#firstname');
			  expect( angular.element(result).hasClass('ng-invalid') ).toBe(true);
			
			});		
			it('First name input with string lenght between 3 and 20 should be valid', function() {

				$scope.contact.firstname = ('r').repeat(10);

				var element = $compile( angular.element( elem ) )( $scope );
				$scope.$digest();

			  var result = element[0].querySelectorAll('#firstname');
			  expect( angular.element(result).hasClass('ng-invalid') ).toBe(false);
			  expect( angular.element(result).hasClass('ng-valid') ).toBe(true);
			
			});

		});





		describe('Last name input test', function (){ 
			
			beforeEach( inject(function() {
				$scope.contact = testData;
				$scope.title = 'Edit contact';
			}));

			it('Last name input with empty string should be invalid', function() {
			
				$scope.contact.lastname = ''; 
				
				var element = $compile( angular.element( elem ) )( $scope );
				$scope.$digest();

			  var result = element[0].querySelectorAll('#lastname');
			  expect( angular.element(result).hasClass('ng-invalid') ).toBe(true);
			
			});

			it('Last name input with string longer then 20 characters should be invalid', function() {
				
				$scope.contact.lastname = ('r').repeat(21);

				var element = $compile( angular.element( elem ) )( $scope );
				$scope.$digest();

			  var result = element[0].querySelectorAll('#lastname');
			  expect( angular.element(result).hasClass('ng-invalid') ).toBe(true);
			
			});			
			
			it('Last name input with string shorter then 3 characters should be invalid', function() {

				$scope.contact.lastname = ('r').repeat(2);

				var element = $compile( angular.element( elem ) )( $scope );
				$scope.$digest();

			  var result = element[0].querySelectorAll('#lastname');
			  expect( angular.element(result).hasClass('ng-invalid') ).toBe(true);
			
			});		
			it('Last name input with string lenght between 3 and 20 should be valid', function() {

				$scope.contact.lastname = ('r').repeat(10);

				var element = $compile( angular.element( elem ) )( $scope );
				$scope.$digest();

			  var result = element[0].querySelectorAll('#lastname');
			  expect( angular.element(result).hasClass('ng-invalid') ).toBe(false);
			  expect( angular.element(result).hasClass('ng-valid') ).toBe(true);
			
			});

		});


		describe('E-mail input test', function (){ 
			
			beforeEach( inject(function() {
				$scope.contact = testData;
				$scope.title = 'Edit contact';
			}));

			it('E-mail input with empty string should be invalid', function() {
			
				$scope.contact.email = ''; 
				
				var element = $compile( angular.element( elem ) )( $scope );
				$scope.$digest();

			  var result = element[0].querySelectorAll('#email');
			  expect( angular.element(result).hasClass('ng-invalid') ).toBe(true);
			
			});

			it('E-mail input with string wwwwwwww should be invalid', function() {
				
				$scope.contact.email = 'wwwwwwww';

				var element = $compile( angular.element( elem ) )( $scope );
				$scope.$digest();

			  var result = element[0].querySelectorAll('#email');
			  expect( angular.element(result).hasClass('ng-invalid') ).toBe(true);
			
			});			
			
			it('E-mail input with string wwwwwwww@wwwww should be invalid', function() {

				$scope.contact.email = 'wwwwwwww@wwwww';

				var element = $compile( angular.element( elem ) )( $scope );
				$scope.$digest();

			  var result = element[0].querySelectorAll('#email');
			  expect( angular.element(result).hasClass('ng-invalid') ).toBe(true);
			
			});		
			it('E-mail input with string wwwwwwww@wwwww.com should be invalid', function() {

				$scope.contact.email = 'wwwwwwww@wwwww.com';

				var element = $compile( angular.element( elem ) )( $scope );
				$scope.$digest();

			  var result = element[0].querySelectorAll('#email');
			  expect( angular.element(result).hasClass('ng-invalid') ).toBe(false);
			  expect( angular.element(result).hasClass('ng-valid') ).toBe(true);
			
			});

		});
		
		describe('Country select input test', function (){ 
			
			beforeEach( inject(function() {
				$scope.contact = testData;
				$scope.title = 'Edit contact';
			}));

			it('Country select input with empty string should be invalid', function() {
			
				$scope.contact.country = ''; 
				
				var element = $compile( angular.element( elem ) )( $scope );
				$scope.$digest();

			  var result = element[0].querySelectorAll('#country');
				
				expect( angular.element(result).hasClass('ng-invalid') ).toBe(true);
			
			});

			it('Country select input with string Poland should be valid', function() {
				
				$scope.contact.country = 'Poland';

				var element = $compile( angular.element( elem ) )( $scope );
				$scope.$digest();

			  var result = element[0].querySelectorAll('#country');
			 
				expect( angular.element(result).hasClass('ng-invalid') ).toBe(false);
			  expect( angular.element(result).hasClass('ng-valid') ).toBe(true);			
			});			

		});

		describe('Submit button test', function (){ 
			
			beforeEach( inject(function() {
				$scope.contact = testData;
				$scope.title = 'Edit contact';
			}));

			it('Submit button should be disabled initially', function() {
			
			
				var element = $compile( angular.element( elem ) )( $scope );
				$scope.$digest();

			  var result = element[0].querySelectorAll('#submit');
			  expect( angular.element(result).attr('disabled') ).toEqual( 'disabled' );
			
			});
			
			it('Submit button should be enabled after some change', function() {
			
				var element = $compile( angular.element( elem ) )( $scope );
				$scope.$digest();

			  var result = element[0].querySelectorAll('#submit');
			  expect( angular.element(result).attr('disabled') ).toEqual( 'disabled' );
				
				angular.element( element[0].querySelectorAll('#firstname') ).controller('ngModel').$setViewValue('test');
			  
			  var result = element[0].querySelectorAll('#submit');
			  expect( angular.element(result).attr('disabled') ).not.toEqual( 'disabled' );

			});

		});

		describe('Delete button test', function (){ 
			
			beforeEach( inject(function() {
				$scope.title = 'Some title';
			}));

			it('Delete button should be invisible if contact data is empty object', function() {
			
				$scope.contact = {};

				var element = $compile( angular.element( elem ) )( $scope );
				$scope.$digest();

			  var result = element[0].querySelectorAll('#delete');

			  expect( result.length ).toBe( 0 );
			
			});
			

			it('Delete button should be visable if contact data is empty object', function() {
			
				$scope.contact = testData;

				var element = $compile( angular.element( elem ) )( $scope );
				$scope.$digest();

			  var result = element[0].querySelectorAll('#delete');

			  expect( result.length ).toBe( 1 );
			
			});

		});	

	});

});
