<?php

// EN ATTENTE DE FINITION

class Client
{
    public $siret;
    public $accountNumber;

    function __construct($siret, $accountNumber)
    {
        $this->siret = $siret;
        $this->accountNumber = $accountNumber;
    }
}

class ClientProfessionnel extends Client
{
    public $name;

    function __construct($name, $siret, $accountNumber)
    {
        super($siret, $accountNumber); // appel à l'attribut de la classe mere
        $this->name = $name;
    }
}

$client01 = new Client(123456789, "1A");
echo $client01->siret, $client01->accountNumber;

$clientPro = new ClientProfessionnel("jack", 123456789, "1A");
echo $clientPro->name, $clientPro->siret, $clientPro->accountNumber;
