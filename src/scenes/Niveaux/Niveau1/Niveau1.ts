
// You can write more code here

/* START OF COMPILED CODE */

import BaseNiveaux from "../BaseNiveaux";
import OnPointerDownScript from "../../../script-nodes-basic/OnPointerDownScript";
import StartSceneActionScript from "../../../script-nodes-basic/StartSceneActionScript";
import Entite from "../../Entites/Entite";
import PlatformePrefab from "../ObjetsNiveaux/PlatformePrefab";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Niveau1 extends BaseNiveaux {

	constructor() {
		super("Niveau1");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorCreate(): void {

		// text_1
		const text_1 = this.add.text(1574, 63, "", {});
		text_1.text = "New text";
		text_1.setStyle({ "fontSize": "56px" });

		// onPointerDownScript
		const onPointerDownScript = new OnPointerDownScript(text_1);

		// startSceneActionScript
		const startSceneActionScript = new StartSceneActionScript(onPointerDownScript);

		// players
		const players = this.add.layer();

		// entite
		const entite = new Entite(this, 449, 153);
		players.add(entite);

		// entite_1
		const entite_1 = new Entite(this, 1208, 346);
		players.add(entite_1);

		// platformes
		const platformes = this.add.layer();

		// platformePrefab
		const platformePrefab = new PlatformePrefab(this, 1780, 663);
		platformePrefab.scaleX = 12.955064222093448;
		platformePrefab.scaleY = 1;
		platformes.add(platformePrefab);

		// platformePrefab_1
		const platformePrefab_1 = new PlatformePrefab(this, -2, 476);
		platformePrefab_1.scaleX = 12.955064222093448;
		platformePrefab_1.scaleY = 1;
		platformes.add(platformePrefab_1);

		// collider
		this.physics.add.collider(players.list, platformes.list);

		// startSceneActionScript (prefab fields)
		startSceneActionScript.sceneKey = "Niveau2";

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	create() {

		// this.editorCreateBase()
		this.editorCreate();
		console.log("NIVEAU 1!!!!!!!!!!!!!!!!!!!!", this);

		// this.allies.add(this.entite)
		// console.log(this.entites_vs_platformes);

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
