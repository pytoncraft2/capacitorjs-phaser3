
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

	protected awake(): void {
		this.scene.entiteControllable = this.scene.allies.getByName('huipat');
	}

	get scene(): BaseNiveaux {
        return super.scene as BaseNiveaux;
	}
	//  awake(): void {

		// this.scene.entiteControllable = (this.scene as BaseNiveaux | any).allies.getByName('huipat');
	// }
    // scene() {
    //     return super.scene as BaseNiveaux;
    // }
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
