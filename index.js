const share = document.querySelector(".share-icon");
const boxMessage = document.querySelector(".box-message");

share.addEventListener("click", (e) => {
  e.preventDefault();
  boxMessage.classList.toggle("hidden");
});
