<?php
 class Student
{
    // Properties
    public $name;
    public $age;

    // Methods
    public function __construct($name, $age)
    {
        $this->name = $name;
        $this->age = $age;
    }

    public function displayInformation()
    {
        echo("Je m'appelle " . $this->name . " et j'ai " . $this->age . " ans.");
    }
}

$seif = new Student("Seif", 27);

$seif->displayInformation();
?>
