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
  // joueur?.zone_attaque_physique.setPosition(this.huipat.getRightCenter().x,this.huipat.getRightCenter().y)
  joueur.body.setVelocityX(joueur.velociteX);
}
function deplacementGauche(joueur: Entite) {
  joueur.image_entite.setFlipX(true);
  // joueur.zone_attaque_physique.setPosition(this.huipat.getLeftCenter().x,this.huipat.getLeftCenter().y)
  joueur.body.setVelocityX(-joueur.velociteX)
}
function deplacementBas(joueur: Entite): any {
  joueur.body.checkCollision.none = true;
  joueur.body.setVelocityY(joueur.velociteY)
  joueur.scene.time.delayedCall(50, () => (joueur.body.checkCollision.none = false), undefined, joueur);  // delay in ms
}