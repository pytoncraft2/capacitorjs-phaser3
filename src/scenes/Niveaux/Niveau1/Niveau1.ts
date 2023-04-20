
// You can write more code here

/* START OF COMPILED CODE */

import BaseNiveaux from "../BaseNiveaux";
import PlatformePrefab from "../ObjetsNiveaux/PlatformePrefab";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Niveau1 extends BaseNiveaux {

	editorCreate(): void {

		// platformePrefab
		const platformePrefab = new PlatformePrefab(this, 842, 528);
		this.add.existing(platformePrefab);

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
		this.editorCreateBase()
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
