import Entite from "../Entite";
export function __InitialisationSpecifique(entite: Entite, aptitudes: any) {
    console.log("INIT SPECIFIQUE CHAUVE SOURIS");
    // entite.body.checkCollision.none = true;
    console.log(entite.image_entite.texture.key);
    
  entite.Aptitudes[entite.image_entite.texture.key].toucheBas = (_entite, input) => {
    _entite.image_entite.setAlpha(0.2)
  }
}
export function toucheEspace__toucheBas(entite: any, input?: any) {
    entite.setAlpha(0.5)
}