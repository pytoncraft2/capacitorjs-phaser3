import Entite from "../Entite"
export function __auto(entite: Entite, input: any, aptitudes: any) {
  entite.scene.tweens.add({
    targets: entite,
    scale: 0.5,
    yoyo: true,
    loop: -1,
    duration: 900
  });
}