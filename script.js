const imagemPrincipal = document.getElementById("imagemPrincipal");
const miniaturas = document.getElementById("miniaturas");

miniaturas.addEventListener("click", function(event) {
  if (event.target.tagName === "IMG") {
    imagemPrincipal.src = event.target.src;
  }
});