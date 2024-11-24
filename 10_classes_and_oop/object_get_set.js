const User={
    _email:'shan@sy.ai',
    _pass:'abc',
    // _ is used  before private variables (naming convention)
    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email=value
    }
}
const tea=Object.create(User)
console.log(tea.email)

// By using _email as an internal/private property, you are hiding the actual data and controlling access to it using getter and setter methods. The user interacts with the email getter and setter, but the actual value is stored in _email.

// This allows you to:

// Encapsulate the logic, controlling how the data is accessed or modified.
// Add additional logic when retrieving or updating the value (like converting the email to uppercase in the getter).
// Prevent direct manipulation of the internal state.

// If you directly used email as the property (without the _), then there would be no clear separation between the stored value and the logic used to retrieve or modify it. Using _email makes it explicit that this field should not be accessed directly outside the object—it should only be manipulated through the getter and setter.