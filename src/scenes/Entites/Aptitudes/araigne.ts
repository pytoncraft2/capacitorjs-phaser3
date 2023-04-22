import Entite from "../Entite"
export function deplacementGauche__GAUCHE(entite: Entite, input?: any) {
  entite.body.setVelocityX(-900)
}

export function deplacementDroite__DROITE(entite: Entite, input?: any) {
  entite.body.setVelocityX(900)
}