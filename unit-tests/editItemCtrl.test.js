define([ 'angularMocks', 'editItemCtrl'], function(mocks, editItemCtrl) {

  describe('Edit Item Controller', function() {

    var ctrl,
        $scope, 
        $stateParams,
        dataFactory,
        dependency,
        testData = {"firstname":"Adam","lastname":"Smith","email":"adam@mail.com","country":"Scotland","id":1476305393289};

    beforeEach( module('app') );

    beforeEach( mocks.inject ( function ( _$rootScope_, _$controller_, _$stateParams_, _dataFactory_) {

      $scope = _$rootScope_.$new();
      $stateParams = _$stateParams_;
      dataFactory = _dataFactory_;
      
      dependency = { 
        $scope, 
        $stateParams, 
        dataFactory, 
      };

      spyOn( dataFactory, 'getContact').and.returnValue( testData );
   
      ctrl = _$controller_( editItemCtrl, dependency );

    }));


    it('Controller should not be null', inject(function() {

      expect( ctrl ).toBeDefined();          
      expect( ctrl ).not.toBeNull();   

    }));

    it('Contact property should contain test data from dataFactory', inject(function() {

      expect( dataFactory.getContact ).toHaveBeenCalledTimes( 1 );
      expect( $scope.contact.id ).toEqual( testData.id );

    }));

  });

});
