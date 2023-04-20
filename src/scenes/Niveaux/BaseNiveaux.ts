
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
import PlatformePrefab from "./ObjetsNiveaux/PlatformePrefab";
import Entite from "../Entites/Entite";
import OnPointerDownScript from "../../script-nodes-basic/OnPointerDownScript";
import ChangeTextureScript from "../../script-nodes/ChangeTextureScript";
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

		// platformePrefab
		const platformePrefab = new PlatformePrefab(this, 1120, 672);
		platformePrefab.scaleX = 23.18363917691242;
		platformePrefab.scaleY = 1;
		platformes.add(platformePrefab);

		// allies
		const allies = this.add.layer();

		// huipat
		const huipat = new Entite(this, 736, 256);
		huipat.name = "huipat";
		allies.add(huipat);

		// onPointerDownScript
		const onPointerDownScript = new OnPointerDownScript(huipat.huipat_png);

		// changeTextureScript
		new ChangeTextureScript(onPointerDownScript);

		// adversaires
		this.add.layer();

		// projectiles_adversaires
		this.add.layer();

		// projectiles_allies
		this.add.layer();

		// lists
		const entites_vs_platformes = [huipat];

		// collision_entites_vs_platformes
		this.physics.add.collider(platformes.list, entites_vs_platformes);

		this.platformes = platformes;
		this.allies = allies;
		this.spaceKey = spaceKey;
		this.entites_vs_platformes = entites_vs_platformes;

		this.events.emit("scene-awake");
	}

	public platformes!: Phaser.GameObjects.Layer;
	public allies!: Phaser.GameObjects.Layer;
	private spaceKey!: Phaser.Input.Keyboard.Key;
	private entites_vs_platformes!: Entite[];

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
		console.log("UPDATE BASE");
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
