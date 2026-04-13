function Registrati() {
    const nome = document.getElementById("nome") as HTMLInputElement;
    const cognome = document.getElementById("cognome") as HTMLInputElement;
    const datanascita = document.getElementById("datanascita") as HTMLInputElement;
    const indirizzo = document.getElementById("indirizzo") as HTMLInputElement;
    const email = document.getElementById("email") as HTMLInputElement;
    const password = document.getElementById("password") as HTMLInputElement;
    const confermaPassword = document.getElementById("confermaPassword") as HTMLInputElement;

    if (password.value !== confermaPassword.value) {
        alert("Le password non corrispondono");
    } else {
        alert("Registrazione avvenuta con successo");
    }
}

function Accedi() {
    const email = document.getElementById("email") as HTMLInputElement;
    const password = document.getElementById("password") as HTMLInputElement;

    if (email.value === "" || password.value === "") {
        alert("Per favore, inserisci email e password");
    } else {
        alert("Accesso avvenuto con successo");
    }
}