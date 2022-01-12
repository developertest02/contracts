/*
This script is specific to our person-edit.html page.
It will use the person type from person.js
We have to make sure person.js is referenced in our page before the reference
to this script, because this script has a dependency on person.js
*/

/*when we navigate to the page, we create a new person for our form
and assign it to a variable. 
*/

//from our person.js script, create a person object and assign it to a variable
var person = new Person();

/* because we are reading input, we need to reference our fields and assign them to variables
using the javascript DOM (document object model)
see: https://www.w3schools.com/js/js_htmldom_elements.asp
*/
var firstNameElement = document.getElementById("firstName");
var lastNameElement = document.getElementById("lastName");

/*when the user click the save button, we want to do something, so we write a method 
to handle the onclick event of the button (onclick is a DOM event)*/
function onSaveClick(){
    //console.log statements will be output in browser developer tools console tab
    console.log('Save Clicked');
    //get the values of the input fields using DOM
    var firstName = firstNameElement.value;
    var lastName = lastNameElement.value;
    console.log('Saving... ' + firstName + ' ' + lastName);
    //we assign these values to our person object
    person.firstName = firstName;
    person.lastName = lastName;
    console.log(person);

    /*now we have a person object with the form data, we can do stuff with it
    we will pass it to the saveData function where we will do something with it
    notice how we are separating logic... one function handles the click event
    another handles saving the data. This is refered to as the single responsibility principal.
    Meaning in this context, each method has a single responsibility. 
    Just an FYI for now, not important when starting, just explains why we have written another method 
    for saving.
    */
    saveData();

}
/*saves our person object to browser storage
see: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage */
function saveData()
{
    //declare a variable for the browser storage
    var myStorage = window.localStorage;
    //assign our person object, using key, value properties
    myStorage.setItem('currentPersonFirstName', person.firstName);
    myStorage.setItem('currentPersonLastName', person.lastName);
    console.log('Person saved to local storage');
}

function showCurrentPerson()
{
    //first we get our current person from local storage

    //declare a variable for the browser storage
    var myStorage = window.localStorage;

    //next we get values
    var firstName = myStorage.getItem('currentPersonFirstName');
    var lastName = myStorage.getItem('currentPersonLastName');

    //using the DOM, we get the elements we want to change
    //         ex.     <span>Saved Person First Name: </span><span id="currentPersonFirstName"></span>
    var firstNameElement = document.getElementById("currentPersonFirstName");
    var lastNameElement = document.getElementById("currentPersonLastName");

    //here we assign the inner text of our elements to our stored values
    //this will change the DOM and reflect on the page
    firstNameElement.innerText = firstName;
    lastNameElement.innerText = lastName;
}
