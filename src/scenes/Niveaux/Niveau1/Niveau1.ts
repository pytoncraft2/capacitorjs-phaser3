
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import PlatformePrefab from "../ObjetsNiveaux/PlatformePrefab";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Niveau1 extends Phaser.Scene {

	constructor() {
		super("Niveau1");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// ennemies
		this.add.layer();

		// allies
		const allies = this.add.layer();

		// platformes
		const platformes = this.add.layer();

		// platformePrefab
		const platformePrefab = new PlatformePrefab(this, 1120, 864);
		platformePrefab.scaleX = 23.18363917691242;
		platformePrefab.scaleY = 1;
		platformes.add(platformePrefab);

		// projectiles
		this.add.layer();

		// lists
		const liste_colision_platforme: Array<any> = [];

		// collider
		this.physics.add.collider(allies.list, platformes.list);

		this.allies = allies;
		this.platformes = platformes;
		this.liste_colision_platforme = liste_colision_platforme;

		this.events.emit("scene-awake");
	}

	public allies!: Phaser.GameObjects.Layer;
	public platformes!: Phaser.GameObjects.Layer;
	private liste_colision_platforme!: Array<any>;

	/* START-USER-CODE */

	// Write your code here
	joueurcontrollable!: any

	create() {

		this.editorCreate();

		this.joueurcontrollable = this.allies.getByName('huipat');
	}

	update(time: number, delta: number): void {
		console.log("UPDATE");
		// if (this.left.isDown) {
			// this.joueurcontrollable.body.setVelocityX(300)
		// }
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
