// Import stylesheets
import './style.css';

// Write Javascript code!
let libriTrovati=[];
class Archivio{
  constructor(autore,titolo){
    this.autore=autore;
    this.titolo=titolo;
  }
  trovaLibri(stringa){
    if(
      this.autore.toLowerCase().includes(stringa.toLowerCase()) || this.titolo.toLowerCase().includes(stringa.toLowerCase())
      )
      {
      libriTrovati.push({autore:this.autore, titolo:this.titolo});
    }
  }
}

const AutoriTitoli=[];
let stringa= 'di';

AutoriTitoli[AutoriTitoli.length]=new Archivio ("Dante Alighieri","La Divina Commedia");
AutoriTitoli[AutoriTitoli.length]=new Archivio ("Italo Svevo","Senilità");
AutoriTitoli[AutoriTitoli.length]=new Archivio ("Pirandello","Il fu Mattia Pascal");
AutoriTitoli[AutoriTitoli.length]=new Archivio ("Manzoni","I promessi sposi");

AutoriTitoli.forEach((singoloLibro) => singoloLibro.trovaLibri(stringa));

libriTrovati.forEach((singoloLibro)=> console.log(singoloLibro["titolo"] + singoloLibro["autore"]));

console.log("ciao");

