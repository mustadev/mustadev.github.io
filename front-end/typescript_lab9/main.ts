// Testing classes

import { Etudiant } from './etudiant';
import { Cours } from './cours';
import { Type} from './type'
import { Activite } from './activite'

console.log("testing classes ....");

//  testing  Etudiant Class
console.log("testing Etudiant Class ....");
let max = new Etudiant("Max", [18, 19, 11, 16]);
let bohr = new Etudiant("Bohr", [20, 12, 11, 18]);

console.log("nom etudiant", max.nom);
console.log("max etudiant", max.getMax());
console.log("min etudiant", max.getMin());
console.log("moyenne etudiant", max.calculerMoyenne());

console.log("nom etudiant", bohr.nom);
console.log("max etudiant", bohr.getMax());
console.log("min etudiant", bohr.getMin());
console.log("moyenne etudiant", bohr.calculerMoyenne());

// testing cours class
console.log("testing Cours Class ....")
let cours = new Cours(0, "physic", 100, [max, bohr]);

// moyonne de cours
console.log("moyenne de cours", cours.calculerMoyenneCours());

// get index Max 

console.log("index max ", cours.getIndexMax());

// Moyenne Par Nom 
// moyene Max 
console.log("Max Moyenne", cours.getMoyenneParNom("max"));

// moyenne Bohr 
console.log("Bohr Moyenne", cours.getMoyenneParNom("bohr"));

// affiche le nom du premier étudiant ayant la
// meilleure moyenne dans le cours
console.log("Nom Max ", cours.getNomMax());