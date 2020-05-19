"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Activite = void 0;
var Activite = /** @class */ (function () {
    function Activite(id, title, description, urlYoutube, type) {
        this._id = id;
        this._title = title;
        this._description = description;
        this._urlYoutube = urlYoutube;
        this._type = type;
    }
    Object.defineProperty(Activite.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Activite.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (value) {
            this._title = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Activite.prototype, "description", {
        get: function () {
            return this._description;
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Activite.prototype, "urlYoutube", {
        get: function () {
            return this._urlYoutube;
        },
        set: function (value) {
            this._urlYoutube = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Activite.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: false,
        configurable: true
    });
    return Activite;
}());
exports.Activite = Activite;
