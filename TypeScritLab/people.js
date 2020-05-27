function sayHello(person) {
    return "Hello, " + person;
}
var user = "Super Student";
document.getElementById("para").innerHTML = sayHello(user);
// Creating the Person Class
var Person = /** @class */ (function () {
    // Building my Constructors
    function Person(firstname, lastname, age, phoneNumber, state, zipcode, occupation, hourlyWage, weeklyHours) {
        this.certifications = [];
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.phoneNumber = phoneNumber;
        this.state = state;
        this.zipcode = zipcode;
        this.occupation = occupation;
        this.hourlyWage = hourlyWage;
        if (weeklyHours) {
            this.weeklyHours = weeklyHours;
        }
        else {
            this.weeklyHours = 40;
        }
    }
    // Writting my Getters and Setters
    Person.prototype.getFistname = function () {
        return this.firstname;
    };
    Person.prototype.setFirstname = function (firstname) {
        this.firstname = firstname;
    };
    Person.prototype.getLastname = function () {
        return this.lastname;
    };
    Person.prototype.setLastname = function (lastname) {
        this.lastname = lastname;
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    Person.prototype.setAge = function (age) {
        this.age = age;
    };
    Person.prototype.getPhoneNumber = function () {
        return this.phoneNumber;
    };
    Person.prototype.setPhoneNumber = function (phoneNumber) {
        this.phoneNumber = phoneNumber;
    };
    Person.prototype.getState = function () {
        return this.state;
    };
    Person.prototype.setState = function (state) {
        this.state = state;
    };
    Person.prototype.getZipcode = function () {
        return this.zipcode;
    };
    Person.prototype.setZipcode = function (zipcode) {
        this.zipcode = zipcode;
    };
    Person.prototype.getOccupation = function () {
        return this.occupation;
    };
    Person.prototype.setOccupation = function (occupation) {
        this.occupation = occupation;
    };
    Person.prototype.getHourly = function () {
        return this.hourlyWage;
    };
    Person.prototype.setHourly = function (hourlyWage) {
        this.hourlyWage = hourlyWage;
    };
    Person.prototype.getWeekly = function () {
        return this.weeklyHours;
    };
    Person.prototype.setWeekly = function (weeklyHours) {
        this.weeklyHours = weeklyHours;
    };
    // My Methods
    Person.prototype.readBasicInfo = function () {
        return ("First Name: " +
            this.firstname +
            " " +
            "Last Name: " +
            this.lastname +
            " " +
            "Age: " +
            this.age);
    };
    Person.prototype.readOtherInfo = function () {
        return "Phone Number: " + this.phoneNumber + "  " + "State: " + this.state;
    };
    // Calculate Weekly Wage
    Person.prototype.viewWeeklyWage = function () {
        return this.weeklyHours * this.hourlyWage;
    };
    return Person;
}());
var persOne = new Person("Nick", "Tientcheu", 40, "980-636-9644", "North Carolina", 28012, "Developer", 25, 37);
var persTwo = new Person("Enah", "Pelsi", 55, "980-636-9644", "South Carolina", 28262, "CyberSecurity", 35);
// Function for adding an unknown number of Certifications
function addCerts(pers) {
    var certs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        certs[_i - 1] = arguments[_i];
    }
    for (var i = 0; i < certs.length; i++) {
        pers.certifications.push(certs[i]);
    }
}
// Adding the certifications to Person One
addCerts(persOne, "MBA", "CSM", "MCSD");
// Getting the certifications
function getCerts(pple) {
    return pple.certifications.toString();
}
//function createPerson(option: PersonOptions): {firstName: string, lastName: string, age: number, occupation: string}{
function createPerson(option) {
    var newPerson = { firstName: "Graig", lastName: "David", age: 27, occupation: "Rapper" };
    if (option.firstName) {
        newPerson.firstName = option.firstName;
    }
    if (option.lastName) {
        newPerson.lastName = option.lastName;
    }
    if (option.age) {
        newPerson.age = option.age;
    }
    if (option.occupation) {
        newPerson.occupation = option.occupation;
    }
    return newPerson;
}
var userInterface = createPerson({ firstName: "Brian", lastName: "Davis", age: 42, occupation: "Developer" });
console.log(persOne.readBasicInfo());
console.log(persTwo.readOtherInfo());
document.getElementById("info-one-basic").innerHTML = persOne.readBasicInfo();
document.getElementById("info-one-other").innerHTML = persOne.readOtherInfo();
document.getElementById("info-one-hw1").innerHTML = " $" + persOne.viewWeeklyWage().toString() + " For Weekly Income";
// Displaying Certifications on my page
document.getElementById("certificates").innerHTML = "Certificates : " + getCerts(persOne);
document.getElementById("interface-display").innerHTML = "<br>" + userInterface.lastName + " " + userInterface.occupation;
document.getElementById("info-two-basic").innerHTML = persTwo.readBasicInfo();
document.getElementById("info-two-other").innerHTML = persTwo.readOtherInfo();
document.getElementById("info-two-hw2").innerHTML = " $" + persTwo.viewWeeklyWage().toString() + " For Weekly Income";
