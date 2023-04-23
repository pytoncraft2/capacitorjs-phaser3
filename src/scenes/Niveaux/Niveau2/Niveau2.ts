
// You can write more code here

/* START OF COMPILED CODE */

import BaseNiveaux from "../BaseNiveaux";
import Entite from "../../Entites/Entite";
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

		// huipat
		const huipat = new Entite(this, 379, 242);
		this.add.existing(huipat);
		huipat.name = "huipat";

		// huipat_1
		const huipat_1 = new Entite(this, 1339.621176049871, 372.61675980680695);
		this.add.existing(huipat_1);
		huipat_1.name = "huipat_1";
		huipat_1.image_entite.setTexture("araigne", "araigne.png");

		// huipat_2
		const huipat_2 = new Entite(this, 1039.1629552797644, 209.7177244495202);
		this.add.existing(huipat_2);
		huipat_2.name = "huipat_2";
		huipat_2.image_entite.setTexture("araigne", "araigne.png");

		// huipat_3
		const huipat_3 = new Entite(this, 874.4539306407302, 446.82632035845984);
		this.add.existing(huipat_3);
		huipat_3.name = "huipat_3";
		huipat_3.image_entite.setTexture("araigne", "araigne.png");

		// huipat_4
		const huipat_4 = new Entite(this, 595.715581251595, 544.5657415728319);
		this.add.existing(huipat_4);
		huipat_4.name = "huipat_4";
		huipat_4.image_entite.setTexture("araigne", "araigne.png");

		// huipat_5
		const huipat_5 = new Entite(this, 1522.4300935063818, 151.798067433596);
		this.add.existing(huipat_5);
		huipat_5.name = "huipat_5";
		huipat_5.image_entite.setTexture("araigne", "araigne.png");

		// huipat_6
		const huipat_6 = new Entite(this, 821.9642414700489, 115.59828179864338);
		this.add.existing(huipat_6);
		huipat_6.name = "huipat_6";
		huipat_6.image_entite.setTexture("araigne", "araigne.png");

		// platformePrefab
		const platformePrefab = new PlatformePrefab(this, 979, 897);
		this.add.existing(platformePrefab);
		platformePrefab.scaleX = 14.34331624775633;
		platformePrefab.scaleY = 1;

		// onSceneAwakeScript
		new OnSceneAwakeScript(this);

		this.events.emit("scene-awake");
	}

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
