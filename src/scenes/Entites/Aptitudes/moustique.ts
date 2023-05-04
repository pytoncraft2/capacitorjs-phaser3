import Entite from "../Entite"
import { deplacementBas, deplacementDroite, deplacementGauche, saut, stopEntite } from "./Defaut/deplacements"
import { initPhysique } from "./Defaut/reinitialisePhysique";

const accelerationVersLeHaut = -200
const accelerationVersLeBas = 200

export function __InitialisationSpecifique(entite: Entite, aptitudes: any) {
  const {x, y} = entite.body.gravity;
  initPhysique(entite, true, (activation: boolean) => {
    entite.body.setGravity(activation ? 0 : x, activation ? -y : y)
  })
}

export function __toucheDroite(entite: Entite, aptitudes: any) {
  deplacementDroite(entite)
}

export function __toucheGauche(entite: Entite, aptitudes: any) {
  deplacementGauche(entite)
}

export function __toucheHaut(entite: Entite, aptitudes: any) {
    entite.body.setVelocityY(accelerationVersLeHaut)
}

export function __toucheBas(entite: Entite, aptitudes: any) {
    entite.body.setVelocityY(accelerationVersLeBas)
}

export function __aucuneTouche(entite: Entite, aptitudes: any) {
  stopEntite(entite)
}