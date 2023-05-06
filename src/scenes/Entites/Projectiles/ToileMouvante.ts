
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
		// awake handler
		this.scene.events.once("scene-awake", () => this.awake());

		/* START-USER-CTR-CODE */
		//@ts-ignore
		// this.scene.events.once("scene-awake", () => );
		// console.log("CREATE");
		
		//@ts-ignore
		// this.scene.groupe_projectile_boule_toile.add(this)
		// console.log(scene);
		
		/* END-USER-CTR-CODE */
	}
	// init() {
	// 	console.log("INII");
		
	// }

	/* START-USER-CODE */
	awake() {
		
		//@ts-ignore
		// console.log(this.scene.groupe_projectile_boule_toile);
		//@ts-ignore
		// this.scene.groupe_projectile_boule_toile.add(this)
		//@ts-ignore
		// console.log(this.scene.groupe_projectile_boule_toile);

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
