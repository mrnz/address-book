define(['angularMocks', 'addItemCtrl' ], function(mocks, addItemCtrl ) {

  describe('Add Item Controller', function() {

    var scope, 
        ctrl,
        dependency,
        testData = {};

    beforeEach(module('app'));

    beforeEach(mocks.inject(function ( _$rootScope_, _$controller_) {

      scope = _$rootScope_.$new();

      dependency = { 
        $scope: scope
      };

      ctrl = _$controller_( addItemCtrl, dependency );

    }));


    it('Controller should not be null', inject(function() {

      expect( ctrl ).toBeDefined();          
      expect( ctrl ).not.toBeNull();   

    }));

  });

});
