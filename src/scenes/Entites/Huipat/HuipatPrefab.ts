
// You can write more code here

/* START OF COMPILED CODE */

import BaseEntitesPrefab from "../BaseEntitesPrefab";
import OnPointerDownScript from "../../../script-nodes-basic/OnPointerDownScript";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default interface HuipatPrefab {

	 body: Phaser.Physics.Arcade.Body;
}

export default class HuipatPrefab extends BaseEntitesPrefab {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? -6, y ?? -15);

		scene.physics.add.existing(this, false);
		this.body.setOffset(-67, -39);
		this.body.setSize(148, 162, false);

		// huipat_png
		const huipat_png = scene.add.sprite(7, 42, "huipat", "huipat.png");
		this.add(huipat_png);

		// onPointerDownScript
		new OnPointerDownScript(huipat_png);

		/* START-USER-CTR-CODE */
		this.droite()
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
