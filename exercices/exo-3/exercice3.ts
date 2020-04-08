class Student{
  name: string;
  age: number;
  city: string;

  constructor(name: string, age: number, city:string){
    this.name = name;
    this.age = age;
    this.city = city;
  }

  displayInfo(){
    console.log("Je m'appelle " + this.name + " j'ai " + this.age + " et ma ville est " + this.city)
  }
}

let infoStudent = new Student("jack", 21, "marseille");
infoStudent.displayInfo();
