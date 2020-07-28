var Sejour = /** @class */ (function () {
    function Sejour(_nom, _prix) {
        this._nom = _nom;
        this._prix = _prix;
        this._nom = _nom;
        this._prix = _prix;
    }
    Object.defineProperty(Sejour.prototype, "nom", {
        get: function () {
            return this._nom;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Sejour.prototype, "prix", {
        get: function () {
            return this._prix;
        },
        enumerable: false,
        configurable: true
    });
    Sejour.prototype.toString = function () {
        return this._nom + " - " + this._prix;
    };
    return Sejour;
}());
var SejourService = /** @class */ (function () {
    function SejourService() {
        this._sejours = [];
        this._sejours.push(new Sejour("rabat", 1));
        this._sejours.push(new Sejour("casablanca", 3));
        this._sejours.push(new Sejour("agadir", 6));
    }
    SejourService.prototype.findByName = function (nom) {
        for (var _i = 0, _a = this._sejours; _i < _a.length; _i++) {
            var currentSejour = _a[_i];
            if (currentSejour.nom === nom) {
                return currentSejour;
            }
        }
    };
    return SejourService;
}());
var service = new SejourService();
console.log(service.findByName("casablanca"));
