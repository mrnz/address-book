var chai = require('chai');
var expect = chai.expect;


module.exports = function () {
  
  /* Check if page contains particular ID  */
  this.Given(/^Page name "([^"]*)" is present$/, function (viewName, next) {
    element( by.id(viewName) ).isPresent().then(function(result) {
      expect( result ).to.equal(true);
      next();
    });
    next();
  });

  /* Click button with particular ID */
  this.Then(/^Click button with id "([^"]*)"$/, function (buttonID, next) {
    browser.wait(function() {
      
      return browser.isElementPresent( element( by.id(buttonID) ) );

    }).then(function() {
      
      element(by.id(buttonID)).click().then(function() {
        next();
      });

    });

  });

  /* Send text to input */
  this.Then(/^Put "([^"]*)" to input with id "([^"]*)"$/, function (text, ID, next) {
    browser.wait(function() {
      
      return browser.isElementPresent( element( by.id(ID) ) );

    }).then(function() {
      element( by.id(ID) ).clear();
      element( by.id(ID) ).sendKeys(text).then(function() {
        next(); 
      });

    });
  });

  /* Select country form select box */
  this.Then(/^Select first country form options$/, function (next) {
    browser.wait(function() {
      return browser.isElementPresent( element( by.tagName('select') ) );
    }).then(function() {  
        element.all(by.tagName('option')).then(function(items) {
          /* Element with index 0 is empty*/
          items[1].click();
          next();  
        });
    });
  });

  /* Check if element with particular ID is disabled / enabled */
  this.Then(/^Element with id "([^"]*)" should be "([^"]*)"$/, function (elementID, disableState, next) {
    
    var disableState = disableState === 'disabled' ? "true" : null;

    var elem = element( by.id(elementID) );
    var result = elem.getAttribute('disabled').then(function(res) {
      expect( res ).to.equal( disableState );
      next();
    });

  });

  /* Check if particular contact is on the list */
  this.Then(/^Contact with name "([^"]*)" last name "([^"]*)" email "([^"]*)" should be visible$/, function (firstname, lastname, email, next) {

    element.all(by.repeater('item in list')).then(function(contacts) {

      contacts[0].getText().then(function(txt) {
        expect( txt.indexOf( firstname ) ).to.not.equal(-1);
        expect( txt.indexOf( lastname ) ).to.not.equal(-1);
        expect( txt.indexOf( email ) ).to.not.equal(-1);
        next();
      });

    });

  });

  /* Check if list contains particular number of items */
  this.Given(/^List contains "([^"]*)" contacts$/, function (itemsNumber, next) {
    element.all(by.repeater('item in list')).then(function(contacts) {
      expect( contacts.length ).to.equal( parseInt(itemsNumber) );
      next();
    });
  
  });

  /* Click first contact on the list */
  this.Then(/^Click first contact on the list$/, function (next) {
    
    element.all(by.repeater('item in list')).then(function(contacts) {
      contacts[0].click();
      next();
    })
    
  });


};