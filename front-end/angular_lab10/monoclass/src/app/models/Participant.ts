import { NgbDate } from '@ng-bootstrap/ng-bootstrap';

export default class Participant {
    id: number;
    nom: string;
    prenom: string;
    age: number;
    dateNaissance:NgbDate;
    email: string;
    tel: string;
}
