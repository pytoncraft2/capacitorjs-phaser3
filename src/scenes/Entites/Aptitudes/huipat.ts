import Entite from "../Entite"
import { deplacementBas, deplacementDroite, deplacementGauche, saut } from "./Defaut/deplacements"
export function __InitialisationSpecifique(entite: Entite, aptitudes: any) {}

export function __toucheEspace(entite: Entite, aptitudes: any) { }

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