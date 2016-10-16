define([],function () {

	function factory(localStorageService) {

		var _generateID = () => new Date().getTime(); 

		return {
			
			getContacts: () => localStorageService.keys().map( key => localStorageService.get( key ) ),

			getContact: ( id ) => localStorageService.get( id ),

			setContact: ( item ) => {
				item.id = _generateID();
				return localStorageService.set( item.id, item );
			},

			updateContact: ( item ) => localStorageService.set( item.id, item ),

			deleteContact: ( id ) => {
				localStorageService.remove( id )
				return !localStorageService.get( id );
			},

		}
	};

	return ['localStorageService', factory];

})