import Entite from "../Entite"
export function __InitialisationSpecifique(entite: Entite, aptitudes:any) {
  console.log("APTITUDE",aptitudes);
}

export function __modeAuto(entite: Entite, input: any, aptitudes: any) {
  entite.scene.tweens.add({
    targets: entite,
    scale: 0.5,
    yoyo: true,
    loop: -1,
    duration: 900
  });
}