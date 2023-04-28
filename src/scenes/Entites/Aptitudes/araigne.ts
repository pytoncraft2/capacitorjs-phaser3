import Entite from "../Entite"
export function __InitialisationSpecifique(entite: Entite, aptitudes: any) {}

export function sautVersLeBas__toucheBas(entite: any, input?: any) {
  if (entite.body.touching.down) {
    entite.body.checkCollision.none = true;
    entite.scene.time.delayedCall(600, () => {
      entite.body.checkCollision.none = false;
    });
    entite.body.setVelocityY(-300)
  }
}

export function attaqueSurprise__toucheEspace(entite: Entite, aptitudes: any) {
  console.log("TOUCHE ATTAQUE ARAIGNEEEEEEEEEEEEEEE!!!");
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