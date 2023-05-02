import Entite from "../Entite";
export function __InitialisationSpecifique(entite: Entite, aptitudes: any) {
    console.log("INIT SPECIFIQUE CHAUVE SOURIS");
    entite.transformation(true, () => console.log("CALLBACK ENTRÉ"));
    // entite.transformation((changement: boolean) => {
      // entite.body.checkCollision.none = changement ? true : false;
    // })
    console.log(entite.image_entite.texture.key);
}
export function heyhey__toucheBas(entite: any, input?: any) {
  console.log("TOUCHE BAS CHAUVE");
}

export function __toucheEspace(entite: Entite, aptitudes: any) {
  console.log("TOUCHE ATTAQUE CHAUVE CHAUVE!!!");
}