function sayHello(person: string): string {
  return "Hello, " + person;
}
var user = "Super Student";
document.getElementById("para").innerHTML = sayHello(user);

// Interface Person Options 
interface PersonOptions {
  firstName: string;
  lastName: string;
  age?: number;
  phoneNumber?: number;
  state?: string;
  zipcode?: number;
  occupation?: string;
  hourlyWage?: number;
  weeklyHours?: number;
  certifications?: string[];
}

// Creating the Person Class
class Person {
  //Declaring my variables
  private firstname: string;
  private lastname: string;
  private age: number;
  private phoneNumber: string;
  private state: string;
  private zipcode: number;
  private occupation: string;
  private hourlyWage: number;
  private weeklyHours: number;
  certifications: string [] = [];

  // Building my Constructors
  constructor(
    firstname: string,
    lastname: string,
    age: number,
    phoneNumber: string,
    state: string,
    zipcode: number,
    occupation: string,
    hourlyWage: number,
    weeklyHours?: number
  ) {
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
    } else {
      this.weeklyHours = 40;
    }
  }

  // Writting my Getters and Setters
  getFistname(): string {
    return this.firstname;
  }

  setFirstname(firstname: string): void {
    this.firstname = firstname;
  }

  getLastname(): string {
    return this.lastname;
  }

  setLastname(lastname: string): void {
    this.lastname = lastname;
  }

  getAge(): number {
    return this.age;
  }

  setAge(age: number): void {
    this.age = age;
  }

  getPhoneNumber(): string {
    return this.phoneNumber;
  }

  setPhoneNumber(phoneNumber: string): void {
    this.phoneNumber = phoneNumber;
  }

  getState(): string {
    return this.state;
  }

  setState(state: string): void {
    this.state = state;
  }

  getZipcode(): number {
    return this.zipcode;
  }

  setZipcode(zipcode: number): void {
    this.zipcode = zipcode;
  }

  getOccupation(): string {
    return this.occupation;
  }

  setOccupation(occupation: string): void {
    this.occupation = occupation;
  }

  getHourly(): number {
    return this.hourlyWage;
  }

  setHourly(hourlyWage: number): void {
    this.hourlyWage = hourlyWage;
  }

  getWeekly(): number {
    return this.weeklyHours;
  }

  setWeekly(weeklyHours: number): void {
    this.weeklyHours = weeklyHours;
  }

  // My Methods
  readBasicInfo(): string {
    return (
      "First Name: " +
      this.firstname +
      " " +
      "Last Name: " +
      this.lastname +
      " " +
      "Age: " +
      this.age
    );
  }

  readOtherInfo(): string {
    return "Phone Number: " + this.phoneNumber + "  " + "State: " + this.state;
  }

  // Calculate Weekly Wage
  viewWeeklyWage(): number {
    return this.weeklyHours * this.hourlyWage;
  }
}

let persOne = new Person(
  "Nick",
  "Tientcheu",
  40,
  "980-636-9644",
  "North Carolina",
  28012,
  "Developer",
  25,
  37
);
let persTwo = new Person(
  "Enah",
  "Pelsi",
  55,
  "980-636-9644",
  "South Carolina",
  28262,
  "CyberSecurity",
  35
);

// Function for adding an unknown number of Certifications
function addCerts(pers: Person,  ...certs:string[]){ 
  for(let i =0; i<certs.length; i++){
      pers.certifications.push(certs[i]);
  }
}

// Adding the certifications to Person One
addCerts(persOne, "MBA", "CSM", "MCSD");

// Getting the certifications
function getCerts(pple:Person): string{
  return pple.certifications.toString();
}

//function createPerson(option: PersonOptions): {firstName: string, lastName: string, age: number, occupation: string}{
  function createPerson(option: PersonOptions): {firstName: string, lastName: string, age: number, occupation: string}{
    let newPerson = {firstName: "Graig", lastName: "David", age: 27, occupation: "Rapper"};
    if(option.firstName){
        newPerson.firstName = option.firstName;
    }
    if(option.lastName){
        newPerson.lastName = option.lastName;
    }
    if(option.age){
        newPerson.age = option.age;
    }
    if (option.occupation){
        newPerson.occupation = option.occupation;
    }
    return newPerson;
}

let userInterface = createPerson({firstName: "Brian", lastName: "Davis", age: 42, occupation: "Developer"});

console.log(persOne.readBasicInfo());
console.log(persTwo.readOtherInfo());

document.getElementById("info-one-basic").innerHTML = persOne.readBasicInfo();
document.getElementById("info-one-other").innerHTML = persOne.readOtherInfo();
document.getElementById("info-one-hw1").innerHTML = " $" + persOne.viewWeeklyWage().toString() + " For Weekly Income";

// Displaying Certifications on my page
document.getElementById("certificates").innerHTML = "Certificates : " + getCerts(persOne);

document.getElementById("interface-display").innerHTML = "<br>"+userInterface.lastName+" "+userInterface.occupation;

document.getElementById("info-two-basic").innerHTML = persTwo.readBasicInfo();
document.getElementById("info-two-other").innerHTML = persTwo.readOtherInfo();
document.getElementById("info-two-hw2").innerHTML = " $" + persTwo.viewWeeklyWage().toString() + " For Weekly Income";
