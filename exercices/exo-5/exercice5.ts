class Places{
  artist: string;
  placeNumber: string ="";
  date: string;
  location: string;
  name: string;

  constructor(artist: string, location: string, name: string, date: string,  placeNumber ?: string){
    this.artist = artist;
    this.location = location;
    this.name = name;
    this.date = date;

    if(placeNumber){
      this.placeNumber = placeNumber;
    }
  }

  htmlDetails(): number{
    let htmlContent = `
    <p>Ville : ${ this.location }</p>
    <p>Artiste : ${ this.artist }</p>
    <p>Date : ${ this.date }</p>
    <p>Nom : ${ this.name }</p>``;
    if (this.placeNumber != ""){
      htmlContent = htmlContent + "Nom du titulaire : ${ this.placeNumber }";
    };
    return htmlContent;
  }
}

let Places1: Places =  new Places("pierre", "angele", "21.03", "marseille" );
let Places2: Places =  new Places("pierre", "angele", "21.03", "marseille", "123E" );
console.log(Places1.htmlDetails());
console.log(Places2.htmlDetails());
