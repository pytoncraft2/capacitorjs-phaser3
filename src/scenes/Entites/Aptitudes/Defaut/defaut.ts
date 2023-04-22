import Entite from "../../Entite"

export const DefautDirection = (Aptitudes: any, entite: Entite) => {
const cle_image = entite.image_entite.texture.key
  Aptitudes[cle_image].toucheDroite = (entite: any, input: any) => {
    console.log("TOUCHE DROITE DEFAUT");
    
    // direction(input.right_debut, input.right_fin, entite, input, true)
  }
  Aptitudes[cle_image].toucheGauche = (entite: any, input: any) => {
    // direction(input.left_debut, input.left_fin, entite, input, false)
    console.log("GAUCHE");
    
  }
    Aptitudes[cle_image].toucheEspace = (entite: Entite, input: any) => {
      // if (entite.body.touching.down) {
        entite.body.setVelocityY(-1150);
        // entite.play("jump")
      // }
      // input.space = false
    }
  Aptitudes[cle_image].toucheHaut = (entite: any, input: any) => {
    changementEtage(entite, -2600, 1000)
    input.up = false;
  }
  Aptitudes[cle_image].toucheBas = (entite: any, input: any) => {
    changementEtage(entite, 900, 500)
    input.down = false;
  }
}

function direction(debut: boolean, fin: boolean, entite: any, _input: any, dir: boolean) {
  if (debut) {
    entite.setFlipX(!dir)
    entite.play('walk', true)
  }
  else if (fin) {
    entite.body.setVelocityX(0)
    entite.play('idle_walk', true)
  }
  else entite.body.setVelocityX(dir ? (entite as any).vel : -(entite as any).vel)
}

function changementEtage(entite: any, velocite: any, delai: any){
    entite.body.checkCollision.none = true;
    entite.body.setVelocityY(velocite);
    entite.scene.time.delayedCall(delai, () => {
      entite.body.checkCollision.none = false;
    }, null, entite);
}