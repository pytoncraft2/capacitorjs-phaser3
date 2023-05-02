import Entite from "../../Entite";

export const init = (entite: Entite, activation: boolean, cb: (activation: boolean) => void) => {
(entite.physiqueEtParametreSpecifique = (active) => {
    cb(active)
  })(activation)
}