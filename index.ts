class Post {
  private _userName: string; // Atributo privado do tipo string
  private _titulo: string;
  private _dataPostagem: Date;
  private _numeroCurtidas: number;

  constructor(userName: string, titulo: string) {
    this._userName = userName;
    this._titulo = titulo;
    this._dataPostagem = new Date();
    this._numeroCurtidas = 0;
  }

  get userName() {
    return this._userName.toLocaleUpperCase();
  }

  set userName(userName: string) {
    this._userName = userName;
  }

  incrementarCurtidas() {
    this._numeroCurtidas += 1;
  }
}

const post1 = new Post("augustocesar", "Foto 1");

console.log(post1.userName);
post1.userName = "Maria";
console.log(post1.userName);

post1.incrementarCurtidas();
