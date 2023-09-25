// tableau de voitures
const voitures = [
  {
    marque: 'Honda',
    modele: 'Civic',
    annee: 2000,
  },
  {
    marque: 'Citroën',
    modele: 'C3',
    annee: 2005,
  },
];
// ne garde que les voitures qui ont l'année fournie en paramètre
function filtrerParAnnee(voitures, annee) {
  return voitures.filter((voiture) => voiture.annee === annee);
}
// création du code html pour les voitures à afficher
function afficherVoitures(voitures) {
  let html = '';
  for (let i = 0; i < voitures.length; i++) {
    const voiture = voitures[i];
    const texte = `
  <p>
  marque: ${voiture.marque}<br/>
  modele: ${voiture.modele}<br/>
  annee: ${voiture.annee}
  </p>
  `;
    html += texte;
  }
  return html;
}
const appDiv = document.getElementById('app');
// afficher toutes les voitures
// appDiv.innerHTML = afficherVoitures(voitures);
// garder les voitures de l'année 2000
const liste = filtrerParAnnee(voitures, 2000);
// Afficher les voitures de 2000
appDiv.innerHTML = afficherVoitures(liste);
