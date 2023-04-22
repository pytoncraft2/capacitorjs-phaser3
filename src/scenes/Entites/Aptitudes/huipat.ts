import Entite from "../Entite"
export function changeAlpha__HAUT(entite: Entite, input?: any) {
  entite.image_entite.setAlpha(entite.image_entite.alpha == 0.3 ? 1 : 0.3)
}