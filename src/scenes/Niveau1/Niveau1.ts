
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import HuipatPrefab from "../Entites/Huipat/HuipatPrefab";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Niveau1 extends Phaser.Scene {

	constructor() {
		super("Niveau1");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// ennemies
		const ennemies = this.add.layer();

		// araigne_png
		const araigne_png = this.add.image(742, 225, "araigne", "araigne.png");
		ennemies.add(araigne_png);

		// allies
		this.add.layer();

		// platformes
		const platformes = this.add.layer();

		// platforme
		const platforme = this.add.rectangle(608, 640, 128, 128);
		platforme.scaleX = 8.79543753589233;
		platforme.scaleY = 0.22485279106389244;
		platforme.isFilled = true;
		platformes.add(platforme);

		// platforme_1
		const platforme_1 = this.add.rectangle(800, 304, 128, 128);
		platforme_1.scaleX = 3.2294427278195785;
		platforme_1.scaleY = 0.1602923764033262;
		platforme_1.isFilled = true;
		platformes.add(platforme_1);

		// projectiles
		this.add.layer();

		// huipatPrefab
		const huipatPrefab = new HuipatPrefab(this, 416, 384);
		this.add.existing(huipatPrefab);

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
