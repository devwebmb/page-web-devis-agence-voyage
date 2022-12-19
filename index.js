/*affichage formulaire */

const acceptDevis = document.getElementById("acceptDevis");
const acceptCgv = document.getElementById("acceptCgvContainer");

document.querySelectorAll(`input[type="radio"]`).forEach((elem) => {
  elem.addEventListener("change", () => {
    if (acceptDevis.checked) {
      acceptCgv.classList.remove("d-none");
    } else if (!acceptDevis.checked) {
      acceptCgv.classList.add("d-none");
    }
  });
});

/*affichage CGV */

const displayCgv = document.getElementById("displayCgv");
const cgvView = document.getElementById("cgvView");
const afficher = document.getElementById("afficher");
const cacher = document.getElementById("cacher");

displayCgv.addEventListener("click", () => {
  if (cgvView.classList.contains("d-none")) {
    cgvView.classList.remove("d-none");
    afficher.classList.add("d-none");
    cacher.classList.remove("d-none");
  } else if (!cgvView.classList.contains("d-none")) {
      cgvView.classList.add("d-none");
        afficher.classList.remove("d-none");
        cacher.classList.add("d-none");
  }
});
