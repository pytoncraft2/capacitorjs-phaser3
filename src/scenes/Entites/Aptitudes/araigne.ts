import Entite from "../Entite"
export function deplacementGauche__GAUCHE(entite: Entite, input?: any) {
  entite.body.setVelocityX(-900)
}

export function deplacementDroite__DROITE(entite: Entite, input?: any) {
  entite.body.setVelocityX(900)
}

export function __auto(entite: Entite, input: any, aptitudes: any) {
  console.log("GOGOGOGO");
  
  entite.scene.tweens.add({
    targets: entite,
    alpha: 0.5,
    loop: -1,
    duration: 900,
    onLoop: () => console.log("LOOP")
  });
}