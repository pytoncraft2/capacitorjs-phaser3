
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import Entite from "../../Entites/Entite";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Niveau2 extends Phaser.Scene {

	constructor() {
		super("Niveau2");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// entite
		const entite = new Entite(this, 385, 275);
		this.add.existing(entite);

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
