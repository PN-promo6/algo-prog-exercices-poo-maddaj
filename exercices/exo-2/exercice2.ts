class Furniture{
  editor: string;
  designer: string;
  constructionYear: number;

  constructor(editor: string, designer: string, constructionYear: number){
    this.editor = editor;
    this.designer = designer;
    this.constructionYear = constructionYear;
  }
}

let wassilyChair: Furniture = new Furniture("Marcel Breuer", "entreprise Knoll", 1925);
wassilyChair.constructionYear = 1926;
console.log(wassilyChair.designer, wassilyChair.editor, wassilyChair.constructionYear);
