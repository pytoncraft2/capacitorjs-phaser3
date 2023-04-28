import Entite from "../Entite"
export function __InitialisationSpecifique(entite: Entite, aptitudes:any) {
  entite.Aptitudes[entite.image_entite.texture.key].toucheBas = (_entite, input) => {
    if (_entite.body.touching.down) {
      _entite.body.checkCollision.none = true;
      _entite.scene.time.delayedCall(600, () => {
        _entite.body.checkCollision.none = false;
      });
      _entite.body.setVelocityY(-300)
    }
  }
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