
class Sejour {

    constructor(private _nom: string, private _prix: number) {
        this._nom = _nom;
        this._prix = _prix;
    }

    get nom() {
        return this._nom;
    }

    get prix() {
        return this._prix;
    }

    toString(): string {
        return `${this._nom} - ${this._prix}`
    }

}

class SejourService {
    private _sejours: Sejour[] = [];

    constructor() {
        this._sejours.push(new Sejour("rabat", 1));
        this._sejours.push(new Sejour("casablanca", 3));
        this._sejours.push(new Sejour("agadir", 6));
    }

    findByName(nom : string) : Sejour | void {

        for(let currentSejour of this._sejours) {
            if (currentSejour.nom === nom) {
                return currentSejour;
            }
        }

    }
}



let service = new SejourService();

console.log(service.findByName("casablanca"));

