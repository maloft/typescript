console.log("Meteo App")

class Meteo {

    //ville:string //Non visible sur meteo.js 

    constructor(private _ville: string, private _temperature: number) { }

    toString(): string {
        return `${this._ville} - ${this._temperature}°C`
    }
}

//let nantesCeMatin = new Meteo(); //Erreur car on a définit un constructeur avec arguments et ici on a utilisé le constructeur par défaut

let nantesCeMatin = new Meteo('Nantes', 12);
console.log(nantesCeMatin.toString());