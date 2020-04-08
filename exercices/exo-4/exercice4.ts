class Person{
  firstname: string;
  lastname: string;
  dateOfBirth: string="";

  constructor(firstname: string, lastname: string, dateOfBirth?: string){
    this.firstname= firstname;
    this.lastname= lastname;
    if (dateOfBirth){
    this.dateOfBirth= dateOfBirth;
    }
  }

  fullName(){
    console.log("je m'appelle " + this.firstname + " " + this.lastname);
  }
}

let marie = new Person("marie","petite");
marie.fullName();
