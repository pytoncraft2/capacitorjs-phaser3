
// You can write more code here

/* START OF COMPILED CODE */

import ScriptNode from "../script-nodes-basic/ScriptNode";
import Phaser from "phaser";
/* START-USER-IMPORTS */
import { Aptitudes } from "../scenes/Entites/Aptitudes/_autoImport";
import Entite from "~/scenes/Entites/Entite";
import { partir } from "../scenes/Entites/Aptitudes/Defaut/ChangerEtat";
/* END-USER-IMPORTS */

export default class ChangeTextureScript extends ScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */
	liste_texture = Object.keys({...Aptitudes})
	compteur = 0;

	override get gameObject() {
		return super.gameObject as Phaser.GameObjects.Sprite & {parentContainer: Entite};
	}

	override execute(args?: any): void {
		
		const entite = this.gameObject.parentContainer;
		entite.image_entite.setTexture(this.changeTexture());
		entite.Aptitudes[this.gameObject.texture.key]?.InitialisationSpecifique?.call(entite, entite, (entite as Entite).Aptitudes)
		partir(entite);
		entite.rectangle_zone_interaction.setPosition(entite.image_entite.getLeftCenter().x, entite.image_entite.getLeftCenter().y)
		entite.body.setSize(entite.image_entite.frame.width, entite.image_entite.height)
		// entite.image_entite.setOrigin(0.5, 1)
		// entite.body.destroy()
		// entite.scene.time.delayedCall(1000, () => entite.image_entite.setOrigin(0.5, 0.5));
		// entite.scene.physics.world.enable(entite)
		// entite.body.ad
		
		// entite.setSize(entite.image_entite.texture.source[0].width, entite.image_entite.texture.source[0].height)
		// entite.setSize(entite.image_entite.frame.width, entite.image_entite.frame.height)
			// .setOffset(0, 0);
		// entite.image_entite.setOrigin(1, 1);
		// entite.body.setSize(entite.image_entite.frame.width, entite.image_entite.height)
		// entite.image_entite.setOriginFromFrame()
		// entite.setSize(entite.image_entite.width, entite.image_entite.height)
		// entite.image_entite.setOrigin(0.5, 1)
		// this.scene.tweens.add({
		// 	targets: this.gameObject,
		// 	props: {
		// 		scale: { value: 0, duration: 300, yoyo: true },
		// 		alpha: { value: 0, duration: 300, yoyo: true},
		// 		texture: { value: this.changeTexture(), duration: 0, delay: 300 }
		// 	},
		// 	ease: 'Linear',
		// 	onComplete: () => {
		// 		const entite = this.gameObject.parentContainer;
		// 		entite.Aptitudes[this.gameObject.texture.key]?.InitialisationSpecifique?.call(entite, entite, (entite as Entite).Aptitudes)
		// 		partir(entite);
		// 		entite.rectangle_zone_interaction.setPosition(entite.image_entite.getLeftCenter().x, entite.image_entite.getLeftCenter().y)
				
		// 		// entite.body.setSize(entite.image_entite.width, entite.image_entite.height)
		// 		// entite.image_entite.setDisplaySize(entite.image_entite.displayWidth, entite.image_entite.displayHeight)
		// 		// entite.body
		// 			// .setSize(entite.image_entite.frame.width, entite.image_entite.height, true)
		// 		// entite.image_entite.setOriginFromFrame()
		// 		    // let img = this.add.image(320, 100, 'img');
		// 			// console.log(entite.displayWidth);
					
		// 		// console.log(entite.image_entite.width);
		// 			// entite.image_entite.displayWidth = 400;
					
		// 			// entite.image_entite.displayWidth = 100;

		// 		// extra line to scale the image proportional
		// 		// img.scaleY = img.scaleX;
		// 		// entite.image_entite.scaleX = entite.image_entite.scaleY
		// 		// 	.setOffset(0, 24);
		// 		// entite.image_entite.setOrigin(0, 1);
		// 		// entite.body.setSize(entite.image_entite.frame.width, entite.body.height, false)
		// 		entite.image_entite.setSizeToFrame()
		// 		entite.image_entite.setOriginFromFrame()
		// 		entite.body.setSize(entite.image_entite.frame.realWidth, entite.image_entite.frame.realHeight, false)
		// 		console.log(entite.body.width);
				
		// 	}
		// });
	}

	changeTexture() {
		let index = this.compteur % this.liste_texture.length;
		++this.compteur;
		return this.liste_texture[index];
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
