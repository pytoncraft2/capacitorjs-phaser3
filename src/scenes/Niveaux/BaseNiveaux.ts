
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
import Entite from "../Entites/Entite";
import ToileHuipatPrefab from "../Entites/Projectiles/ToileHuipatPrefab";
import ToileMouvante from "../Entites/Projectiles/ToileMouvante";
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
		this.upDown = this.upDown || this.isKeyDown(this.toucheHaut);
		this.downDown = this.downDown || this.isKeyDown(this.toucheBas);
		if (this.isMobile) {
			this.spaceDown = this.spaceDown || this.isKeyDown(this.toucheEspace) || this.spaceDownTouch;
		}

		if (this.toucheJustePresse(this.toucheEspace)) {
			// touche espace ou touche d'attaque
			this.entiteControllable.actionToucheEspace(true)
		}

		if (this.toucheJusteReleve(this.toucheEspace)) {
			// touche espace ou touche d'attaque
			this.entiteControllable.actionToucheEspace(false)
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
			else if (this.toucheJustePresse(this.toucheBas)) { this.entiteControllable.actionToucheBas(); }
			else { this.entiteControllable.aucuneTouche() }

			if (this.toucheJustePresse(this.toucheHaut)) {
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

	private toucheJustePresse(touche: Phaser.Input.Keyboard.Key) {
		return Phaser.Input.Keyboard.JustDown(touche)
	}

	private toucheJusteReleve(touche: Phaser.Input.Keyboard.Key) {
		return Phaser.Input.Keyboard.JustUp(touche)
	}

	overlapAction(rectangleZoneDetection: any, ennemie: Phaser.Physics.Arcade.Sprite) {
		rectangleZoneDetection.action(ennemie)
	}

	superpositionToileVSentite(toile: ToileMouvante, entite: Entite) {
		entite.enchainementBlocage(1, toile)
		
		// entite.vsToile(toile)
		// console.log("TOUCHE", toile, "VS", entite);
	}

	verifToucheEntiteAdverse(allie: any, adversaire: Entite) {
		
			if (adversaire.refToile?.ejectable)
			{
				console.log("EJECTABLE !!");
				
				return true;
			}
			else
			{
				console.log("NOP !!");
				return false;
			}
	}

	toucheEntiteAdverse(allie: Entite, adversaire: Entite) {

		// obj2.timerDiminutionToile?.remove();
		// obj2.body.moves = true;
		adversaire.body.checkCollision.none = true;


		adversaire.scene.tweens.add({
			targets: [adversaire.image_entite],
			// angle: allie.parentContainer.huipat.flipX ? -960 : 960,
			angle: 960,
			alpha: 0,
			ease: 'Linear',
			duration: 1000
		});
		// adversaire.body.setVelocity(-500, -1800);
		console.log(adversaire);
		const toile = adversaire.refToile;
		const entite = adversaire.refToile?.refEntite;
		
		if (adversaire.refToile) {
		adversaire.refToile.body.setVelocity(entite?.image_entite.flipX ? -900 : 900, -500);
			// console.log(adversaire.refToile?.refEntite);
			adversaire.refToile.body.enable = true;
			// adversaire.refToile.body.setVelocity(-500, -1800);
			//@ts-ignore
			adversaire.scene.groupe_projectile_boule_toile.add(adversaire.refToile)
			//@ts-ignore
			adversaire.scene.groupe_projectile_toiles.remove(adversaire.refToile)
		}
		adversaire.scene.time.delayedCall(3300, () => {

			// this.groupe_arraigne.remove(obj2, true)
			console.log("DESTRUCTION");
			//@ts-ignore
			adversaire.scene.groupe_projectile_boule_toile.remove(adversaire.refToile, true)
			

			// obj2.active && obj2.destroy(true);
			// obj1.parentContainer.killedEnnemy += 1;
			// if (obj1.parentContainer.killedEnnemy == this.liste_fonds_ecran[score.niveau].nombreEnnemieAVaincre) {
				// score.niveauSuivant();
				// obj1.parentContainer.killedEnnemy = 0;
			// }
		})
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
