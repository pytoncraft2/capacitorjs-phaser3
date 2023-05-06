
// You can write more code here

/* START OF COMPILED CODE */

import BaseNiveaux from "../BaseNiveaux";
import OnPointerDownScript from "../../../script-nodes-basic/OnPointerDownScript";
import StartSceneActionScript from "../../../script-nodes-basic/StartSceneActionScript";
import PlatformePrefab from "../ObjetsNiveaux/PlatformePrefab";
import Entite from "../../Entites/Entite";
import ChangeTextureScript from "../../../script-nodes/ChangeTextureScript";
import ToileMouvante from "../../Entites/Projectiles/ToileMouvante";
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
		const huipat = new Entite(this, 688, 79);
		huipat.name = "huipat";
		groupe_allies.add(huipat);

		// onPointerDownScript_1
		const onPointerDownScript_1 = new OnPointerDownScript(huipat.image_entite);

		// changeTextureScript
		new ChangeTextureScript(onPointerDownScript_1);

		// groupe_adversaires
		const groupe_adversaires = this.add.layer();

		// entite
		const entite = new Entite(this, 1109, 65);
		groupe_adversaires.add(entite);
		entite.image_entite.setTexture("araigne", "araigne.png");

		// entite_1
		const entite_1 = new Entite(this, 192, 200);
		groupe_adversaires.add(entite_1);
		entite_1.image_entite.setTexture("araigne", "araigne.png");

		// entite_2
		const entite_2 = new Entite(this, 1576, 664);
		groupe_adversaires.add(entite_2);
		entite_2.image_entite.setTexture("araigne", "araigne.png");

		// entite_3
		const entite_3 = new Entite(this, 331, 532);
		groupe_adversaires.add(entite_3);
		entite_3.image_entite.setTexture("araigne", "araigne.png");

		// entite_4
		const entite_4 = new Entite(this, 1017, 453);
		groupe_adversaires.add(entite_4);
		entite_4.image_entite.setTexture("araigne", "araigne.png");

		// groupe_projectile_toiles
		const groupe_projectile_toiles = this.add.container(0, 0);

		// groupe_projectile_boule_toile
		const groupe_projectile_boule_toile = this.add.container(0, 0);

		// toileMouvante
		const toileMouvante = new ToileMouvante(this, 836, 858);
		groupe_projectile_boule_toile.add(toileMouvante);

		// onSceneAwakeScript
		new OnSceneAwakeScript(this);

		// lists
		const liste_colision_vs_platforme = [huipat, entite, toileMouvante, entite_1, entite_4, entite_3, entite_2];
		const liste_colision_rectangle_detection_vs_entites: Array<any> = [];

		// colision_vs_platformes
		this.physics.add.collider(liste_colision_vs_platforme, platformes.list);

		// projectiles_vs_entites
		this.physics.add.overlap(groupe_projectile_toiles.list, groupe_adversaires.list, this.superpositionToileVSentite as any);

		// rectangle_interaction_proche_vs_entites
		this.physics.add.collider(groupe_adversaires.list, groupe_allies.list.map((e) => (e as Entite).rectangle_zone_interaction), () => console.log("TOUCHE"));

		// startSceneActionScript (prefab fields)
		startSceneActionScript.sceneKey = "Niveau2";

		// entite (prefab fields)
		entite.modeAuto = true;

		// entite_1 (prefab fields)
		entite_1.modeAuto = true;

		// entite_2 (prefab fields)
		entite_2.modeAuto = true;

		// entite_3 (prefab fields)
		entite_3.modeAuto = true;

		// entite_4 (prefab fields)
		entite_4.modeAuto = true;

		this.groupe_allies = groupe_allies;
		this.groupe_projectile_toiles = groupe_projectile_toiles;
		this.toileMouvante = toileMouvante;
		this.groupe_projectile_boule_toile = groupe_projectile_boule_toile;
		this.liste_colision_vs_platforme = liste_colision_vs_platforme;
		this.liste_colision_rectangle_detection_vs_entites = liste_colision_rectangle_detection_vs_entites;

		this.events.emit("scene-awake");
	}

	public groupe_allies!: Phaser.GameObjects.Layer;
	public groupe_projectile_toiles!: Phaser.GameObjects.Container;
	private toileMouvante!: ToileMouvante;
	public groupe_projectile_boule_toile!: Phaser.GameObjects.Container;
	private liste_colision_vs_platforme!: Array<Entite|ToileMouvante>;
	private liste_colision_rectangle_detection_vs_entites!: Array<any>;

	/* START-USER-CODE */

	create() {
		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
