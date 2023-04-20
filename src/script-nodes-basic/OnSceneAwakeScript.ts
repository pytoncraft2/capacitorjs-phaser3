
// You can write more code here

/* START OF COMPILED CODE */

import ScriptNode from "./ScriptNode";
import Phaser from "phaser";
/* START-USER-IMPORTS */
import Niveau1 from "~/scenes/Niveaux/Niveau1/Niveau1";
import Niveau2 from "~/scenes/Niveaux/Niveau2/Niveau2";
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
		this.scene.editorCreateBase();
		console.log(this.scene);
	}
    get scene() {
        return super.scene as Niveau1;
    }
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
