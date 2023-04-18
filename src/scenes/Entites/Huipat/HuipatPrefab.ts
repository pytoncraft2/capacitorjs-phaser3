
// You can write more code here

/* START OF COMPILED CODE */

import BaseEntitesPrefab from "../BaseEntitesPrefab";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class HuipatPrefab extends BaseEntitesPrefab {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? -6, y ?? -15);

		// huipat_png
		const huipat_png = scene.add.sprite(7, 42, "huipat", "huipat.png") as Phaser.GameObjects.Sprite & { body: Phaser.Physics.Arcade.Body };
		scene.physics.add.existing(huipat_png, false);
		huipat_png.body.setSize(148, 162, false);
		this.add(huipat_png);

		/* START-USER-CTR-CODE */
		this.droite()
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
