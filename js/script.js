var surnames = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];

var surnameUser = prompt("Qual'è il tuo cognome?");

// per ovviare al problema dove sort ordina le lettere maiuscole in un gruppo
// differente rispetto alle lettere minuscole, allora trasformiamo l'input
// in una parola con la prima lettera maiuscola.

surnameUser = surnameUser[0].toUpperCase() + surnameUser.slice(1);

surnames.push(surnameUser);

surnames.sort();

var position = surnames.indexOf(surnameUser) + 1;

document.getElementById("surnameOutput").innerHTML = position;
