// JavaScript source code
class Pais {
                         private ciudad: string;
                           private habitantes: string;
                              private comida: string;
                                private precio: number;

    constructor(
      ciudad: string = "",
      habitantes: string = "",
      comida: string = "",
      precio: number = 0
    ) {
      this.ciudad = ciudad;
      this.habitantes = habitantes;
      this.comida = comida;
      this.precio = precio;
    }

    getCiudad(): string {
      return this.ciudad;
    }

    setCiudad(ciudad: string): void {
      this.ciudad = ciudad;
    }

    getHabitantes(): string {
      return this.habitantes;
    }

    setHabitantes(habitantes: string): void {
      this.habitantes = habitantes;
    }

    getComida(): string {
      return this.comida;
    }

    setComida(comida: string): void {
      this.comida = comida;
    }

    getPrecio(): number {
      return this.precio;
    }

    setPrecio(precio: number): void {
      this.precio = precio;
    }

    getInfo(): string {
      return `Ciudad: ${this.ciudad}, Habitantes: ${this.habitantes}, Comida: ${this.comida}, Precio: ${this.precio}`;
    }
  }


                         const pais1 = new Pais();
                         pais1.setCiudad("Ecuador");
                         pais1.setHabitantes("17 millones");
                         pais1.setComida("Encebollado");
                         pais1.setPrecio(3);

  const pais2 = new Pais("Chile", "19 millones");
  pais2.setComida("Chorillana");
  pais2.setPrecio(13);

  console.log(pais1.getInfo());
  console.log(pais2.getInfo());