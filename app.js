class Golondrina {
    constructor() {
      this._energia = 100
    }
  
    energia() {
      return this._energia
    }
  
    volar(kilometros) {
      this._energia -= kilometros * 2
    }
  
    comer(gramos) {
      this._energia += gramos
    }
  
    estaDebil() {
      return this._energia < 50
    }
  
    estaFeliz() {
      return this._energia > 90
    }
  
    haceLoQueQuieras() {
      if (this.estaFeliz()) {
        this.volar(10)
      }
      else if (this.estaDebil()) {
        comer(50)
      }
    }

    saludar(){
        document.write("Holaaa")
    }

  
    // agregar estaDebil, estaFeliz,
    // haceLoQueQuieras
    //
    // esta debil si energia < 50
    // esta feliz si energia > 90
    // si está feliz vuela 10 kms, si está debil come 50 gramos
  
  }
  
  module.exports = { Golondrina }