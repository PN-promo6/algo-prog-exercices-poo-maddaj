// Créez une classe ClientProfessionnel qui étend la classe Client et qui a comme attribut un numéro SIRET.
// Créez une instance pour chaque classe et affichez en console l’ensemble des attributs de ces instances.

class Client {
    siret: number;
    accountNumber: string;

    constructor(siret: number, accountNumber: string) {
        this.siret = siret;
        this.accountNumber = accountNumber;
    }
}

class ClientProfessionnel extends Client {
    name: string;

    constructor(name: string, siret: number, accountNumber: string) {
        super(siret, accountNumber); // appel à l'attribut de la classe mere
        this.name = name;
    }
}

let client01: Client = new Client(123456789, "1A");
console.log(client01.siret, client01.accountNumber);

let clientPro: ClientProfessionnel = new ClientProfessionnel("jack", 123456789, "1A");
console.log(clientPro.name, clientPro.siret, clientPro.accountNumber);