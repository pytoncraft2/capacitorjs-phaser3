
// You can write more code here

/* START OF COMPILED CODE */

import ScriptNode from "./ScriptNode";
import Phaser from "phaser";
/* START-USER-IMPORTS */
import BaseNiveaux from "~/scenes/Niveaux/BaseNiveaux";
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
		console.log("ALLIES ON SCENE AVANT", this.scene.allies);
		
		this.scene.editorCreateBase();
		console.log("ALLIES ON SCENE APRES", this.scene.allies);
		
		this.scene.entiteControllable = (this.scene as BaseNiveaux | any).allies.getByName('huipat');
	}
    get scene() {
        return super.scene as BaseNiveaux;
    }
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
