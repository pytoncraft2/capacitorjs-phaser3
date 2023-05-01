import Entite from "../Entite"
import { FlipX, ZoneInteractionADroite, ZoneInteractionAGauche } from "./Defaut/deplacements";

const bonusVitesseAraigne = 200;
const graviteVersLeHaut = -2500;
const graviteVersLeBas = 2500;

export function __InitialisationSpecifique(entite: Entite, aptitudes: any) {}

// export function sautVersLeHaut__toucheHaut(entite: Entite) {
//   if (entite.body.touching.down && !entite.body.touching.up)
//   {
//     // * POSITION A L'ENDROIT
//     const alendroit = entite.image_entite.flipY === false;
//     if (alendroit) flipYEtGravite(entite, true, graviteVersLeHaut);
//   }
//   else if (!entite.body.touching.down && entite.body.touching.up)
//   {
//     // * POSITION A L'ENVERS
//     const alenvers = entite.image_entite.flipY === true;
//     if (alenvers)
//     {
//       entite.body.checkCollision.up = false;
//       entite.body.setVelocityY(-900);
//       flipYEtGravite(entite, false, 2500);
//       entite.scene.time.delayedCall(100, () => {
//         entite.body.checkCollision.up = true;
//       }, undefined, entite);
//     }
//   }
// }

// export function sautVersLeBas__toucheBas(entite: Entite) {
//   if (entite.body.touching.down && !entite.body.touching.up)
//   {
//     const alendroit = entite.image_entite.flipY === false;
//     if (alendroit)
//     {
//       entite.body.checkCollision.down = false;
//       entite.body.setVelocityY(600);
//       flipYEtGravite(entite, true, graviteVersLeHaut);
//       entite.scene.time.delayedCall(100, () => {
//         entite.body.checkCollision.down = true;
//       }, undefined, entite);
//     }
//   }
//   else if (!entite.body.touching.down && entite.body.touching.up)
//   {
//     const alenvers = entite.image_entite.flipY === true;
//     if (alenvers) flipYEtGravite(entite, false, 2500);
//   }
// }

// function flipYEtGravite(entite: Entite, flipY: boolean, gravityY: number) {
//   entite.image_entite.setFlipY(flipY);
//   entite.body.gravity.y = gravityY;
// }

function saut(entite: Entite, flipY: boolean, gravityY: number, checkCollision?: 'up' | 'down') {
  entite.image_entite.setFlipY(flipY);
  entite.body.gravity.y = gravityY;
  if (checkCollision) {
    entite.body.checkCollision[checkCollision] = false;
    entite.scene.time.delayedCall(100, () => {
      entite.body.checkCollision[checkCollision] = true;
    }, undefined, entite);
  }
}

export function sautVersLeHaut__toucheHaut(entite: Entite) {
  if (entite.body.touching.down && !entite.body.touching.up) {
    // * POSITION A L'ENDROIT
    const alendroit = entite.image_entite.flipY === false;
    if (alendroit) saut(entite, true, graviteVersLeHaut);
  } else if (!entite.body.touching.down && entite.body.touching.up) {
    // * POSITION A L'ENVERS
    const alenvers = entite.image_entite.flipY === true;
    if (alenvers) saut(entite, false, graviteVersLeBas, 'up');
  }
}

export function sautVersLeBas__toucheBas(entite: Entite) {
  if (entite.body.touching.down && !entite.body.touching.up) {
    const alendroit = entite.image_entite.flipY === false;
    if (alendroit) saut(entite, true, graviteVersLeHaut, 'down');
  } else if (!entite.body.touching.down && entite.body.touching.up) {
    const alenvers = entite.image_entite.flipY === true;
    if (alenvers) saut(entite, false, graviteVersLeBas);
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