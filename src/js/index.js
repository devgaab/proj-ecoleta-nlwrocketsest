const buttonSearch = document.querySelector("#page-home main a");
const modal = document.querySelector("#modal");

buttonSearch.addEventListener("click", () => {
    modal.classList.toggle("hide");
});