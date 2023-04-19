
// You can write more code here

/* START OF COMPILED CODE */

import BaseEntitesPrefab from "../BaseEntitesPrefab";
import SpriteScriptNode from "../../../script-nodes-basic/SpriteScriptNode";
import OnPointerDownScript from "../../../script-nodes-basic/OnPointerDownScript";
import ChangeTextureScript from "../../../script-nodes/ChangeTextureScript";
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
		const huipat_png = scene.add.sprite(7, 41, "huipat", "huipat.png");
		this.add(huipat_png);

		// spriteScriptNode
		const spriteScriptNode = new SpriteScriptNode(huipat_png);

		// onPointerDownScript
		const onPointerDownScript = new OnPointerDownScript(spriteScriptNode);

		// changeTextureScript
		new ChangeTextureScript(onPointerDownScript);

		this.onPointerDownScript = onPointerDownScript;

		/* START-USER-CTR-CODE */
		scene.add.existing(this);
		this.init()
		/* END-USER-CTR-CODE */
	}

	public onPointerDownScript: OnPointerDownScript;
	private cursors: any

	/* START-USER-CODE */
	init() {
		console.log("INIT HUIPAT");
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
