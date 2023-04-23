
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import ScriptNode from "./ScriptNode";
/* START-USER-IMPORTS */
import BaseNiveaux from "~/scenes/Niveaux/BaseNiveaux";
/* END-USER-IMPORTS */

export default class OnSceneAwakeScript extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? NaN, y ?? NaN);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	 awake(): void {
		
		// this.scene.entiteControllable = (this.scene as BaseNiveaux | any).allies.getByName('huipat');
	}
    // scene() {
    //     return super.scene as BaseNiveaux;
    // }
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
