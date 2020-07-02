const toggleModal = () => {
  document
    .querySelector(".modal-contact")
    .classList.toggle("modal-contact--hidden");
};

document.querySelector("#contact-show").addEventListener("click", toggleModal);

document.querySelector("#contact-modal").addEventListener("submit", (event) => {
  let form = document.getElementById("form-label");
  form.submit();
  form.reset();
  toggleModal();
  return false;
});

document
  .querySelector(".modal-close-bar-x")
  .addEventListener("click", toggleModal);

document
  .querySelector(".modal-logo-over")
  .addEventListener("click", toggleModal);
