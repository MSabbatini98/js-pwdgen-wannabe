var nome = prompt("Inserisci il tuo nome");
var cognome = prompt("Inserisci il tuo cognome");
var colore = prompt("Inserisci il tuo colore preferito");

var password = "la tua password sarà : " + nome + cognome + colore + 27;

document.getElementById("anno_nascita").innerHTML = password;
