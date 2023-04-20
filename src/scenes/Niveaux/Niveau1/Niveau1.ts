
// You can write more code here

/* START OF COMPILED CODE */

import BaseNiveaux from "../BaseNiveaux";
import PlatformePrefab from "../ObjetsNiveaux/PlatformePrefab";
import Entite from "../../Entites/Entite";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Niveau1 extends BaseNiveaux {

	editorCreate(): void {

		// platformePrefab
		const platformePrefab = new PlatformePrefab(this, 842, 612);
		this.add.existing(platformePrefab);
		platformePrefab.scaleX = 14.18251855104597;
		platformePrefab.scaleY = 0.3002484220351861;

		// entite
		const entite = new Entite(this, 1134, 304);
		this.add.existing(entite);
		entite.huipat_png.setTexture("araigne", "araigne.png");

		this.entite = entite;

		this.events.emit("scene-awake");
	}

	public entite!: Entite;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
		this.editorCreateBase()
		// this.allies.add(this.entite)
		// console.log(this.entites_vs_platformes);

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
