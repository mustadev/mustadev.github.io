export default class Participant {
    id: number;
    nom: string;
    prenom: string;
    age: number;
    dateNaissance:string;
    email: string;
    tel: string;
    constructor(id: number, nom: string, prenom: string, age: number, dateNaissance:string, email: string, tel: string) {
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
        this.dateNaissance = dateNaissance;
        this.email = email;
        this.tel = tel;
    }


}
