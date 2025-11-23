var liste = [];
var msg = "";
var history = [];
//listeners
document.getElementById("ajouter").addEventListener("click", ajouterTache);
document.getElementById("tache").addEventListener("keypress", function(e) {
    if (e.key === "Enter") ajouterTache();
});
document.getElementById("supprimerTout").addEventListener("click", supprimerToutesLesTaches);
document.getElementById("recherche").addEventListener("input", filtrerTaches);
//Bienvenue
function Bienvenue() {
    msg = "Bienvenue dans votre liste de tâches personnalisée !";
    console.log(msg);
}
//chargement de la liste 
if (localStorage.getItem("liste")) {
    liste = JSON.parse(localStorage.getItem("liste"));
    afficherTaches();
}
//tacheTerminer
function terminerTache(li, index) {
    liste[index].terminee = !liste[index].terminee;
    if (liste[index].terminee) {
        li.classList.add("tache-validee");
        li.querySelector('.btn-valider').classList.add('disabled');
    } 
    sauvegarderEtAfficher();
}
//supprimerTache 
function supprimerTache(li, index) {
    liste.splice(index, 1);
    sauvegarderEtAfficher();
}
//Ajouter tache
function ajouterTache() {
    let newT = document.getElementById("tache").value.trim();
    if (newT === "") return;

    liste.push({ texte: newT, terminee: false });
    document.getElementById("tache").value = "";
    sauvegarderEtAfficher();
}
//supprimerToutesLesTaches
function supprimerToutesLesTaches() {
    if (confirm("Voulez-vous vraiment supprimer toutes les tâches ?")) {
        liste = [];
        sauvegarderEtAfficher();
    }
}
//filtre de recherche 
function filtrerTaches() {
    afficherTaches(document.getElementById("recherche").value.toLowerCase());
}
//sauvegarder et afficher
function sauvegarderEtAfficher() {
    localStorage.setItem("liste", JSON.stringify(liste));
    afficherTaches();
}

function afficherTaches(filtre = "") {
    const ul = document.getElementById("liste");
    ul.innerHTML = "";//vider la liste 
    let tachesTerminees = 0;
//update la visbilité selon filtre 
    liste.forEach((tache, index) => {
        if (!tache.texte.toLowerCase().includes(filtre)) return;
//creation li 
        let li = document.createElement("li");
        li.className = "tache-item";
        if (tache.terminee) {
            li.classList.add("tache-validee");
            tachesTerminees++;
        }//update etat et compteur taches terminees

        let span = document.createElement("span");
        span.textContent = tache.texte;
        span.className = "tache-text";//tache elle meme
        li.appendChild(span);//construction de l'arborescence

        let btnTerminer = document.createElement("button");
        btnTerminer.textContent = "✔";
        btnTerminer.className = "btn-valider";
        if (tache.terminee) {
            btnTerminer.classList.add("disabled");
        }
        btnTerminer.addEventListener("click", () => {
            if (!btnTerminer.classList.contains("disabled")) {
                terminerTache(li, index);
            }
        });

        let btnSupprimer = document.createElement("button");
        btnSupprimer.textContent = "✖";
        btnSupprimer.className = "btn-supprimer";
        btnSupprimer.addEventListener("click", () => supprimerTache(li, index));

        li.appendChild(btnTerminer);
        li.appendChild(btnSupprimer);

        ul.appendChild(li);
    });
//update affichage compteur 
    document.getElementById("compteur").textContent = 
        `Terminées : ${tachesTerminees} / Total : ${liste.length}`;
}
