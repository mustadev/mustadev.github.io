"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Etudiant = void 0;
var Etudiant = /** @class */ (function () {
    function Etudiant(nom, notes) {
        this._id = 0;
        this._nom = nom;
        this._notes = notes;
    }
    Object.defineProperty(Etudiant.prototype, "nom", {
        get: function () {
            return this._nom;
        },
        set: function (nom) {
            this._nom = nom;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Etudiant.prototype, "notes", {
        get: function () {
            return this._notes;
        },
        set: function (notes) {
            this._notes = notes;
        },
        enumerable: false,
        configurable: true
    });
    Etudiant.prototype.getMax = function () {
        return this._notes.reduce(function (prev, curr) {
            return prev > curr ? prev : curr;
        });
    };
    Etudiant.prototype.getMin = function () {
        return this._notes.reduce(function (prev, curr) {
            return prev < curr ? prev : curr;
        });
    };
    Etudiant.prototype.calculerMoyenne = function () {
        return this._notes.reduce(function (prevNote, currNote) { return prevNote + currNote; }) / this._notes.length;
    };
    return Etudiant;
}());
exports.Etudiant = Etudiant;
