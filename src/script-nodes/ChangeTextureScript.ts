
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
		return super.gameObject as Phaser.GameObjects.Image & {parentContainer: Entite};
	}

	override execute(args?: any): void {
		this.scene.tweens.add({
			targets: this.gameObject,
			props: {
				scale: { value: 0, duration: 300, yoyo: true },
				alpha: { value: 0, duration: 300, yoyo: true},
				texture: { value: this.changeTexture(), duration: 0, delay: 300 }
			},
			ease: 'Linear',
			onComplete: () => {
				this.gameObject.parentContainer.Aptitudes[this.gameObject.texture.key]?.InitialisationSpecifique?.call(this.gameObject.parentContainer, this.gameObject.parentContainer, (this.gameObject.parentContainer as Entite).Aptitudes)
				partir(this.gameObject.parentContainer);
			}
		});
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
