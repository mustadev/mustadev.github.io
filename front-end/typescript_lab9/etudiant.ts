export class Etudiant {
    private _id: number;
    private _nom: string;
    private _notes: number[];

    constructor(nom:string, notes: number[]){
        this._id = 0;
        this._nom = nom;
        this._notes = notes;
    }

    get nom():string{
        return this._nom;
    }

    set nom(nom: string){
        this._nom = nom;
    }

    get notes() :number[]{
        return this._notes;
    }

    set notes(notes:number[]){
        this._notes = notes;
    }

    getMax():number{
        return this._notes.reduce((prev:number, curr:number) => {
            return prev > curr ? prev : curr
        }); 
    }

    getMin():number{
        return this._notes.reduce((prev:number, curr:number) => {
            return prev < curr ? prev : curr
        }); 
    }

    calculerMoyenne():number {
        return this._notes.reduce((prevNote, currNote) => prevNote + currNote)/ this._notes.length
    }
}