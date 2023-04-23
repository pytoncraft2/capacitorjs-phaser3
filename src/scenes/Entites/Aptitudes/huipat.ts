import Entite from "../Entite"
export function changeAlpha__HAUT(entite: Entite, input?: any) {
  entite.image_entite.setAlpha(entite.image_entite.alpha == 0.3 ? 1 : 0.3)
}

export function __auto(entite: Entite, input: any, aptitudes: any) {
  entite.scene.tweens.add({
    targets: entite,
    alpha: 0.5,
    loop: -1,
    duration: 900,
    onLoop: () => console.log("LOOP")
  });
}