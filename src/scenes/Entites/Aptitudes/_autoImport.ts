type Touches = {
  [personnage:string]: {
    [toucheAction:string]: (joueur: any, input: any) => void
  }
};
/**
 * Stockage des touches qui active les aptitudes du personnage
 *
 * @example
 * Activer la fonction correspondant à la touche A du personnage fakhear:
 * ```
 * Aptitudes['fakhear'].A(Sprite, {a: true})
 * //active la fonction correspondant à la touche A des aptitudes de Fakhear
 * ```
 */
export const Aptitudes: Touches = {};
// export const Commandes: any = {};

 /**
  * Import tout les fichier du dossier `./src/server/game/scenes/Aptitudes`, excepté le fichier lui-même
  *
  * @remarks
  * le nom du fichier devient la clé pour l'objet `Aptitudes`<br>
  * le dossier `_utilitaire` contient les fonctions souvent utilisable pour tout les joueurs<br>
  * Toute les fonctions comportant deux underscord sont ajouté à l'objet `Aptitudes`
  * avec pour clé la valeur qu'il y a après l'undescord
  *
  * @example
  * Activer la fonction correspondant à la touche A du personnage fakhear:
  * ```
  * //Ici la valeur situé après les 2 undescord est "A"
  * export function cross__A(sprite, input) {
  *   if (input.a) setAnimation(fakhear, 'cross')
  * }
  * //Ce qui donnes au final un objet Aptidudes comme ci dessous:
  * Aptitudes['fakhear']['A'] = fn
  *
  * //Stoquage des commandes pour l'affichage coté client:
  * Aptitudes['fakhear']['commandes'] = { A: 'cross', Z: 'kick', E: 'dash', TAB: 'fusion' }
  * ```
  */
export const autoImport = [
  "araigne.ts",
  "huipat.ts",
  "fille.ts",
  "chauve_souris.ts",
].map(file => {
      import('./' + file).then((m) => {
          //le nom du fichier devient la clé pour l'objet (Aptitudes)
          const personnage = file.substring(0, file.lastIndexOf('.'))
          Object.values(m).forEach((fn:any, _i) => {
            
            //regarde si la fonction contient un undescore
            let index = fn.toString().split(' ')[1].indexOf("__")

            if (index != -1)
            {
              let CLE = fn.toString().split(' ')[1].substring(index+2).split('(')[0]
              if (Aptitudes[personnage] === undefined) (Aptitudes as any)[personnage] = {}
              //la CLE correspond au mot après l'underscord (example: Aptitudes['fakhear']['A'])
              const t: Touches = Aptitudes[personnage][CLE] = fn;
              //fn correspond à la fonction qui active l'aptitudes
            }
          })
      });
    });