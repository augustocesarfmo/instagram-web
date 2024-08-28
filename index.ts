import { randomUUID } from "node:crypto";
import { faker } from "@faker-js/faker";

class Post {
  private _id: string;
  private _userName: string; // Atributo privado do tipo string
  private _description: string;
  private _dataPostagem: Date;
  private _numeroCurtidas: number;

  constructor(userName: string, titulo: string) {
    this._userName = userName.toLowerCase();
    this._description = titulo;
    this._dataPostagem = new Date();
    this._numeroCurtidas = 0;
    this._id = randomUUID();
  }

  get id() {
    return this._id;
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

for (let index = 0; index < 15; index++) {
  const userName = faker.person.firstName();
  const description = faker.lorem.word();

  const post = new Post(userName, description);

  console.log(post);
}
