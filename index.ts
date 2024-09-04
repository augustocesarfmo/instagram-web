import { v4 as randomUUID } from "uuid";
import { faker } from "@faker-js/faker";

class Post {
  private _id: string = randomUUID();
  private _userName: string;
  private _avatarUrl: string;
  private _imageUrl: string;
  private _isLiked: boolean = false;
  private _description: string;
  private _createdAt: Date = new Date();
  private _numberOfLikes: number = 0;

  constructor(
    userName: string,
    avatarUrl: string,
    imageUrl: string,
    description: string
  ) {
    this._userName = userName.toLowerCase();
    this._avatarUrl = avatarUrl;
    this._imageUrl = imageUrl;
    this._description = description;
  }

  like() {
    this._isLiked = !this._isLiked;

    // Incrementa o número de likes
    if (this._isLiked) {
      this._numberOfLikes += 1;
    } else {
      // Descrementa o número de likes
      this._numberOfLikes -= 1;
    }
  }

  toHTML() {
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="post-container">
      <div class="post-header">
        <div></div>
        <span>${this._userName}</span>
      </div>
    </div>`;

    document.body.appendChild(div);
  }
}

const posts: Post[] = [];

for (let index = 0; index < 15; index++) {
  const userName = faker.person.firstName();
  const avatarUrl = faker.image.avatarGitHub();
  const imageUrl = faker.image.urlLoremFlickr();
  const description = faker.lorem.paragraph();

  const post = new Post(userName, avatarUrl, imageUrl, description);

  post.toHTML();
}
