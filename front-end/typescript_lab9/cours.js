"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cours = void 0;
var Cours = /** @class */ (function () {
    function Cours(id, title, nbrJours, etudiants) {
        if (etudiants === void 0) { etudiants = []; }
        this._id = id;
        this._title = title;
        this._nbrJoures = nbrJours;
        this._etudiants = etudiants;
    }
    Cours.prototype.calculerMoyenneCours = function () {
        return this._etudiants
            .map(function (etud) { return etud.calculerMoyenne(); })
            .reduce(function (prevEtud, currEtud) { return prevEtud + currEtud; }) / this._etudiants.length;
    };
    Cours.prototype.getIndexMax = function () {
        var maxIndex = 0;
        var max = 0;
        this._etudiants.forEach(function (etud, index) {
            if (etud.getMax() > max)
                maxIndex = index;
        });
        return maxIndex;
    };
    Cours.prototype.getNomMax = function () {
        var nomMax = this._etudiants.reduce(function (presEtud, currEtud) {
            // if (etud.getMax() > max) nomMax = etud;
            if (presEtud.calculerMoyenne() > currEtud.calculerMoyenne()) {
                return presEtud;
            }
            return currEtud;
        });
        return nomMax.nom;
    };
    Cours.prototype.getMoyenneParNom = function (nom) {
        // let etud:Etudiant = this._etudiants.find((etud) =>  {
        //     if (etud.nom == nom) return etud;
        // });
        var etudiants = this._etudiants.filter(function (etud) {
            return etud.nom.toLowerCase() === nom.toLowerCase();
        });
        if (etudiants.length > 0) {
            return etudiants[0].calculerMoyenne();
        }
        console.log(nom, "does not exist");
        return 0;
        console.log(JSON.stringify(etudiants));
    };
    return Cours;
}());
exports.Cours = Cours;
