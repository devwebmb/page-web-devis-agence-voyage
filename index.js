/*affichage formulaire */

const acceptDevis = document.getElementById("acceptDevis");
const acceptCgv = document.getElementById("acceptCgvContainer");

document.querySelectorAll(`input[type="radio"]`).forEach((elem) => {
    elem.addEventListener("change", () => {
        if (acceptDevis.checked) {
            acceptCgv.classList.remove("d-none");
        } else if (!acceptDevis.checked) {
            acceptCgv.classList.add("d-none");
        };
    })
})
