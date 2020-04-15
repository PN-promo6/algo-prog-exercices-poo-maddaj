// Créez une classe représentant une personne avec un constructeur utilisant :
// - un paramètre pour le nom
// - un paramètre pour le prénom
// - un paramètre optionnel pour la date de naissance
// - une méthode pour afficher le nom complet de la personne
// Dans un algorithme, créez des instances de cette classe : une avec la date de naissance, une
// sans la date de naissance. Appelez la méthode affichant le nom complet de la personne pour
// chaque instance.

class Student {
  name: string;
  age: number;
  city: string;

  constructor(name: string, age: number, city: string) {
    this.name = name;
    this.age = age;
    this.city = city;
  }

  displayInfo() {
    console.log("Je m'appelle " + this.name + " j'ai " + this.age + " et ma ville est " + this.city)
  }
}

let infoStudent = new Student("jack", 21, "marseille");
infoStudent.displayInfo();
