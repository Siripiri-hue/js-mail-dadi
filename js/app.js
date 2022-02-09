// dichiaro e inizializzo l'array
const emails = [
    "sarah.p@email.it",
    "davide.s@email.it",
    "giuseppe.g@email.it",
    "romualdo.r@email.it",
    "gianfranco.l@email.it",
    "ludovica.t@email.it",
    "alessandra.c@email.it",
    "romina.u@email.it" ];

// chiedo email all'utente
let userEmail = prompt(`ciao, inserisci la tua email`);

//controllo se l'email inserita è presente
let response = "";

for (let i=0; i < emails.length; i++)
{
    if (emails[i] === userEmail)
        response = emails[i];
}

//comunico il responso
if (response)
    alert("trovata!");
else 
    alert("non sei iscritto");