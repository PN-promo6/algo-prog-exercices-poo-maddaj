// Créez une classe représentant un client d’une banque avec :
// - un constructeur
// - un attribut privé pour le nom
// - un attribut privé pour le numero de compte en banque
// - une méthode pour connaître le numero de compte en banque
// Dans un algorithme, créez une instance de cette classe et afficher le numéro de compte en
// banque d’un client.

class Person {
  firstname: string;
  lastname: string;
  dateOfBirth: string = "";

  constructor(firstname: string, lastname: string, dateOfBirth?: string) {
    this.firstname = firstname;
    this.lastname = lastname;
    if (dateOfBirth) {
      this.dateOfBirth = dateOfBirth;
    }
  }

  fullName() {
    console.log("je m'appelle " + this.firstname + " " + this.lastname);
  }
}

let marie = new Person("marie", "petite");
marie.fullName();
