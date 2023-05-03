import Entite from "../Entite"
import { deplacementBas, deplacementDroite, deplacementGauche, saut, stopEntite } from "./Defaut/deplacements"

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

export function __aucuneTouche(entite: Entite, aptitudes: any) {
  stopEntite(entite)
}