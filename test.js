var isLiked = false;
function like() {
    isLiked = !isLiked;
    var btnLike = document.getElementsByClassName("btn-like")[0];
    var icon = btnLike.children[0];
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
