let isLiked = false;

function like() {
  isLiked = !isLiked;

  const btnLike = document.getElementsByClassName("btn-like")[0];
  const icon = btnLike.children[0];

  if (isLiked) {
    icon.classList.remove("fa-heart-o");
    icon.classList.add("liked");
    icon.classList.add("fa-heart");

    return;
  }

  icon.classList.remove("fa-heart");
  icon.classList.remove("liked");
  icon.classList.add("fa-heart-o");
}
