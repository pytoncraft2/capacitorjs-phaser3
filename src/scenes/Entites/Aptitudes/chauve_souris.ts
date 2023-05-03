import Entite from "../Entite";
import { initPhysique } from "./Defaut/reinitialisePhysique";
export function __InitialisationSpecifique(entite: Entite, aptitudes: any) {
  initPhysique(entite, true, (activation: boolean) => {
    entite.body.checkCollision.none = activation ? true : false
  })
}
export function heyhey__toucheBas(entite: any, input?: any) {
  console.log("TOUCHE BAS CHAUVE");
}

export function __toucheEspace(entite: Entite, aptitudes: any) {
  console.log("TOUCHE ATTAQUE CHAUVE CHAUVE!!!");
}