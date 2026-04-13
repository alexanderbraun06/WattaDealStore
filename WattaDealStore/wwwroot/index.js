"use strict";
function Registrati() {
    const nome = document.getElementById("nome");
    const cognome = document.getElementById("cognome");
    const datanascita = document.getElementById("datanascita");
    const indirizzo = document.getElementById("indirizzo");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confermaPassword = document.getElementById("confermaPassword");
    if (password.value !== confermaPassword.value) {
        alert("Le password non corrispondono");
    }
    else {
        alert("Registrazione avvenuta con successo");
    }
}
function Accedi() {
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    if (email.value === "" || password.value === "") {
        alert("Per favore, inserisci email e password");
    }
    else {
        alert("Accesso avvenuto con successo");
    }
}
