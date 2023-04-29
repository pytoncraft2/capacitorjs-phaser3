import Entite from "../../Entite"

export function saut(joueur: Entite) {
  joueur.body.checkCollision.none = true;
  //TODO CHANGER VITESSE DEPLACMENT EN Y
  joueur.body.setVelocityY(-joueur.velociteY);
  joueur.scene.time.delayedCall(500, () => (joueur.body.checkCollision.none = false), undefined, joueur);
}
export function stopEntite(joueur: Entite) {
  joueur.body.setVelocityX(0);
}
export function deplacementDroite(joueur: Entite) {
  joueur.body.setVelocityX(joueur.velociteX);

  FlipX(joueur, false)
  ZoneInteractionADroite(joueur)
}
export function deplacementGauche(joueur: Entite) {
  joueur.body.setVelocityX(-joueur.velociteX)

  FlipX(joueur, true)
  ZoneInteractionAGauche(joueur)
}
export function deplacementBas(joueur: Entite): any {
  joueur.body.checkCollision.none = true;
  joueur.body.setVelocityY(joueur.velociteY)
  joueur.scene.time.delayedCall(50, () => (joueur.body.checkCollision.none = false), undefined, joueur);  // delay in ms
}

export function ZoneInteractionADroite(joueur: Entite) {
  if (joueur.rectangle_zone_interaction.x != joueur.image_entite.getRightCenter().x)
    joueur.rectangle_zone_interaction.setPosition(joueur.image_entite.getRightCenter().x, joueur.image_entite.getRightCenter().y);  
}

export function ZoneInteractionAGauche(joueur: Entite) {
  if (joueur.rectangle_zone_interaction.x != joueur.image_entite.getLeftCenter().x)
    joueur.rectangle_zone_interaction.setPosition(joueur.image_entite.getLeftCenter().x, joueur.image_entite.getLeftCenter().y);  
}

export function FlipX(joueur: Entite, ouiNon: boolean) {
  joueur.image_entite.setFlipX(ouiNon);
}