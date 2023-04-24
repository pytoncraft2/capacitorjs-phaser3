import Entite from "../Entite"
export function __InitialisationSpecifique(entite: Entite, aptitudes:any) {
  console.log("APTITUDE",aptitudes);
  entite.body.setVelocityX(200);
}

export function __modeAuto(entite: Entite, input: any, aptitudes: any) {
		const dt = entite.scene.game.loop.delta
			
			entite.tempsCumule += dt

			if (entite.tempsCumule < entite.tempsEntreActions) { return }
      else {
        entite.tempsCumule = 0
        let velocite = entite.body.velocity.x;
        velocite = velocite * -1

        switch (Phaser.Math.Between(0, 3)) {
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
        }
      }
  
  // entite.scene.tweens.add({
  //   targets: entite,
  //   alpha: 0.5,
  //   yoyo: true,
  //   loop: -1,
  //   duration: 900
  // });
}