// Créez une classe représentant une place de concert. Le constructeur de cette classe demande
// cinq paramètre dont un optionnel.
// La classe possède une méthode retournant en chaîne de caractères les détails de la place de
// concert sous forme de HTML.
// Exemple basique de chaîne de caractères retournée :
// `<p>Numéro de place : ${ this.username }</p>
// <p>Heure du concert : ${ this.hours }</p>`

// Dans un algorithme, créez deux instances de cette classe (la 1ère avec un paramètre
// optionnel, l’autre sans le paramètre optionnel), et afficher les détails de chaque objet crée.

class Places {
  artist: string;
  price: number = -1;
  date: string;
  location: string;
  name: string;

  constructor(artist: string, location: string, name: string, date: string, price?: number) {
    this.artist = artist;
    this.location = location;
    this.name = name;
    this.date = date;

    if (price) {
      this.price = price;
    }
  }

  htmlDetails(): string {
    let htmlContent: string = `
    <p>Ville : ${ this.location}</p>
    <p>Artiste : ${ this.artist}</p>
    <p>Date : ${ this.date}</p>
    <p>Nom : ${ this.name}</p>`;
    if (this.price != -1) {
      htmlContent = htmlContent + `Prix de place : ${this.price}`;
    }
    return htmlContent;
  }
}

let Places1: Places = new Places("pierre", "angele", "21.03", "marseille");
let Places2: Places = new Places("pierre", "angele", "21.03", "marseille", 12);
console.log(Places1.htmlDetails());
console.log(Places2.htmlDetails());
