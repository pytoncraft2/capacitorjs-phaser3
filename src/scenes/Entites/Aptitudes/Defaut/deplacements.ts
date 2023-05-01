import Entite from "../../Entite"

export function saut(entite: Entite) {
  entite.body.checkCollision.none = true;
  //TODO CHANGER VITESSE DEPLACMENT EN Y
  entite.body.setVelocityY(-entite.velociteY);
  entite.scene.time.delayedCall(500, () => (entite.body.checkCollision.none = false), undefined, entite);
}
export function stopEntite(entite: Entite) {
  entite.body.setVelocityX(0);
}
export function deplacementDroite(entite: Entite) {
  entite.body.setVelocityX(entite.velociteX);

  FlipX(entite, false)
  ZoneInteractionADroite(entite)
}
export function deplacementGauche(entite: Entite) {
  entite.body.setVelocityX(-entite.velociteX)

  FlipX(entite, true)
  ZoneInteractionAGauche(entite)
}
export function deplacementBas(entite: Entite): any {
  entite.body.checkCollision.none = true;
  entite.body.setVelocityY(entite.velociteY)
  entite.scene.time.delayedCall(50, () => (entite.body.checkCollision.none = false), undefined, entite);  // delay in ms
}

/**
 * @param entite
 * @description déplace à droite de l'image, le rectangle qui permet de détecter une autre entité 
 */
export function ZoneInteractionADroite(entite: Entite) {
  if (entite.rectangle_zone_interaction.x != entite.image_entite.getRightCenter().x)
    entite.rectangle_zone_interaction.setPosition(entite.image_entite.getRightCenter().x, entite.image_entite.getRightCenter().y);  
}

/**
 * @param entite
 * @description déplace à gauche de l'image, le rectangle qui permet de détecter une autre entité 
 */ 
export function ZoneInteractionAGauche(entite: Entite) {
  if (entite.rectangle_zone_interaction.x != entite.image_entite.getLeftCenter().x)
    entite.rectangle_zone_interaction.setPosition(entite.image_entite.getLeftCenter().x, entite.image_entite.getLeftCenter().y);  
}

/**
 * @param entite 
 * @param ouiNon retourne l'image de l'entité vers la droite(false) ou vers la gauche(true)
 */
export function FlipX(entite: Entite, ouiNon: boolean) {
  entite.image_entite.setFlipX(ouiNon);
}