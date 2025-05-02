export class Tag {

  /* Languajes */
  static readonly JAVA = new Tag('Java', '#708090');              // SlateGray
  static readonly PYTHON = new Tag('Python', '#4682B4');          // SteelBlue
  static readonly JAVASCRIPT = new Tag('JavaScript', '#e0e010');  // Yellow
  static readonly TYPESCRIPT = new Tag('TypeScript', '#1E90FF');  // DodgerBlue

  /* Frameworks */
  static readonly SPRING = new Tag('Spring Boot', '#228B22');     // ForestGreen
  static readonly ANGULAR = new Tag('Angular', '#FF0000');        // Red
  static readonly NODEJS = new Tag('Node JS', '#b2b228');         // Olive
  static readonly FASTAPI = new Tag('Fast API', '#00FF00');       // Green

  /*Data Bases*/
  static readonly POSTGRESQL = new Tag('Postgres', '#A52A2A');    // Brown

  /* Tools */
  static readonly HTML = new Tag('Html', '#643321');              // OrangeRed
  static readonly CSS = new Tag('CSS', '#00BFFF');                // DeepSkyBlue
  static readonly BOOTSTRAP = new Tag('Bootstrap', '#8A2BE2');    // BlueViolet
  static readonly THYMELEAF = new Tag('Thymeleaf', '#006400');    // DarkGreen

  /*API*/
  static readonly OPENAI = new Tag('Open AI', '#FF1493');         // DeepPink
  static readonly GIPHY = new Tag('Giphy', '#FF69B4');            // HotPink
  static readonly WHATSAPP = new Tag('WhatsApp API', '#4CAF50');  // Green

  private constructor(private readonly key: string, public readonly color: string) {}

  toString() {
    return this.key;
  }

}
