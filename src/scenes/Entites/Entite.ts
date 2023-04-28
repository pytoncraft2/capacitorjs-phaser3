
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
import { Aptitudes, Touches } from "./Aptitudes/_autoImport";
import { DefautDirection } from "./Aptitudes/Defaut/defaut";
/* END-USER-IMPORTS */

export default interface Entite {

	 body: Phaser.Physics.Arcade.Body;
}

export default class Entite extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 0, y ?? 0);

		scene.physics.add.existing(this, false);
		this.body.gravity.y = 800;
		this.body.collideWorldBounds = true;
		this.body.setOffset(36, 22);
		this.body.setSize(148, 162, false);

		// image_entite
		const image_entite = scene.add.image(110, 103, "huipat", "huipat.png");
		image_entite.name = "image_entite";
		this.add(image_entite);

		this.image_entite = image_entite;
		// awake handler
		this.scene.events.once("scene-awake", () => this.awake());

		/* START-USER-CTR-CODE */
		this.scene.add.existing(this)
		/* END-USER-CTR-CODE */
	}

	public image_entite: Phaser.GameObjects.Image;
	public velociteX: number = 300;
	public modeAuto: boolean = false;
	public velociteY: number = 890;
	public tempsCumule: number = 0;
	public tempsEntreActions: number = 1000;

	/* START-USER-CODE */
	public Aptitudes: Touches = { ...Aptitudes }
	awake() {
		DefautDirection(this.Aptitudes, this);
		this.Aptitudes[this.image_entite.texture.key]?.InitialisationSpecifique?.call(this, this, this.Aptitudes);
		if (this.modeAuto) this.Aptitudes[this.image_entite.texture.key]?.modeAuto?.(this, {}, this.Aptitudes[this.image_entite.texture.key]);
	}

	actionToucheGauche() { this.verifEtExecutionTouche("toucheGauche") }
	actionToucheDroite() { this.verifEtExecutionTouche("toucheDroite") }
	actionToucheHaut() { this.verifEtExecutionTouche("toucheEspace") }
	actionToucheBas() { this.verifEtExecutionTouche("toucheBas") }
	aucuneAction() {}

	verifEtExecutionTouche(touche: string) {
		return this.Aptitudes[this.image_entite.texture.key]?.[touche]?.(this, {})
	}

	preUpdate() {
		if (this.modeAuto) {
			this.verifEtExecutionTouche("modeAuto")			
		}
		this.scene.physics.world.wrap(this, 300);
	}

	reinitialiseBody() {
		this.body.checkCollision.none = false;
		this.alpha = 1;
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
// this.colision_detecteur_remplie.object2 = [...(this.scene as any).platformesLayer.list, ...(this.scene as any).platformesLayer_2.list];
// this.colision_saut_platforme.object2 = [...(this.scene as any).platformesLayer.list, ...(this.scene as any).platformesLayer_2.list];
