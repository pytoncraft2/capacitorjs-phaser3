
// You can write more code here

/* START OF COMPILED CODE */

import * as Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class BaseEntitesPrefab extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 533, y ?? 315);

		/* START-USER-CTR-CODE */
		console.log("BASE EN");
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */
	droite() {
		console.log("DROITE BASE ENTITES");
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here