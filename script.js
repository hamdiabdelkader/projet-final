var likeBtns = document.getElementsByClassName("fa-thumbs-up");

likeBtns[0].addEventListener("click", function (e) {
  e.target.classList.toggle("liked");
});

console.log(likeBtns[0]);
