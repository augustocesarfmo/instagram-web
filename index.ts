import { randomUUID } from "node:crypto";
import { faker } from "@faker-js/faker";

class Post {
  private _id: string;
  private _userName: string;
  private _imageUrl: string;
  private _description: string;
  private _numLikes: number;

  constructor(userName: string, imageUrl: string, description: string) {
    this._userName = userName;
    this._imageUrl = imageUrl;
    this._description = description;
    this._numLikes = 0;
    this._id = randomUUID();
  }

  get id() {
    return this._id;
  }

  get userName() {
    return this._userName;
  }

  get imageUrl() {
    return this._imageUrl;
  }

  get description() {
    return this._description;
  }

  set description(description: string) {
    this._description = description;
  }

  get numLikes() {
    return this._numLikes;
  }

  incrementLike() {
    this._numLikes += 1;
  }
}

const posts: Post[] = [];

for (let index = 0; index < 15; index++) {
  const post = new Post(faker.person.firstName(), "http://...", "Imagem 1");
  posts.push(post);
}

console.log(posts);
