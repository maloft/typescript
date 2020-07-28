"use strict";
console.log("Meteo App");
var Meteo = /** @class */ (function () {
    //ville:string //Non visible sur meteo.js 
    function Meteo(_ville, _temperature) {
        this._ville = _ville;
        this._temperature = _temperature;
    }
    Meteo.prototype.toString = function () {
        return this._ville + " - " + this._temperature + "\u00B0C";
    };
    return Meteo;
}());
//let nantesCeMatin = new Meteo(); //Erreur car on a définit un constructeur avec arguments et ici on a utilisé le constructeur par défaut
var nantesCeMatin = new Meteo('Nantes', 12);
console.log(nantesCeMatin.toString());
