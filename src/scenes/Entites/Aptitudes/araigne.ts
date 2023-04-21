import Entite from "../Entite";
export function __InitialisationSpecifique(entite: Entite, Aptitudes?: any) {
  Aptitudes[entite.image_entite.texture.key].toucheHaut = function (_twitchman: Entite) {
    _twitchman.image_entite.setAlpha(0.5)
    // _twitchman.survole = true
    // _twitchman.scene.time.delayedCall(410, () => {
    //   _twitchman.survole = false
    // })
  }
}

export function deplacementGauche__GAUCHE(entite: Entite, input?: any) {
  entite.body.setVelocityX(-900)
}

export function deplacementDroite__DROITE(entite: Entite, input?: any) {
  entite.body.setVelocityX(900)
}