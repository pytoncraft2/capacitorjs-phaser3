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
  // const toile = new ToileHuipatPrefab(entite.scene, centerX, centerY);
      // const kunai = entite.scene.add.existing(new ToileMouvante(entite.scene, centerX, centerY));
      // .setData({ ClientId: entite.ClientID, degat: entite.degat}))
      // .setFlipX(entite.flipX)
      // entite.scene.physics.add.existing(kunai);

    const obj_entite = entite.scene.physics.add.existing(new ToileMouvante(entite.scene, centerX, centerY));
  entite.scene.add.existing(obj_entite);
    //@ts-ignore
    entite.toiles.add(obj_entite)
    //@ts-ignore
  console.log(entite.toiles);
    // .setData({ ClientId: entite.ClientID, degat: entite.degat}))
    // .setFlipX(entite.flipX)
    // entite.scene.physics.add.existing(obj_entite);
    // entite.scene.physics.add.overlap(obj_entite, (entite.scene as any)[`${entite.cible_courante}`], function(_obj_entite, _ennemie: any) {
    //   if (_ennemie.sprite !== entite.sprite) {
    //     _ennemie.dommage(_obj_entite.getData('degat'))
    //     _obj_entite.setData('degat', 0)
    //   }
    // }, undefined, entite);
  // const toileMouvante = new ToileMouvante(entite.scene, centerX, centerY);
  // entite.scene.add.existing(toileMouvante)
  // const boule = entite.scene.add.existing(new BouleClass(entite.scene, entite.flipX ? entite.x + 80 : entite.x - 80, entite.y - 160, "entite", `${(Math.random() + 1).toString(36).substring(7)}`).setData({ ClientId: entite.ClientID, puissance: 2 }))
  // entite.boulesEnMain.add(boule);
  // (boule.body as any).setAllowGravity(false);

  // setAnimation(entite, 'entite_preparation_attaque')

  
  // (entite as any).scene.groupe_projectile_toiles.add(toile);
  // (entite as any).scene.groupe_projectile_toiles.add(toileMouvante);
  // toile.body.setVelocity(entite.image_entite.flipX ? -1300 : 1300, -200);
  
  // entite.scene.time.delayedCall(500, () => {
    // (entite as any).scene.groupe_projectile_toiles.remove(toile, true)
  // }, undefined, entite.scene);
}


export function __aucuneTouche(entite: Entite, aptitudes: any) {
  stopEntite(entite)
}
