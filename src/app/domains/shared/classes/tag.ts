export class Tag {

  /* Backend */
  static readonly JAVA = new Tag('Java', '#708090');           // SlateGray
  static readonly SPRING = new Tag('Spring Boot', '#008000');  // Green
  static readonly PYTHON = new Tag('Python', '#4682B4');       // SteelBlue
  static readonly NODEJS = new Tag('Node.JS', '#808000');      // Olive

  /* Frontend */
  static readonly TYPESCRIPT = new Tag('TypeScript', '#1E90FF');  // DodgerBlue
  static readonly JAVASCRIPT = new Tag('JavaScript', '#FFFF00');  // Yellow
  static readonly ANGULAR = new Tag('Angular', '#FF0000');        // Red
  static readonly HTML = new Tag('Html', '#FF4500');              // OrangeRed
  static readonly CSS = new Tag('CSS', '#00BFFF	');               // DeepSkyBlue

  /* Others */
  static readonly BOOTSTRAP = new Tag('Bootstrap', '#8A2BE2');   // BlueViolet

  private constructor(private readonly key: string, public readonly color: string) {}

  toString() {
    return this.key;
  }

}
