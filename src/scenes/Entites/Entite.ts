
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
import { Aptitudes, Touches } from "./Aptitudes/_autoImport";
import ToileHuipatPrefab from "./Projectiles/ToileHuipatPrefab";
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
		this.body.setSize(148, 162, false);

		// image_entite
		const image_entite = scene.add.image(0, 0, "huipat", "huipat.png");
		image_entite.name = "image_entite";
		image_entite.setOrigin(0, 0);
		this.add(image_entite);

		// rectangle_zone_interaction
		const rectangle_zone_interaction = scene.add.rectangle(207, 86, 128, 128);
		this.add(rectangle_zone_interaction);

		// texte_compteur_blocage
		const texte_compteur_blocage = scene.add.text(65, 0, "", {});
		texte_compteur_blocage.setOrigin(0.5, 1);
		texte_compteur_blocage.text = "0/5";
		texte_compteur_blocage.setStyle({ "color": "#000000ff" });
		this.add(texte_compteur_blocage);

		this.image_entite = image_entite;
		this.rectangle_zone_interaction = rectangle_zone_interaction;
		this.texte_compteur_blocage = texte_compteur_blocage;
		// awake handler
		this.scene.events.once("scene-awake", () => this.awake());

		/* START-USER-CTR-CODE */
		this.scene.add.existing(this)
		/* END-USER-CTR-CODE */
	}

	public image_entite: Phaser.GameObjects.Image;
	public rectangle_zone_interaction: Phaser.GameObjects.Rectangle;
	public texte_compteur_blocage: Phaser.GameObjects.Text;
	public velociteX: number = 300;
	public modeAuto: boolean = false;
	public velociteY: number = 890;
	public tempsCumule: number = 0;
	public tempsEntreActions: number = 1000;
	public nombreEnchainementBlocage: number = 0;
	public maxEnchainementPossible: number = 7;

	/* START-USER-CODE */
	public Aptitudes: Touches = { ...Aptitudes }
	awake() {
		this.Aptitudes[this.image_entite.texture.key]?.InitialisationSpecifique?.call(this, this, this.Aptitudes);
		if (this.modeAuto) this.Aptitudes[this.image_entite.texture.key]?.modeAuto?.(this, {}, this.Aptitudes[this.image_entite.texture.key]);
		this.body.setSize(this.image_entite.frame.width, this.image_entite.height)
	}

	actionToucheEspace() { this.verifEtExecutionTouche("toucheEspace") }
	actionToucheGauche() { this.verifEtExecutionTouche("toucheGauche") }
	actionToucheDroite() { this.verifEtExecutionTouche("toucheDroite") }
	actionToucheHaut() { this.verifEtExecutionTouche("toucheHaut") }
	actionToucheBas() { this.verifEtExecutionTouche("toucheBas") }
	aucuneTouche() { this.verifEtExecutionTouche("aucuneTouche") }

	verifEtExecutionTouche(touche: string) {
		return this.Aptitudes[this.image_entite.texture.key]?.[touche]?.(this, {})
	}

	preUpdate() {
		if (this.modeAuto) {
			this.verifEtExecutionTouche("modeAuto")			
		}
		this.scene.physics.world.wrap(this, 300);
	}

	physiqueEtParametreSpecifique(activation: boolean) { }

	enchainementBlocage(_degat: number, toile: ToileHuipatPrefab) {
		if (this.nombreEnchainementBlocage === 0) {
			this.body.moves = false;
			this.nombreEnchainementBlocage += 1;
			this.texte_compteur_blocage.text = `${this.nombreEnchainementBlocage}/${this.maxEnchainementPossible}`
		} else if (this.nombreEnchainementBlocage < this.maxEnchainementPossible) {
			this.nombreEnchainementBlocage += 1;
			this.texte_compteur_blocage.text = `${this.nombreEnchainementBlocage}/${this.maxEnchainementPossible}`
		} else if (this.nombreEnchainementBlocage == this.maxEnchainementPossible) {
			this.image_entite.setTintFill(0x008000);
		}
		// this.diminutionTailleToile()
		toile.destroy();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
// this.colision_detecteur_remplie.object2 = [...(this.scene as any).platformesLayer.list, ...(this.scene as any).platformesLayer_2.list];
// this.colision_saut_platforme.object2 = [...(this.scene as any).platformesLayer.list, ...(this.scene as any).platformesLayer_2.list];
