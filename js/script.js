/*Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina la concatenazione
delle variabili + un numero a caso scelto da voi
*/

let nome = prompt("Scrivi il tuo nome");

let cognome = prompt("Scrivi il tuo cognome");

let colore = prompt("Scrivi il tuo colore preferito");



// Metodo standard ---------->

//document.writeln("Ciao! Mi chiamo " + nome + " " + cognome + ", e il mio colore preferito è il " + colore + ". 21");


// Template Literal----------> 

document.writeln(`Ciao! Mi chiamo ${nome} ${cognome}, e il mio colore preferito è il ${colore}. 21`)