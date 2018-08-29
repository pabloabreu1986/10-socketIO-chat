'use-strict';

  /************************
 *       Ej._USUARIO       *
 *   ===================    *
 * {                        *
 *  id: 'Akhsggd-ewwgdy7h', *
 *  nombre: 'Pablo',        *
 *  sala: 'Videojuegos'     *
 * }                        *
 *                          *
  **************************/

class Usuarios {

  constructor(){
    this.personas = [];
  }

  agregarPersona(id, nombre){
    let persona = {
      id,
      nombre
    };

    this.personas.push(persona);

    return this.personas;
  }

  getPersona(id){
    let persona = this.personas.filter(per => per.id === id)[0];
    return persona;
  }

}//fin Usuarios



module.exports = {
  Usuarios
}