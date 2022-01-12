/*
here is a basic object that represents a person. A person is a Type. 
We are creating this Type here. It only contains properties
it is using a pattern refered to as a DTO (data transfer object)
DTO's are like database records, typically they only have the properties (column names)
and sometimes other code that is not specific to a page or other scripts (has no other dependencies). 
This is so they can be shared among other scripts without code that
references a specific page or another script. 
*/

/*
this is a function that will create and return a person.
using the syntax 
var somePerson = new Person();
*/
function Person(){
    var result = {
        firstName:'',
        lastName:''
    };
    return result;
}