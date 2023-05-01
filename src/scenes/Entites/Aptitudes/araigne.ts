import Entite from "../Entite"
import { FlipX, ZoneInteractionADroite, ZoneInteractionAGauche, saut } from "./Defaut/deplacements";

const bonusVitesseAraigne = 200;

export function __InitialisationSpecifique(entite: Entite, aptitudes: any) {}

export function sautVersLeHaut__toucheHaut(entite: Entite, input?: any) {

  const alendroit = entite.image_entite.flipY === false;
  const alenvers = entite.image_entite.flipY === true;
  const graviteVersLeHaut = -2500;
  const graviteVersLeBas = 2500;

  if (entite.body.touching.down && !entite.body.touching.up)
  {
    // * POSITION A L'ENDROIT
    if (alendroit) {
      entite.image_entite.setFlipY(true)
      entite.body.gravity.y = graviteVersLeHaut;
    }
  } else if (!entite.body.touching.down && entite.body.touching.up)
  {
    // * POSITION A L'ENVERS
    if (alenvers) {
      entite.body.checkCollision.up = false;
      entite.image_entite.setFlipY(false)
      entite.body.setVelocityY(-900);
      entite.body.gravity.y = graviteVersLeBas;
      entite.scene.time.delayedCall(100, () => {
        entite.body.checkCollision.up = true;
      }, undefined, entite);
    }
  }
}

export function sautVersLeBas__toucheBas(entite: Entite, input?: any) {
    // const inverse = entite.body.gravity.y *= -1;
    // if (!entite.image_entite.flipY && entite.body.touching.down) {
    //   entite.body.checkCollision.none = true;
    //   entite.image_entite.setFlipY(!entite.image_entite.flipY)
    //   //TODO CHANGER VITESSE DEPLACMENT EN Y
    //   entite.body.setVelocityY(entite.velociteY - 700);
    //   entite.scene.time.delayedCall(500, () => {
    //     entite.body.checkCollision.none = false;
    //     entite.body.gravity.y = inverse - 1700;
    //   }, undefined, entite);
    // } else {
    //   console.log("ELSE BASE");
      
    //   entite.image_entite.setFlipY(false)
    //   entite.body.gravity.y = inverse - 1700;
    // }


  const alendroit = entite.image_entite.flipY === false;
  const alenvers = entite.image_entite.flipY === true;
  const graviteVersLeHaut = -2500;
  const graviteVersLeBas = 2500;

  if (entite.body.touching.down && !entite.body.touching.up)
  {
    // * POSITION A L'ENDROIT
    if (alendroit) {
      entite.body.checkCollision.down = false;
      entite.image_entite.setFlipY(true)
      entite.body.setVelocityY(600);
      entite.body.gravity.y = graviteVersLeHaut;
    }
  } else if (!entite.body.touching.down && entite.body.touching.up)
  {
    // * POSITION A L'ENVERS
    if (alenvers) {
      console.log("A LENVERT, todo inversion");
      entite.body.checkCollision.down = true;
      // entite.image_entite.setFlipY(false)
      // entite.body.setVelocityY(-900);
      // entite.body.gravity.y = graviteVersLeBas;
      // entite.scene.time.delayedCall(100, () => {
      //   entite.body.checkCollision.up = true;
      // }, undefined, entite);
    }
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