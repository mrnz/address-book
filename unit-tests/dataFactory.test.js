define([ 'angularMocks'], function(mocks) {

  describe('Data factory test', function() {

    var dataFactory, localStorageService;

    beforeEach( module('app') );

	  beforeEach(inject(function( _dataFactory_, _localStorageService_) {
	    dataFactory = _dataFactory_;
	    localStorageService = _localStorageService_;
	    spyOn(localStorageService,'keys').and.callThrough();
	    spyOn(localStorageService,'get').and.callThrough();
	    spyOn(localStorageService,'set').and.callThrough();
	    spyOn(localStorageService,'remove').and.callThrough();

	  }));



    it('Data factory should not be null', inject(function() {

      expect( dataFactory ).toBeDefined();          
      expect( dataFactory ).not.toBeNull();   

    }));
    
    it('Data factory method getContacts should return empty array', inject(function() {

      dataFactory.getContacts();

      expect(localStorageService.keys).toHaveBeenCalled();

    }));

    it('Data factory method getContact should return empty array', inject(function() {

     	dataFactory.getContact();
      expect(localStorageService.get).toHaveBeenCalled();

    }));

    it('Data factory method setContact should return true', inject(function() {

     	var result = dataFactory.setContact({'name':1});
      expect( localStorageService.set ).toHaveBeenCalled();
      expect( result ).toEqual( true );

    }));    

		it('Data factory method updateContact should return empty array', inject(function() {

     	var result = dataFactory.setContact({'name':1, id:123});
      expect( localStorageService.set ).toHaveBeenCalled();
      expect( result ).toEqual( true );

    })); 

		it('Data factory method deleteContact should return empty array', inject(function() {

     	var result = dataFactory.deleteContact(123);
      expect( localStorageService.remove ).toHaveBeenCalled();
      expect( result ).toEqual( true );

    }));     
  });

});
