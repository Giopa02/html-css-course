// Fonction pour créer et afficher le formulaire
function creerFormulaire() {
    const formContainer = document.getElementById("form-container");

    // Créer un formulaire
    const formulaire = document.createElement("form");
    formulaire.id = "form-utilisateur";

    // Ajouter les champs
    const champs = [
        { label: "Nom :", type: "text", name: "nom" },
        { label: "Email :", type: "email", name: "email" },
        { label: "Âge :", type: "number", name: "age" },
    ];

    champs.forEach(champ => {
        const div = document.createElement("div");

        const label = document.createElement("label");
        label.innerText = champ.label;
        label.for = champ.name;

        const input = document.createElement("input");
        input.type = champ.type;
        input.name = champ.name;
        input.required = true;

        div.appendChild(label);
        div.appendChild(input);
        formulaire.appendChild(div);
    });

    // Ajouter un bouton de soumission
    const bouton = document.createElement("button");
    bouton.type = "submit";
    bouton.innerText = "Envoyer";

    formulaire.appendChild(bouton);

    // Ajouter un gestionnaire d'événement pour la soumission
    formulaire.addEventListener("submit", function (event) {
        event.preventDefault(); // Empêche la soumission réelle
        traiterFormulaire(new FormData(formulaire));
    });

    // Ajouter le formulaire au conteneur
    formContainer.appendChild(formulaire);
}

// Fonction pour traiter les données du formulaire
function traiterFormulaire(formData) {
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "<h2>Informations soumises :</h2>";

    formData.forEach((value, key) => {
        const p = document.createElement("p");
        p.innerText = `${key}: ${value}`;
        resultDiv.appendChild(p);
    });
}

// Appeler la fonction pour créer le formulaire
creerFormulaire();