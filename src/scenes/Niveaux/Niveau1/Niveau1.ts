
// You can write more code here

/* START OF COMPILED CODE */

import BaseNiveaux from "../BaseNiveaux";
import OnPointerDownScript from "../../../script-nodes-basic/OnPointerDownScript";
import StartSceneActionScript from "../../../script-nodes-basic/StartSceneActionScript";
import PlatformePrefab from "../ObjetsNiveaux/PlatformePrefab";
import Entite from "../../Entites/Entite";
import ChangeTextureScript from "../../../script-nodes/ChangeTextureScript";
import OnSceneAwakeScript from "../../../script-nodes-basic/OnSceneAwakeScript";
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

		// allies
		const allies = this.add.layer();

		// huipat
		const huipat = new Entite(this, 1059, 274);
		huipat.name = "huipat";
		allies.add(huipat);

		// onPointerDownScript_1
		const onPointerDownScript_1 = new OnPointerDownScript(huipat.image_entite);

		// changeTextureScript
		new ChangeTextureScript(onPointerDownScript_1);

		// adversaires
		const adversaires = this.add.container(0, 0);

		// entite
		const entite = new Entite(this, 471, 162);
		adversaires.add(entite);
		entite.image_entite.setTexture("araigne", "araigne.png");

		// onSceneAwakeScript
		new OnSceneAwakeScript(this);

		// lists
		const liste_colision_vs_platforme = [entite, huipat];

		// colision_entites_vs_platformes
		this.physics.add.collider(liste_colision_vs_platforme, platformes.list);

		// startSceneActionScript (prefab fields)
		startSceneActionScript.sceneKey = "Niveau2";

		this.allies = allies;
		this.liste_colision_vs_platforme = liste_colision_vs_platforme;

		this.events.emit("scene-awake");
	}

	public allies!: Phaser.GameObjects.Layer;
	private liste_colision_vs_platforme!: Entite[];

	/* START-USER-CODE */

	// Write your code here

	create() {

		// this.editorCreateBase()
		this.editorCreate();
		console.log("NIVEAU 1!!!!!!!!!!!!!!!!!!!!");
		// this.allies.

		// this.joueurcontrollable = this.allies.getByName('huipat')
		// this.allies.add(this.entite)
		// console.log(this.entites_vs_platformes);
	}


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
