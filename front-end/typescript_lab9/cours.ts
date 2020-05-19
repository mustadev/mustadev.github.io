import { Etudiant } from "./etudiant";

export class Cours{
    private _id: number;
    private _title: string;
    private _nbrJoures: number;
    private _etudiants: Array<Etudiant>;

    constructor(
        id : number,
        title: string,
        nbrJours: number, 
        etudiants: Array<Etudiant> = []){
        this._id = id;
        this._title = title;
        this._nbrJoures = nbrJours;
        this._etudiants = etudiants;
    }

    calculerMoyenneCours():number {
        return this._etudiants
        .map((etud) => etud.calculerMoyenne())
        .reduce((prevEtud, currEtud) => prevEtud + currEtud)/this._etudiants.length;
    }

    getIndexMax():number {
        let maxIndex = 0;
        let max = 0;
        this._etudiants.forEach((etud, index) => {
            if (etud.getMax() > max) maxIndex = index;
        });
        return maxIndex;
    }

    getNomMax():string {
        let nomMax:Etudiant = this._etudiants.reduce((presEtud, currEtud) => {
            // if (etud.getMax() > max) nomMax = etud;
            if (presEtud.calculerMoyenne() > currEtud.calculerMoyenne()){
                return presEtud;
            } 
            return currEtud;
        });
        return nomMax.nom;
    }

    getMoyenneParNom(nom:string):number{
        // let etud:Etudiant = this._etudiants.find((etud) =>  {
        //     if (etud.nom == nom) return etud;
        // });
        let etudiants:Etudiant[] = this._etudiants.filter((etud) => {
            return etud.nom.toLowerCase() === nom.toLowerCase();
        });
        if (etudiants.length > 0) {
            return etudiants[0].calculerMoyenne();
        }
        console.log(nom, "does not exist");
        return NaN;
    }


}