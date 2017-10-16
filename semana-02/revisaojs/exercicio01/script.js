const buttons = document.querySelectorAll('section button');
let divChange = document.querySelector('div');

for(let button of buttons ){
  button.addEventListener('click', (event) => {
    divChange.className = "div-" + event.target.id;
  });

}
