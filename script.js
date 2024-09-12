const certContainer = document.getElementById("cert-cont");
const javaChallengeCert = document.getElementById("jv_challenge");
console.log(certContainer.innerText);
// const certcontainer = document.getElementById("cont1");
const certifications = [
  { id: 1, name: "respons_web_design.png" },
  { id: 2, name: "javaScript_alg_dataStru.png" },
  { id: 3, name: "front_end_dev_librairy.png" },
  { id: 4, name: "cert_comp.png" },
];

const displayCert = (array) => {
  const certImage = array
    .map((cert) => {
      return `<div class='img-bt-container'><img src="./myimages/${cert.name}"  alt="certification" class="image-class img-${cert.id}"/>
                     </div>`;
    })
    .join("");

  certContainer.innerHTML = certImage;
};
console.log(certContainer.innerHTML);
const button1 = document.getElementById("bt1");
console.log(button1);

button1.addEventListener("click", () => {
  certContainer.innerHTML === `<article id="cert-cont"></article>` ||
  certContainer.innerHTML === ``
    ? displayCert(certifications)
    : (certContainer.innerHTML = `<article id="cert-cont"></article>`);

  button1.innerText === "hide" || button1.innerText === "Hide"
    ? (button1.innerText = "show")
    : (button1.innerText = "hide");
});
