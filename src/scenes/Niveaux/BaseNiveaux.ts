
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
import Entite from "../Entites/Entite";
/* END-USER-IMPORTS */

export default class BaseNiveaux extends Phaser.Scene {

	editorCreateBase(): void {

		// toucheEspace
		const toucheEspace = this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

		// toucheGauche
		const toucheGauche = this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);

		// toucheDroite
		const toucheDroite = this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

		// toucheHaut
		const toucheHaut = this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.UP);

		// toucheBas
		const toucheBas = this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);

		this.toucheEspace = toucheEspace;
		this.toucheGauche = toucheGauche;
		this.toucheDroite = toucheDroite;
		this.toucheHaut = toucheHaut;
		this.toucheBas = toucheBas;

		this.events.emit("scene-awake");
	}

	private toucheEspace!: Phaser.Input.Keyboard.Key;
	private toucheGauche!: Phaser.Input.Keyboard.Key;
	private toucheDroite!: Phaser.Input.Keyboard.Key;
	private toucheHaut!: Phaser.Input.Keyboard.Key;
	private toucheBas!: Phaser.Input.Keyboard.Key;

	/* START-USER-CODE */

	// Write your code here
	public entiteControllable!: Entite
	private leftDown = false;
	private rightDown = false;
	private upDown = false;
	private downDown = false;
	private spaceDown = false;
	private spaceDownTouch = false;
	private isMobile = false;

	init() {
		this.editorCreateBase();
		this.physics.world.setBoundsCollision(true, true, false, false)
		console.log("INIT BASE_NIVEAUX");
	}

	update(time: number, delta: number): void {
		this.observeToucheDeplacement()
	}

	observeToucheDeplacement() {
		this.leftDown = this.leftDown || this.isKeyDown(this.toucheGauche);
		this.rightDown = this.rightDown || this.isKeyDown(this.toucheDroite);
		this.upDown = this.upDown || this.isKeyDown(this.toucheHaut) ;
		this.downDown = this.downDown || this.isKeyDown(this.toucheBas);
		if (this.isMobile) {
			this.spaceDown = this.spaceDown || this.isKeyDown(this.toucheEspace) || this.spaceDownTouch;
		}

		if (Phaser.Input.Keyboard.JustDown(this.toucheEspace)) {
			// touche espace ou touche d'attaque
			this.entiteControllable.actionToucheEspace()
		}

		if (this.isMobile) {
			if (this.spaceDown) {
				// this.entiteControllable.envoieProjectileToile()
				this.spaceDown = false;
			}
		}


		if (this.entiteControllable) {
			if (this.leftDown) { this.entiteControllable.actionToucheGauche() }
			else if (this.rightDown) { this.entiteControllable.actionToucheDroite() }
			else if (this.downDown) { this.entiteControllable.actionToucheBas(); }
			else { /*this.entiteControllable.aucuneTouche()*/ }

			if (this.upDown && this.entiteControllable.body.touching.down) {
				this.entiteControllable.actionToucheHaut();
			}
		}

		if (!this.isMobile) {
			this.leftDown = this.rightDown = this.upDown = this.downDown = this.spaceDown = this.spaceDownTouch = false;
		}
	}

	private isKeyDown(key?: Phaser.Input.Keyboard.Key) {

		if (key) {

			return key.isDown;
		}

		return false;
	}

	overlapAction(rectangleZoneDetection: any, ennemie: Phaser.Physics.Arcade.Sprite) {
		rectangleZoneDetection.action(ennemie)
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
