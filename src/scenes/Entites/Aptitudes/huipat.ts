import Entite from "../Entite"
import ToileHuipatPrefab from "../Projectiles/ToileHuipatPrefab"
import ToileMouvante from "../Projectiles/ToileMouvante"
import { deplacementBas, deplacementDroite, deplacementGauche, saut, stopEntite } from "./Defaut/deplacements"
export function __InitialisationSpecifique(entite: Entite, aptitudes: any) {
  //@ts-ignore
  entite.toiles = entite.scene.physics.add.group({
    runChildUpdate: true,
    maxSize: 4
  })
  //@ts-ignore
  entite.scene.liste_colision_vs_platforme.push(entite.toile)
  console.log(entite.scene);
  
}


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
  const toile = entite.scene.physics.add.existing(new ToileMouvante(entite.scene, centerX, centerY));
  toile.body.setVelocity(entite.image_entite.flipX ? -1300 : 1300, -200);

  // (entite as any).scene.groupe_projectile_boule_toile.add(obj_entite);
  (entite as any).scene.groupe_projectile_toiles.add(toile);
}


export function __aucuneTouche(entite: Entite, aptitudes: any) {
  stopEntite(entite)
}
