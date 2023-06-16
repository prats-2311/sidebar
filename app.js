const aside = document.querySelector(".sidebar");
const button = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
button.addEventListener("click", function () {
  aside.classList.toggle("show-sidebar");
});
closeBtn.addEventListener("click", function () {
  aside.classList.remove("show-sidebar");
});
