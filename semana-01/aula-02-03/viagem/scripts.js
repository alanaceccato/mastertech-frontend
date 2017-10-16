let titulo  = document.querySelector('h1');
let texto   = document.querySelector('p');
let modal   = document.querySelector('.modal');

function changeTitle(){
  titulo.innerHTML = 'GOT';
}

function changeCssTexto() {
  texto.style.color    = 'red';
  texto.style.fontSize = '10px';
}

function toggleModal(){
  if (modal.style.display === "none" || modal.style.display === "") {
       modal.style.display = "block";
  } else {
       modal.style.display = "none";
  }
}
//
// function showModal(){
//   modal.style.display = 'block';
// }
//
// function hideModal(){
//   modal.style.display = 'none';
// }
