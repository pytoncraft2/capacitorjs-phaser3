import Entite from "../Entite"
export function __InitialisationSpecifique(entite: Entite, aptitudes:any) {
  console.log("APTITUDE",aptitudes);
}

export function __modeAuto(entite: Entite, input: any, aptitudes: any) {
  console.log("ARAIGNE MODE AUTO");
  entite.body.setVelocityX(20)

		const dt = entite.scene.game.loop.delta
			
			entite.tempsCumule += dt
      console.log(entite.tempsCumule, entite.tempsEntreActions);
      

			if (entite.tempsCumule < entite.tempsEntreActions)
			{
				return
        
			} else {
        

			entite.tempsCumule = 0

			switch (Phaser.Math.Between(0, 3))
			{
				// left
				case 0:
				{
          console.log("CAS 0");
          entite.body.setVelocity(0)
          entite.image_entite.setFlipX(!entite.image_entite.flipX)
          
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