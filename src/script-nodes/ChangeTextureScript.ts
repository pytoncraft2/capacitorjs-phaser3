
// You can write more code here

/* START OF COMPILED CODE */

import ScriptNode from "../script-nodes-basic/ScriptNode";
import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class ChangeTextureScript extends ScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	override get gameObject() {
		return super.gameObject as Phaser.Physics.Arcade.Sprite;
	}

	override execute(args?: any): void {
		this.scene.tweens.add({
			targets: this.gameObject,
			props: {
				scale: { value: 0, duration: 300, yoyo: true },
				alpha: { value: 0, duration: 300, yoyo: true},
				texture: { value: this.changeTexture(), duration: 0, delay: 300 }
			},
			ease: 'Linear'
		});
	}

	changeTexture() {
		const texture = this.gameObject.texture.key === 'araigne' ? 'huipat' : 'araigne';
		return texture;
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
