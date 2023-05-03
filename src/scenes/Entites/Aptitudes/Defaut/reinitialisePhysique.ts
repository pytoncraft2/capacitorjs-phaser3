import Entite from "../../Entite";

export const initPhysique = (entite: Entite, activation: boolean, cb: (activation: boolean) => void) => {
(entite.physiqueEtParametreSpecifique = (active) => {
    cb(active)
  })(activation)
}