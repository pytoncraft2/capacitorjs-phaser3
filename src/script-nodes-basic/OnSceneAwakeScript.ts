
// You can write more code here

/* START OF COMPILED CODE */

import BaseNiveaux from "~/scenes/Niveaux/BaseNiveaux";
import ScriptNode from "./ScriptNode";
import Phaser from "phaser";
import Niveau1 from "~/scenes/Niveaux/Niveau1/Niveau1";
import Niveau2 from "~/scenes/Niveaux/Niveau2/Niveau2";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class OnSceneAwakeScript extends ScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	protected override awake(): void {
		console.log("SCENE AWAKE NIVEAU 1");
		console.log(this.scene);
		// this.scene.editorCreateBase();
	}
    get scene() {
        return super.scene as BaseNiveaux;
    }
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
