
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
		const platformePrefab = new PlatformePrefab(this, 1129, 571);
		platformes.add(platformePrefab);

		// platformePrefab_2
		const platformePrefab_2 = new PlatformePrefab(this, 384, 800);
		platformes.add(platformePrefab_2);

		// platformePrefab_3
		const platformePrefab_3 = new PlatformePrefab(this, 1536, 800);
		platformes.add(platformePrefab_3);

		// platformePrefab_4
		const platformePrefab_4 = new PlatformePrefab(this, 1152, 200);
		platformes.add(platformePrefab_4);

		// platformePrefab_1
		const platformePrefab_1 = new PlatformePrefab(this, 576, 400);
		platformePrefab_1.scaleX = 8;
		platformePrefab_1.scaleY = 0.20034715589478025;
		platformes.add(platformePrefab_1);

		// platformePrefab_5
		const platformePrefab_5 = new PlatformePrefab(this, 960, 1000);
		platformePrefab_5.scaleX = 15;
		platformePrefab_5.scaleY = 0.20034715589478025;
		platformes.add(platformePrefab_5);

		// groupe_allies
		const groupe_allies = this.add.layer();

		// huipat
		const huipat = new Entite(this, 1536, 200);
		huipat.name = "huipat";
		groupe_allies.add(huipat);

		// onPointerDownScript_1
		const onPointerDownScript_1 = new OnPointerDownScript(huipat.image_entite);

		// changeTextureScript
		new ChangeTextureScript(onPointerDownScript_1);

		// groupe_adversaires
		const groupe_adversaires = this.add.layer();

		// entite
		const entite = new Entite(this, 317, 198);
		groupe_adversaires.add(entite);
		entite.image_entite.setTexture("araigne", "araigne.png");

		// groupe_projectile_toiles
		const groupe_projectile_toiles = this.add.container(0, 0);

		// onSceneAwakeScript
		new OnSceneAwakeScript(this);

		// lists
		const liste_colision_vs_platforme = [huipat, entite];

		// colision_vs_platformes
		this.physics.add.collider(liste_colision_vs_platforme, platformes.list);

		// projectiles_vs_entites
		this.physics.add.collider(groupe_projectile_toiles.list, groupe_adversaires.list);

		// startSceneActionScript (prefab fields)
		startSceneActionScript.sceneKey = "Niveau2";

		// entite (prefab fields)
		entite.modeAuto = true;

		this.groupe_allies = groupe_allies;
		this.groupe_projectile_toiles = groupe_projectile_toiles;
		this.liste_colision_vs_platforme = liste_colision_vs_platforme;

		this.events.emit("scene-awake");
	}

	public groupe_allies!: Phaser.GameObjects.Layer;
	public groupe_projectile_toiles!: Phaser.GameObjects.Container;
	private liste_colision_vs_platforme!: Entite[];

	/* START-USER-CODE */

	create() {
		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
