import Entite from "../Entite"
export function __InitialisationSpecifique(entite: Entite, aptitudes: any) {
  // entite.Aptitudes[entite.image_entite.texture.key].toucheBas = (_entite, input) => {
  //   if (_entite.body.touching.down) {
  //     _entite.body.checkCollision.none = true;
  //     _entite.scene.time.delayedCall(600, () => {
  //       _entite.body.checkCollision.none = false;
  //     });
  //     _entite.body.setVelocityY(-300)
  //   }
  // }
}

export function yoyo__toucheBas(entite: any, input?: any) {
  console.log("TOUCHE BAS A R A I G N E");
}

export function __toucheEspace(entite: Entite, aptitudes: any) {
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