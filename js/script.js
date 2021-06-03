
var surnames = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];

var surnameUser = surnames.push(prompt("Qual'è il tuo cognome?"));

for (var i = 0; i < surnames.length; i++) {
    surnames.sort();
    document.getElementById("surnameOutput").innerHTML = surnames.join("<br>");
    var humanCount = surnames.indexOf(surnames.sort);
}