/*A partire dal codice realizzato nell’esercizio precedente realizzate
una classe "archivio" contenente un metodo che restituisce un
array di libri che corrispondono ad una certa stringa.
L’array in cui eseguire la ricerca è caricato in una variabile nella
stassa classe tramite il costruttore.
Il singolo libro può essere a sua volta rappresentato da una classe
Libro con i quattro attributi necessari, specificati nella consegna
del progetto.*/

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
let stringa= 'ma';

AutoriTitoli[AutoriTitoli.length]=new Archivio ("Dante Alighieri","La Divina Commedia");
AutoriTitoli[AutoriTitoli.length]=new Archivio ("Italo Svevo","Senilità");
AutoriTitoli[AutoriTitoli.length]=new Archivio ("Pirandello","Il fu Mattia Pascal");
AutoriTitoli[AutoriTitoli.length]=new Archivio ("Manzoni","I promessi sposi");

AutoriTitoli.forEach((singoloLibro) => singoloLibro.trovaLibri(stringa));

libriTrovati.forEach((singoloLibro)=> console.log( "Titolo: " + singoloLibro["titolo"] + " Autore: " + singoloLibro["autore"]));

if(libriTrovati.length===0){
  console.log("Nessun libro corrisponde alla ricerca");
}


