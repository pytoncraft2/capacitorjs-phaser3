
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

		this.alpha = 0.3;
		scene.physics.add.existing(this, false);
		this.body.velocity.x = -600;
		this.body.bounce.x = 1;
		this.body.collideWorldBounds = true;
		this.body.setSize(128, 128, false);
		this.isFilled = true;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
