
// You can write more code here

/* START OF COMPILED CODE */

import ScriptNode from "../script-nodes-basic/ScriptNode";
import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class ChangeTextureScript extends ScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	changeTextureTween!: Phaser.Tweens.TweenChain
	aChange!: boolean

	override get gameObject() {

		return super.gameObject as Phaser.Physics.Arcade.Sprite;
	}

	protected override awake(): void {
		console.log("AWAKE");
        const chain = this.scene.tweens.chain({
            targets: this.gameObject,
			paused: true,
            tweens: [
                {
                    scale: 0,
                    duration: 500,
                    delay: 500,
					angle: 360 * 2,
					onComplete: () => {
						const texture = this.gameObject.texture.key === 'araigne' ? 'huipat' : 'araigne';
						this.gameObject.setTexture(texture);						
					}
                },
                {
                    scale: 1,
                    duration: 500
                },
            ]
        });
		// const tw = this.scene.add.tween({
		// 	targets: this.gameObject,
		// 	scale: 0,
		// 	duration: 1000,
		// 	yoyo: true,
		// 	paused: true,
		// 	onYoyoParams: [this.aChange],
		// 	onYoyo: function(tween: Phaser.Tweens.Tween, gameObject: Phaser.Physics.Arcade.Sprite, key, current, previous, aChange) {
		// 			// console.log("YOYO1");
		// 			console.log(aChange);
		// 			aChange = true;
		// 			console.log(aChange);
					
					
		// 		// if (!aChange) {
		// 		// 	console.log("CHANGEMENT");
					
		// 		// 	// console.log("YOYO2");
					
		// 		// 	const texture = gameObject.texture.key === 'araigne' ? 'huipat' : 'araigne';
		// 		// 	gameObject.setTexture(texture);
		// 		// 	aChange = true;
		// 		// }
		// 	}
		// });	
		this.changeTextureTween = chain;
		// this.changeTextureTimeLine = this.scene.add.timeline([
		// 	{
		// 		at: 0,
		// 		tween: {
		// 			scale: 0,
		// 			targets: this.gameObject,
		// 			duration: 500,
		// 			yoyo: true
		// 		}
		// 	},
		// 	{
		// 		at: 500,
		// 		run: () => {
		// 			const texture = this.gameObject.texture.key === 'araigne' ? 'huipat' : 'araigne';
		// 			this.gameObject.setTexture(texture);
		// 		},
		// 	},
		// ]);
	}

	override execute(args?: any): void {
		console.log("EXEXUTE");
		
		
		// this.gameObject.body?.setSize(this.gameObject.width, this.gameObject.height)
		// this.gameObject.refreshBody()

		// console.log(this.changeTextureTween.isPaused());
		// console.log(this.changeTextureTween.play());
		

		// console.log(this.changeTextureTween.resetTweens());
		
		// if (this.changeTextureTween.isPaused() || !this.changeTextureTween.isPlaying()) {
			// console.log("GO PLAY");
			
			// console.log(this.changeTextureTween);
			
			// this.changeTextureTween.play()
			this.changeTextureTween.resetTweens()
			this.changeTextureTween.play()
		// }
// this.changeTextureTimeLine.play();
// console.log(this.changeTextureTimeLine.isPlaying);

	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
