import { Type } from "./type";

export class Activite {
    private _id:number;
    private _title: number;
    private _description: string;
    private _urlYoutube: string;
    private _type: Type;
   

    constructor(
        id:number,
        title:number,
        description:string,
        urlYoutube:string,
        type:Type){

            this._id = id;
            this._title = title;
            this._description = description;
            this._urlYoutube = urlYoutube;
            this._type = type;
        }

    get id() {
        return this._id;
    }

    public get title(): number {
        return this._title;
    }
    public set title(value: number) {
        this._title = value;
    }

    public get description(): string {
        return this._description;
    }
    public set description(value: string) {
        this._description = value;
    }

    public get urlYoutube(): string {
        return this._urlYoutube;
    }
    public set urlYoutube(value: string) {
        this._urlYoutube = value;
    }

    public get type(): Type {
        return this._type;
    }
    public set type(value: Type) {
        this._type = value;
    }


}