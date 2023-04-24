import Entite from "../Entite"
export function __InitialisationSpecifique(entite: Entite, aptitudes:any) {
  console.log("APTITUDE",aptitudes);
  entite.body.setVelocityX(200);

}

export function __modeAuto(entite: Entite, input: any, aptitudes: any) {
  const dt = entite.scene.game.loop.delta

  entite.tempsCumule += dt
    const { left, right } = entite.body.blocked;
    

    if (left) {
      console.log("BLOCKE GAUCE");
      
      entite.body.setVelocityX(entite.velociteX)
      entite.image_entite.setFlipX(false)
    } else if (right) {
      console.log("BLOCKE DROIT---");
      entite.body.setVelocityX(-entite.velociteX)
      entite.image_entite.setFlipX(true)
      // entite.body.setVelocityX(velocite)
      // return
    }


  if (entite.tempsCumule < entite.tempsEntreActions) { return }
  else {
    entite.tempsCumule = 0
    let velocite = entite.body.velocity.x > 0 ? -entite.velociteX : entite.body.velocity.x < 0 ? entite.velociteX : -entite.velociteX;

    switch (Phaser.Math.Between(0, 10)) {
      case 0:
        {
          entite.body.setVelocityX(velocite)
          entite.image_entite.setFlipX(!entite.image_entite.flipX)

          break
        }
      case 1:
        {
          entite.body.touching.down && entite.actionToucheBas()
          break
        }
      case 2:
        {
          entite.body.touching.down && entite.actionToucheHaut()
          break
        }
      case 3:
        {
          entite.body.touching.down && entite.actionToucheDroite()
          break
        }
      case 4:
        {
          entite.body.touching.down && entite.actionToucheGauche()
          break
        }
    }
  }
}