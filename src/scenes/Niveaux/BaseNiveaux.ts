
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class BaseNiveaux extends Phaser.Scene {

	editorCreateBase(): void {

		// spaceKey
		const spaceKey = this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

		this.spaceKey = spaceKey;

		this.events.emit("scene-awake");
	}

	private spaceKey!: Phaser.Input.Keyboard.Key;

	/* START-USER-CODE */

	// Write your code here
	joueurcontrollable!: any

	init() {
		this.editorCreateBase();
		// this.joueurcontrollable = this.allies.getByName('huipat');

		console.log("INIT BASE_NIVEAUX");
	}

	update(time: number, delta: number): void {
		console.log("UPDATE BASE");
		if (this.spaceKey.isDown) {
			this.joueurcontrollable.body.setVelocityX(300)
		}
		if (this.spaceKey.isUp) {
			this.joueurcontrollable.body.setVelocityX(0)
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
