import Entite from "../Entite";

export function __InitialisationSpecifique() {
  console.log("INIT HUIPAT");
}

export function deplacementGauche__GAUCHE(entite: Entite, input?: any) {
  entite.body.setVelocityX(-300)
}

export function deplacementDroite__DROITE(entite: Entite, input?: any) {
  entite.body.setVelocityX(300)
}