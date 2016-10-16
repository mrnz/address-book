Feature: Test
	Test whole app

	Scenario: Start server and open the page
		Given Start server
		Then Open app
		Then Check view name 
	
	Scenario Outline: Add 3 new contacts
		Given Page name "listview" is present
		Then Click button with id "addcontact"
		And Page name "addContactView" is present
		Then Element with id "submit" should be "disabled"
		And Put "<firstname>" to input with id "firstname"
		And Put "<lastname>" to input with id "lastname"
		And Put "<email>" to input with id "email"
		And Select first country form options 
		Then Element with id "submit" should be "enabled"
		And Click button with id "submit"
		Then Page name "listview" is present
		And Contact with name "<firstname>" last name "<lastname>" email "<email>" should be visible

		Examples:
	    | firstname | lastname   | email        |
	    | Przemek   | Marciniak  | mrnz@wp.pl   |
	    | John      | Hilton     | gogo@go.go   |
	    | Emil      | Cioran     | ciori@uk.kg  |

	Scenario: Delete one contact from the list
		Given Page name "listview" is present
		And List contains "3" contacts
		Then Click first contact on the list
		And Page name "editContactView" is present
		Then Click button with id "delete"
		Then Page name "listview" is present
		And List contains "2" contacts

	Scenario: Edit contact
		Given Page name "listview" is present
		And List contains "2" contacts
		Then Click first contact on the list
		And Page name "editContactView" is present
		And Put "Paul" to input with id "firstname"
		Then Element with id "submit" should be "enabled"
		And Click button with id "submit"
		Then Page name "listview" is present
		And Contact with name "Paul" last name "Hilton" email "gogo@go.go" should be visible
		And List contains "2" contacts		