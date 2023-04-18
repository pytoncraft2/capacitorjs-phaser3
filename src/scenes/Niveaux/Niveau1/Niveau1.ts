
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import HuipatPrefab from "../../Entites/Huipat/HuipatPrefab";
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

		// huipatPrefab
		const huipatPrefab = new HuipatPrefab(this, 384, 272);
		allies.add(huipatPrefab);

		// platformes
		const platformes = this.add.layer();

		// platformePrefab
		const platformePrefab = new PlatformePrefab(this, 368, 688);
		platformes.add(platformePrefab);

		// projectiles
		this.add.layer();

		// lists
		const liste_colision_platforme: Array<any> = [];

		// collider
		this.physics.add.collider(huipatPrefab, platformePrefab);

		this.platformes = platformes;
		this.liste_colision_platforme = liste_colision_platforme;

		this.events.emit("scene-awake");
	}

	public platformes!: Phaser.GameObjects.Layer;
	private liste_colision_platforme!: Array<any>;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
