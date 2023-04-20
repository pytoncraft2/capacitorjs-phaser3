
// You can write more code here

/* START OF COMPILED CODE */

import BaseNiveaux from "../BaseNiveaux";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Niveau1 extends BaseNiveaux {

	editorCreate(): void {

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	create() {

		// this.editorCreateBase()
		this.editorCreate();
		console.log("NIVEAU 1!!!!!!!!!!!!!!!!!!!!");

		// this.allies.add(this.entite)
		// console.log(this.entites_vs_platformes);

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
