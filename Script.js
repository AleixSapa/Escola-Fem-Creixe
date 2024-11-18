
// Base de dades fictícia d'usuaris amb progrés en aventures
const users = [
    {
        email: "aleix@a",
        password: "A",
        name: "Aleix",
        adventures: [
            { name: aventures1, completed: true },
            { name: "Aventura 2", completed: false },
            { name: "Aventura 3", completed: false }
        ],
        redirectTo: Eluigf
    },
    //{
    //    email: "alumne2@escola.com",
    //    password: "contrasenya2",
    //    name: "Alumne 2",
    //    adventures: [
    //        { name: aventures1, completed: true },
    //        { name: "Aventura 2", completed: false },
    //        { name: "Aventura 3", completed: false }
    //    ],
    //    redirectTo: aventures1
    //}
];
// script.js

document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulari es recarregui
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");
    
    // Cerca l'usuari
    const user = users.find(user => user.email === email && user.password === password);
    
    if (user) {
        // Desa les dades de l'usuari al localStorage
        localStorage.setItem("currentUser", JSON.stringify(user));
        
        // Redirigeix a la pàgina de les aventures de l'usuari
        window.location.href = user.redirectTo;
    } else {
        // Si les credencials són incorrectes, mostra un error
        errorMessage.textContent = "Correu o contrasenya incorrectes. Torna-ho a provar.";
    }
});
