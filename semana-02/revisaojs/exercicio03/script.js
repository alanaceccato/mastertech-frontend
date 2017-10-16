let elementoShow = 0;
const elementosDiv  = document.querySelectorAll('section div');
const elementoNome  = document.querySelector('section p');
let banners       = ['Quadrado','Circulo','Triangulo'];

function hideElement() {
  for(let elemento of elementosDiv){
      elemento.style.display = 'none';
  }
}

function showElement() {
  elementosDiv[elementoShow].style.display = 'block';
  elementoNome.innerHTML = banners[elementoShow];
}

setInterval(() => {
    elementoShow++;

    if(elementoShow >= elementosDiv.length){
        elementoShow = 0;
    }

    hideElement();
    showElement();

}, 1000);


hideElement();
