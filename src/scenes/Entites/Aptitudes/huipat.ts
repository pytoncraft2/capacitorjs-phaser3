import Entite from "../Entite";

export function __InitialisationSpecifique(entite: Entite) {
  // entite.actionToucheHaut = function (): void {    
  //   this.body.setVelocityY(-900)  
  // }
  // console.log("ENTITE:::::", entite.actionToucheBas());
  
  console.log("INIT HUIPAT");
}

export function deplacementGauche__GAUCHE(entite: Entite, input?: any) {
  entite.body.setVelocityX(-300)
}

export function deplacementDroite__DROITE(entite: Entite, input?: any) {
  entite.body.setVelocityX(300)
}