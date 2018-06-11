var chai = require('chai');
var connect = require('connect');
var serveStatic = require('serve-static');
var expect = chai.expect;
var baseURL = 'http://localhost:8098/';

module.exports = function () {
  
  /* INITIAL STEPS START */	
	this.Given(/^Start server$/, function (next) {
    
    connect().use(serveStatic("./")).listen(8098, function(){
      console.log('server has started');
      next();
    }); 
    
  });

  this.Then(/^Open app$/,{timeout: 20000},  function (next) {
   
    browser.get(baseURL+'www/build/').then(function () {
      
      browser.waitForAngular();

      browser.getCurrentUrl().then(function(currentUrl){
     		expect( currentUrl ).to.be.equal(baseURL+'www/build/#!/fulllist');
     		next();
      });

    });

  });

  this.Then(/^Check view name$/, function (next) {
  	element( by.id('listview') ).isPresent().then(function(result) {
      expect( result ).to.equal(true);
      next();
    });
  });    

};