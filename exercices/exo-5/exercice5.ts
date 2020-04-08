class Places{
  artist: string;
  price: number = -1;
  date: string;
  location: string;
  name: string;

  constructor(artist: string, location: string, name: string, date: string,  price?: number){
    this.artist = artist;
    this.location = location;
    this.name = name;
    this.date = date;

    if(price){
      this.price = price;
    }
  }

  htmlDetails(): string{
    let htmlContent: string = `
    <p>Ville : ${ this.location }</p>
    <p>Artiste : ${ this.artist }</p>
    <p>Date : ${ this.date }</p>
    <p>Nom : ${ this.name }</p>`;
    if (this.price != -1){
      htmlContent = htmlContent + `Prix de place : ${this.price}`;
    }
    return htmlContent;
  }
}

let Places1: Places =  new Places("pierre", "angele", "21.03", "marseille" );
let Places2: Places =  new Places("pierre", "angele", "21.03", "marseille", 12 );
console.log(Places1.htmlDetails());
console.log(Places2.htmlDetails());
