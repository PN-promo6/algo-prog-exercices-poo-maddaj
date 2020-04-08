class Book{
  title: string;
  price: number;

  constructor(title: string,  price: number){
    this.title = title;
    this.price = price;
  }
}

let livres: Book = new Book("jack", 10);
console.log(livres.title, livres.price);
