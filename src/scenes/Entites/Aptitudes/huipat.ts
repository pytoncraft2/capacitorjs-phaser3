import Entite from "../Entite"
import ToileHuipatPrefab from "../Projectiles/ToileHuipatPrefab"
import { deplacementBas, deplacementDroite, deplacementGauche, saut, stopEntite } from "./Defaut/deplacements"
export function __InitialisationSpecifique(entite: Entite, aptitudes: any) { }


export function __toucheDroite(entite: Entite, aptitudes: any) {
  deplacementDroite(entite)
}

export function __toucheGauche(entite: Entite, aptitudes: any) {
  deplacementGauche(entite)
}

export function __toucheHaut(entite: Entite, aptitudes: any) {
  saut(entite)
}

export function __toucheBas(entite: Entite, aptitudes: any) {
  deplacementBas(entite)
}

export function __toucheEspace(entite: Entite) {
  if (!entite.body.moves) return;
  const { centerX, centerY } = entite.image_entite.getBounds();
  const toile = new ToileHuipatPrefab(entite.scene, centerX, centerY);
  
  (entite as any).scene.groupe_projectile_toiles.add(toile);
  toile.body.setVelocity(entite.image_entite.flipX ? -1300 : 1300, -200);
  
  entite.scene.time.delayedCall(500, () => {
    (entite as any).scene.groupe_projectile_toiles.remove(toile, true)
  }, undefined, entite.scene);
}


export function __aucuneTouche(entite: Entite, aptitudes: any) {
  stopEntite(entite)
}
