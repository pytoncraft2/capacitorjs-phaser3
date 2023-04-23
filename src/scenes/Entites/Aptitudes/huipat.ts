import Entite from "../Entite"

export function __auto(entite: Entite, input: any, aptitudes: any) {
  entite.scene.tweens.add({
    targets: entite,
    alpha: 0.5,
    loop: -1,
    duration: 900,
    onLoop: () => console.log("LOOP")
  });
}