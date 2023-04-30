import Entite from "../Entite"
import { FlipX, ZoneInteractionADroite, ZoneInteractionAGauche, saut } from "./Defaut/deplacements";

const bonusVitesseAraigne = 200;

export function __InitialisationSpecifique(entite: Entite, aptitudes: any) {
  // entite.image_entite.setOriginFromFrame()
}

export function sautVersLeBas__toucheBas(entite: any, input?: any) {
  if (entite.body.touching.down) {
    entite.body.checkCollision.none = true;
    entite.scene.time.delayedCall(600, () => {
      entite.body.checkCollision.none = false;
    });
    entite.body.setVelocityY(-300)
  }
}

export function sautVersLeHaut__toucheHaut(entite: Entite, input?: any) {
  console.log(entite.image_entite.flipY);

  const inverse = entite.body.gravity.y *= -1;
  if (entite.image_entite.flipY) {
    entite.body.checkCollision.none = true;
    entite.image_entite.setFlipY(!entite.image_entite.flipY)
    //TODO CHANGER VITESSE DEPLACMENT EN Y
    entite.body.setVelocityY(-entite.velociteY - 200);
    entite.scene.time.delayedCall(500, () => {
      entite.body.checkCollision.none = false;
      entite.body.gravity.y = inverse - 1700;
    }, undefined, entite);
  } else {
    entite.image_entite.setFlipY(!entite.image_entite.flipY)
    entite.body.gravity.y = inverse - 1700;
  }
  
}

export function deplacementDroite__toucheDroite(entite: any, input?: any) {
  entite.body.setVelocityX(entite.velociteX + bonusVitesseAraigne)

  FlipX(entite, false)
  ZoneInteractionADroite(entite)
}

export function deplacementGauche__toucheGauche(entite: any, input?: any) {
  entite.body.setVelocityX(-(entite.velociteX + bonusVitesseAraigne))

  FlipX(entite, true)
  ZoneInteractionAGauche(entite)
}

export function attaqueSurprise__toucheEspace(entite: Entite, aptitudes: any) {
  console.log("TOUCHE ATTAQUE ARAIGNEEEEEEEEEEEEEEE!!!");
}

export function __aucuneTouche(entite: Entite, aptitudes: any) {
  entite.body.setVelocityX(0)
}

export function __modeAuto(entite: Entite, input: any, aptitudes: any) {
  const dt = entite.scene.game.loop.delta

  entite.tempsCumule += dt
    const { left, right } = entite.body.blocked;
    
    if (left) {
      entite.body.setVelocityX(entite.velociteX)
      entite.image_entite.setFlipX(false)
      return
    } else if (right) {
      entite.body.setVelocityX(-entite.velociteX)
      entite.image_entite.setFlipX(true)
      return
    }


  if (entite.tempsCumule < entite.tempsEntreActions) { return }
  else {
    entite.tempsCumule = 0
  }
}