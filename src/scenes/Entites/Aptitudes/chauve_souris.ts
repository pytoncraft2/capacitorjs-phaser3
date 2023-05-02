import Entite from "../Entite";
export function __InitialisationSpecifique(entite: Entite, aptitudes: any) {
  (entite.physiqueEtParametreSpecifique = (activation: boolean) => {
    entite.body.checkCollision.none = activation ? true : false;
  })(true);
}
export function heyhey__toucheBas(entite: any, input?: any) {
  console.log("TOUCHE BAS CHAUVE");
}

export function __toucheEspace(entite: Entite, aptitudes: any) {
  console.log("TOUCHE ATTAQUE CHAUVE CHAUVE!!!");
}