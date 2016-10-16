// define([ 'angularMocks', 'fulllistCtrl' ], function( mocks, fulllistCtrl) {

//   describe('Full List Controller', function() {

//     var ctrl,
//         $scope,
//         $state,
//         dataFactory,
//         dependency;
    
//     var testData = [
//       {"firstname":"Adam","lastname":"Smith","email":"adam@mail.com","country":"Scotland","id":1476305393289},
//       {"firstname":"Baruch","lastname":"Spinoza","email":"spin@mail.com","country":"Holland","id":1476305393281},
//       {"firstname":"Cicero","lastname":"Junior","email":"cic@mail.com","country":"Rome","id":1476305393284}
//     ];

//     beforeEach(module('app'));

//     beforeEach(mocks.inject(function ( _$rootScope_, _$controller_, _$state_, _dataFactory_) {

//       $scope =  _$rootScope_.$new();
//       $state = _$state_;
//       dataFactory = _dataFactory_;
      
//       dependency = {
//         $scope: $scope, 
//         $state: $state, 
//         dataFactory: dataFactory
//       };
      
//       spyOn( dataFactory, 'getContacts').and.returnValue( testData );
   
//       ctrl = _$controller_( fulllistCtrl, dependency );

//     }));


//     it('Controller should not be null', inject(function() {

//       expect( ctrl ).toBeDefined();          
//       expect( ctrl ).not.toBeNull();   

//     }));

//     it('List property should contain test data from dataFactory', inject(function() {

//       expect( dataFactory.getContacts ).toHaveBeenCalledTimes(1);
//       expect( $scope.list.length ).toEqual( testData.length );

//     }));


//     it('editContact method should should change test id to ' +  testData[0].id , inject(function() {
      
//       $scope.editContact( testData[0].id );
//       $scope.$digest();

//       expect( $state.params ).toBeDefined();
//       expect( $state.params.itemId ).toBeDefined();
//       expect( $state.current.name ).toEqual( 'edit' );
//       expect( $state.params.itemId ).toEqual( testData[0].id+'' );

//     }));

//     it('addNewContact method should change current state name to add', inject(function() {
      
      
//       $scope.addNewContact( );
//       $scope.$digest();
      
//       expect( $state.current.name ).toBeDefined();
//       expect( $state.current.name ).toEqual( 'add' );


//     }));    

//   });

// });
