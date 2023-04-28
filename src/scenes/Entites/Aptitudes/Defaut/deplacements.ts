import Entite from "../../Entite"

export const DefautDirection = (_Aptitudes: any, entite: Entite) => {
const Aptitudes = entite.Aptitudes;
const cle_image = entite.image_entite.texture.key
  Aptitudes[cle_image].toucheDroite = (joueur: Entite, input: any) => {
    deplacementDroite(joueur)
  }
  Aptitudes[cle_image].toucheGauche = (joueur: Entite, input: any) => {
    deplacementGauche(joueur)
  }
  Aptitudes[cle_image].toucheEspace = (joueur: Entite, input: any) => {
    console.log("ATTAQUE");
  }
  Aptitudes[cle_image].toucheHaut = (joueur: Entite, input: any) => {
    saut(joueur)
  }
  Aptitudes[cle_image].toucheBas = (joueur: Entite, input: any) => {
    deplacementBas(joueur)
  }

  Aptitudes[cle_image].aucuneTouche = (joueur: Entite, input: any) => {
    stopEntite(joueur)
  }
}

function saut(joueur: Entite) {
  joueur.body.checkCollision.none = true;
  //TODO CHANGER VITESSE DEPLACMENT EN Y
  joueur.body.setVelocityY(-joueur.velociteY);
  joueur.scene.time.delayedCall(500, () => (joueur.body.checkCollision.none = false), undefined, joueur);
}
function stopEntite(joueur: Entite) {
  joueur.body.setVelocityX(0);
}
function deplacementDroite(joueur: Entite) {
  joueur.image_entite.setFlipX(false);
  joueur.body.setVelocityX(joueur.velociteX);

  if (joueur.rectangle_zone_interaction.x != joueur.image_entite.getRightCenter().x)
    joueur.rectangle_zone_interaction.setPosition(joueur.image_entite.getRightCenter().x, joueur.image_entite.getRightCenter().y);
}
function deplacementGauche(joueur: Entite) {
  joueur.image_entite.setFlipX(true);
  joueur.body.setVelocityX(-joueur.velociteX)

  if (joueur.rectangle_zone_interaction.x != joueur.image_entite.getLeftCenter().x)
    joueur.rectangle_zone_interaction.setPosition(joueur.image_entite.getLeftCenter().x, joueur.image_entite.getLeftCenter().y);
}
function deplacementBas(joueur: Entite): any {
  joueur.body.checkCollision.none = true;
  joueur.body.setVelocityY(joueur.velociteY)
  joueur.scene.time.delayedCall(50, () => (joueur.body.checkCollision.none = false), undefined, joueur);  // delay in ms
}