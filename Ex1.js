// création de l'objet livre
const livre = {
  titre: 'La bible',
  auteur: 'Jésus',
  nombresPages: 'Beaucoup',
};
// ajout de la méthode description
livre.description = function () {
  return `
titre: ${this.titre}
auteur: ${this.auteur}
nb pages: ${this.nombresPages}
`;
};
// appel de la méthode description
livre.description();
