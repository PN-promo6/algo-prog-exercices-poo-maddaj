// Créez une classe pour représenter un meuble design. Cette classe doit contenir trois
// attributs :
// - l’éditeur du meuble
// - le nom de la personne qui a designé le meuble
// - l’année de conception du meuble
// Dans un algorithme, créez une instance de cette classe. Cette instance est un objet
// représentant la chaise Wassily, crée par Marcel Breuer en 1925, et dont les droits d’édition
// appartiennent actuellement à l’entreprise Knoll.

class Furniture {
  editor: string;
  designer: string;
  constructionYear: number;

  constructor(editor: string, designer: string, constructionYear: number) {
    this.editor = editor;
    this.designer = designer;
    this.constructionYear = constructionYear;
  }
}

let wassilyChair: Furniture = new Furniture("Marcel Breuer", "entreprise Knoll", 1925);
wassilyChair.constructionYear = 1926;
console.log(wassilyChair.designer, wassilyChair.editor, wassilyChair.constructionYear);
