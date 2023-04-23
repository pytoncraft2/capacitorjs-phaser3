
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
import { Aptitudes } from "./Aptitudes/_autoImport";
import { DefautDirection } from "./Aptitudes/Defaut/defaut";
/* END-USER-IMPORTS */

export default interface Entite {

	 body: Phaser.Physics.Arcade.Body;
}

export default class Entite extends Phaser.GameObjects.Container {

	constructor(scene: Phaser.Scene, x?: number, y?: number) {
		super(scene, x ?? 0, y ?? 0);

		scene.physics.add.existing(this, false);
		this.body.setOffset(36, 22);
		this.body.setSize(148, 162, false);

		// image_entite
		const image_entite = scene.add.image(110, 103, "huipat", "huipat.png");
		image_entite.name = "image_entite";
		this.add(image_entite);

		this.image_entite = image_entite;

		/* START-USER-CTR-CODE */
		DefautDirection(Aptitudes, this)
		Aptitudes[this.image_entite.texture.key]?.InitialisationSpecifique?.call(this, this, Aptitudes);
		Aptitudes[this.image_entite.texture.key]?.auto?.(this, {}, Aptitudes[this.image_entite.texture.key]);
		/* END-USER-CTR-CODE */
	}

	public image_entite: Phaser.GameObjects.Image;
	public vitesseDeplacement: number = 300;

	/* START-USER-CODE */
	actionToucheGauche() { this.verifEtExecutionTouche("toucheGauche") }
	actionToucheDroite() { this.verifEtExecutionTouche("toucheDroite") }
	actionToucheHaut() { this.verifEtExecutionTouche("toucheHaut") }
	actionToucheBas() { this.verifEtExecutionTouche("toucheBas") }
	aucuneAction() {}

	verifEtExecutionTouche(touche: string) {
		return Aptitudes[this.image_entite.texture.key]?.[touche]?.(this, {})
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
// this.colision_detecteur_remplie.object2 = [...(this.scene as any).platformesLayer.list, ...(this.scene as any).platformesLayer_2.list];
// this.colision_saut_platforme.object2 = [...(this.scene as any).platformesLayer.list, ...(this.scene as any).platformesLayer_2.list];
