
// You can write more code here

/* START OF COMPILED CODE */

import ScriptNode from "./ScriptNode";
import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class StartSceneActionScript extends ScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public sceneKey: string = "";
	public pleineEcran: boolean = false;

	/* START-USER-CODE */

	override execute(): void {

		if (this.pleineEcran) {
			this.scene.scale.startFullscreen();
		}
		this.scene.scene.start(this.sceneKey);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
