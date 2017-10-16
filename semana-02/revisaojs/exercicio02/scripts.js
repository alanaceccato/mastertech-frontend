const divs = document.querySelectorAll('section div');

for(let div of divs ){
  div.addEventListener('click', (event) => {
    if (event.target.classList.contains('hide-div')) {
      event.target.className = event.target.className.replace("hide-div", "");
    }else{
      event.target.className = "hide-div";
    }
  });

}
