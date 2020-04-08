<?php
class Furniture{
  public $editor;
  public $designer;
  public $constructionYear;

  function __construct($editor, $designer, $constructionYear){
    $this->editor = $editor;
    $this->designer = $designer;
    $this->constructionYear = $constructionYear;
  }
}

$wassilyChair = new Furniture ("entreprise Knoll", "Marcel Breuer", 1925);
$wassilyChair->constructionYear = 1926;

echo($wassilyChair->editor.' '. $wassilyChair->designer.' '. $wassilyChair->constructionYear);
 ?>
