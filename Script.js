// Base de dades d'usuaris simulada
const users = [
    {
        email: "a@a",
        password: "a",
        name: "Alumne 1",
        adventures: [
            { name: "Aventura 1", completed: false },
            { name: "Aventura 2", completed: false },
            { name: "Aventura 3", completed: false }
        ]
    },
    {
        email: "alumne2@escola.com",
        password: "contrasenya2",
        name: "Alumne 2",
        adventures: [
            { name: "Aventura 1", completed: false },
            { name: "Aventura 2", completed: false },
            { name: "Aventura 3", completed: false }
        ]
    }
];

// Lògic d'inici de sessió
document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar el comportament per defecte del formulari

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    // Comprovar si l'usuari existeix
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        // Desa l'usuari actualitzat a localStorage
        localStorage.setItem("currentUser", JSON.stringify(user));

        // Redirigeix a la pàgina d'aventures de l'usuari (suposem que és aventures.html)
        window.location.href = "aventuras.html";
    } else {
        // Si les credencials no són correctes, mostra un error
        errorMessage.textContent = "Correu o contrasenya incorrectes. Torna-ho a provar.";
    }
});
