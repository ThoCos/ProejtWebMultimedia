// objet rectangle
const rectangle = {
  hauteur: 20,
  largeur: 50,
  aire: function () {
    return this.hauteur * this.largeur;
  },
  perimetre: function () {
    return (this.hauteur + this.largeur) * 2;
  },
};

// affichage des propriétés et méthodes
const appDiv = document.getElementById('app');
appDiv.innerHTML = `
hauteur: ${rectangle.hauteur}<br/>
largeur: ${rectangle.largeur}<br/>
aire: ${rectangle.aire()}<br/>
perimètre: ${rectangle.perimetre()}<br/>
`;
