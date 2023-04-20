
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import OnSceneAwakeScript from "../../script-nodes-basic/OnSceneAwakeScript";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class BaseNiveaux extends Phaser.Scene {

	constructor() {
		super("Niveau1");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreateBase(): void {

		// spaceKey
		const spaceKey = this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

		// platformes
		const platformes = this.add.layer();

		// allies
		const allies = this.add.layer();

		// adversaires
		this.add.layer();

		// projectiles_adversaires
		this.add.layer();

		// projectiles_allies
		this.add.layer();

		// onSceneAwakeScript
		new OnSceneAwakeScript(this);

		// lists
		const entites_vs_platformes: Array<any> = [];

		// collision_entites_vs_platformes
		this.physics.add.collider(platformes.list, entites_vs_platformes);

		this.platformes = platformes;
		this.allies = allies;
		this.spaceKey = spaceKey;

		this.events.emit("scene-awake");
	}

	public platformes!: Phaser.GameObjects.Layer;
	public allies!: Phaser.GameObjects.Layer;
	private spaceKey!: Phaser.Input.Keyboard.Key;

	/* START-USER-CODE */

	// Write your code here
	joueurcontrollable!: any

	create() {

		// this.editorCreate();

		// this.joueurcontrollable = this.allies.getByName('huipat');
		// console.log(this.joueurcontrollable);
		// console.log(this.spaceKey);
		// console.log("CREATE ?");


	}

		// this.joueurcontrollable = this.;
	update(time: number, delta: number): void {
		// console.log("UPDATE BASE");
		// if (this.spaceKey.isDown) {
		// 	this.joueurcontrollable.body.setVelocityX(300)
		// }
		// if (this.spaceKey.isUp) {
		// 	this.joueurcontrollable.body.setVelocityX(0)
		// }
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
