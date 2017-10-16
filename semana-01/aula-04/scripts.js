// let banner1 = 'file:///Users/alanaceccato/Desktop/mastertech-front-alana/semana-01/aula-04/images/banner1.jpg';
// let banner2 = 'file:///Users/alanaceccato/Desktop/mastertech-front-alana/semana-01/aula-04/images/banner2.jpg';
// let elementoImagem  = document.querySelector('.banner img');
//
// function trocarBanner() {
//   if( elementoImagem.src == banner2 ){
//     elementoImagem.src = banner1;
//   }else{
//     elementoImagem.src = banner2;
//   }
// }

let bannerAtual     = 0
let elementoImagem  = document.querySelector('.banner img');
let banners         = [
                        'images/banner1.jpg',
                        'images/banner2.jpg',
                        'images/banner3.jpg'
                      ];

function trocarBanner() {
  bannerAtual = bannerAtual + 1;
  if( bannerAtual == banners.length ){
    bannerAtual = 0;
  }

  let imagem  = banners[bannerAtual];
  elementoImagem.src = imagem;
}

setInterval(trocarBanner, 2000);
