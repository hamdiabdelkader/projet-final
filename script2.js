var likeBtns = document.getElementsByClassName("fa-thumbs-up");

likeBtns[i].addEventListener("click", function (e) {
  e.target.classList.toggle("liked");
});

console.log("hiii");
