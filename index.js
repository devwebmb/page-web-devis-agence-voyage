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

/*effet au scroll*/

/*création observer sur section pour affichage au scroll*/
let observer = new IntersectionObserver(
  (observables) => {
    for (let observable of observables) {
      if (observable.intersectionRatio > 0.3) {
        observable.target.classList.remove("invisible");
      }
      //faire redisparaitre les sections
      // else {
      //   observable.target.classList.add("invisible");
      // }
    }
  },
  {
    threshold: [0.5],
  }
);

const sections = document.querySelectorAll("section");

for (let section of sections) {
  if (window.innerWidth > 1200) {
    section.classList.add("invisible");
    observer.observe(section);
  }
}

/*Comportement à l'impression*/

window.onbeforeprint = () => {
  for (let section of sections) {
    section.classList.remove("invisible");
  }
  if (cgvView.classList.contains("d-none")) {
    cgvView.classList.remove("d-none");
  }
};

window.onafterprint = () => {
  for (let section of sections) {
    section.classList.add("invisible");
  }
  if (!cgvView.classList.contains("d-none")) {
    cgvView.classList.add("d-none");
  }
};
