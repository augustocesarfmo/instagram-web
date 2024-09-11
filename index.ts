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
    const postContainer = document.getElementById(this._id);
    const btnLike = postContainer?.querySelector("#btn-like");
    const icon = btnLike?.children[0];

    if (!icon) return;

    // Remove o coração preenchido, adiciona o coração vazio e
    if (this._isLiked) {
      icon.classList.remove("fa-heart");
      icon.classList.remove("liked");
      icon.classList.add("fa-heart-o");

      // Incrementa o número de likes
      this._numberOfLikes += 1;
    } else {
      // Remove o coração vazio e adiciona o coração preenchido
      icon.classList.remove("fa-heart-o");
      icon.classList.add("fa-heart");
      icon.classList.add("liked");

      // Descrementa o número de likes
      this._numberOfLikes -= 1;
    }

    this._isLiked = !this._isLiked;
  }

  toHTML() {
    const postContainer = document.createElement("div");
    postContainer.className = "post-container";
    postContainer.id = this._id;

    const postHeader = `
      <div class="post-header">
        <div>
          <img title="Avatar image"
            src=${this._avatarUrl}>
        </div>
        <span>${this._userName}</span>
      </div>
    `;

    const postImage = `
     <div class="post-image">
        <img title="Post image"
          src=${this._imageUrl}>
      </div>
    `;

    const postIcons = `
      <div class="post-icons">
        <div>
          <div id="btn-like">
            <i class="fa fa-heart-o"></i>
          </div>

          <div>
            <i class="fa fa-comment-o"></i>
          </div>

          <div>
            <i class="fa fa-paper-plane-o"></i>
          </div>
        </div>

        <i class="fa fa-bookmark-o"></i>
      </div>
    `;

    postContainer.innerHTML = postHeader;
    postContainer.innerHTML += postImage;
    postContainer.innerHTML += postIcons;

    const btnLike = postContainer.querySelector("#btn-like");
    btnLike?.addEventListener("click", () => this.like());

    document.body.appendChild(postContainer);
  }
}

for (let index = 0; index < 15; index++) {
  const userName = faker.person.firstName();
  const avatarUrl = faker.image.avatarGitHub();
  const imageUrl = faker.image.urlLoremFlickr();
  const description = faker.lorem.paragraph();

  const post = new Post(userName, avatarUrl, imageUrl, description);

  post.toHTML();
}
