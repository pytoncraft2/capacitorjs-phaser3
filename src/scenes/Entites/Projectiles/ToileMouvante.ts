
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default interface ToileMouvante {

	 body: Phaser.Physics.Arcade.Body;
}

export default class ToileMouvante extends Phaser.GameObjects.Ellipse {

	constructor(scene: Phaser.Scene, x?: number, y?: number, width?: number, height?: number) {
		super(scene, x ?? 0, y ?? 0, width ?? 128, height ?? 128);

		this.scaleX = 0.8042695872537553;
		this.scaleY = 0.18602173204849204;
		this.alpha = 0.5;
		scene.physics.add.existing(this, false);
		this.body.bounce.x = 1;
		this.body.collideWorldBounds = true;
		this.body.setSize(128, 128, false);
		this.isFilled = true;

		/* START-USER-CTR-CODE */
		/* END-USER-CTR-CODE */
	}

	public aUneRef: boolean = false;

	/* START-USER-CODE */
	couleurDeplacable() {
		this.fillColor = 4582482;
	}
	couleurBasic() {
		if (this.fillColor !== 16777215) this.fillColor = 16777215;
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
