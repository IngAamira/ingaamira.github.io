export class Tag {

  /* Backend languages */
  static readonly JAVA = new Tag('Java', '#4CAF50');           // Verde
  static readonly SPRING = new Tag('Spring Boot', '#8BC34A');  // Verde más claro
  static readonly PYTHON = new Tag('Python', '#FF4081');       // Rosa
  static readonly NODEJS = new Tag('Node.JS', '#FF5722');      // Naranja

  /* Frontend languages */
  static readonly TYPESCRIPT = new Tag('TypeScript', '#2196F3');  // Azul
  static readonly JAVASCRIPT = new Tag('JavaScript', '#FFC107');  // Amarillo
  static readonly ANGULAR = new Tag('Angular', '#E91E63');        // Rosa oscuro
  static readonly HTML = new Tag('Html', '#FF9800');              // Naranja
  static readonly CSS = new Tag('CSS', '#03A9F4');                // Azul claro

  /* Others */
  static readonly BOOTSTRAP = new Tag('Bootstrap', '#795548');   // Marrón

  private constructor(private readonly key: string, public readonly color: string) {}

  toString() {
    return this.key;
  }
}
