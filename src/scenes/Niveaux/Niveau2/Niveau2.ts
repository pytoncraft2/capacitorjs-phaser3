
// You can write more code here

/* START OF COMPILED CODE */

import BaseNiveaux from "../BaseNiveaux";
import Entite from "../../Entites/Entite";
import OnPointerDownScript from "../../../script-nodes-basic/OnPointerDownScript";
import ChangeTextureScript from "../../../script-nodes/ChangeTextureScript";
import PlatformePrefab from "../ObjetsNiveaux/PlatformePrefab";
import OnSceneAwakeScript from "../../../script-nodes-basic/OnSceneAwakeScript";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Niveau2 extends BaseNiveaux {

	constructor() {
		super("Niveau2");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// groupe_adversaires
		const groupe_adversaires = this.add.layer();

		// entite
		const entite = new Entite(this, 471, 162);
		entite.body.velocity.x = 100;
		entite.body.velocity.y = 0;
		entite.body.angularDrag = 100;
		entite.body.allowGravity = false;
		groupe_adversaires.add(entite);
		entite.image_entite.setTexture("chauve_souris", "chauve_souris.png");

		// groupe_allies
		const groupe_allies = this.add.layer();

		// huipat
		const huipat = new Entite(this, 1670, 274);
		huipat.name = "huipat";
		groupe_allies.add(huipat);

		// onPointerDownScript_1
		const onPointerDownScript_1 = new OnPointerDownScript(huipat.image_entite);

		// changeTextureScript
		new ChangeTextureScript(onPointerDownScript_1);

		// platformes
		const platformes = this.add.layer();

		// platformePrefab
		const platformePrefab = new PlatformePrefab(this, 567, 569);
		platformes.add(platformePrefab);

		// platformePrefab_1
		const platformePrefab_1 = new PlatformePrefab(this, 1772, 633);
		platformes.add(platformePrefab_1);

		// onSceneAwakeScript
		new OnSceneAwakeScript(this);

		// entite (prefab fields)
		entite.modeAuto = true;

		this.groupe_allies = groupe_allies;

		this.events.emit("scene-awake");
	}

	public groupe_allies!: Phaser.GameObjects.Layer;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
		console.log(this.scene.scene.children.getByName('huipat'));

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
