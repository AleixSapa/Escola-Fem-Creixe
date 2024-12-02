document.addEventListener('DOMContentLoaded', () => {
    // Productes disponibles a la botiga
    const productes = [
        { nom: "Aventura de Sumes", preu: 200, id: 'aventura-sumes' },
        { nom: "Aventura de Restes", preu: 150, id: 'aventura-restes' }
    ];

    // Punts inicials de l'usuari
    let punts = 500;  // Per exemple, l'usuari comença amb 500 punts
    const productesDiv = document.getElementById('productes');
    const carretDiv = document.getElementById('carret');
    const llistaCarret = document.getElementById('llista-carret');
    const totalCarret = document.getElementById('total-carret');
    const finalitzarCompraButton = document.getElementById('finalitzar-compra');
    const buidarCarretButton = document.getElementById('buidar-carret');
    const puntsDisponibles = document.createElement('p');
    puntsDisponibles.textContent = `Punts disponibles: ${punts}`;
    carretDiv.insertBefore(puntsDisponibles, carretDiv.firstChild); // Afegim els punts disponibles a la pàgina
    
    let carret = [];

    // Funció per mostrar els productes
    function mostrarProductes() {
        productes.forEach((producte, index) => {
            const producteDiv = document.createElement('div');
            producteDiv.classList.add('producte');

            const nomProducte = document.createElement('h3');
            nomProducte.textContent = producte.nom;

            const preuProducte = document.createElement('p');
            preuProducte.textContent = `Preu: ${producte.preu} punts`;

            const afegirAlCarretButton = document.createElement('button');
            afegirAlCarretButton.textContent = 'Afegir al carret';
            afegirAlCarretButton.addEventListener('click', () => afegirAlCarret(index));

            producteDiv.appendChild(nomProducte);
            producteDiv.appendChild(preuProducte);
            producteDiv.appendChild(afegirAlCarretButton);

            productesDiv.appendChild(producteDiv);
        });
    }

    // Funció per afegir productes al carret
    function afegirAlCarret(index) {
        const producte = productes[index];
        carret.push(producte);
        actualitzarCarret();
    }

    // Funció per actualitzar el carret
    function actualitzarCarret() {
        llistaCarret.innerHTML = ''; // Buidem el carret
        let total = 0;

        carret.forEach((producte, index) => {
            const llistaItem = document.createElement('li');
            llistaItem.textContent = `${producte.nom} - ${producte.preu} punts`;
            llistaCarret.appendChild(llistaItem);
            total += producte.preu;
        });

        totalCarret.textContent = total;

        // Actualitzar els punts disponibles a la pàgina
        puntsDisponibles.textContent = `Punts disponibles: ${punts - total}`;

        // Mostrar el botó per finalitzar la compra si hi ha productes al carret
        if (carret.length > 0) {
            finalitzarCompraButton.style.display = 'block';
        } else {
            finalitzarCompraButton.style.display = 'none';
        }
    }

    // Funció per finalitzar la compra
    finalitzarCompraButton.addEventListener('click', () => {
        const totalCompra = carret.reduce((acc, producte) => acc + producte.preu, 0);

        if (totalCompra > punts) {
            alert('No tens prou punts per finalitzar la compra!');
        } else {
            // Restar els punts de la compra
            punts -= totalCompra;
            alert(`Compra finalitzada amb èxit! Punts restants: ${punts}`);

            // Permetre accedir a les aventures comprades
            carret.forEach(producte => {
                const aventuraElement = document.getElementById(producte.id);
                aventuraElement.style.display = 'block'; // Mostrar l'aventura comprada

                // Permetre accedir a la pàgina corresponent
                const botóAventura = aventuraElement.querySelector('button');
                botóAventura.addEventListener('click', () => {
                    window.location.href = `${producte.id}.html`; // Redirigir a la pàgina de l'aventura
                });
            });

            // Reiniciem el carret
            carret = [];
            actualitzarCarret();
        }
    });

    // Funció per buidar el carret
    buidarCarretButton.addEventListener('click', () => {
        // Esborrem tots els productes del carret
        carret = [];
        actualitzarCarret();
        alert('El carret s\'ha buit.');
    });

    // Mostrar els productes a la pàgina
    mostrarProductes();
});
