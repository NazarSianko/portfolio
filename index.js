function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find('.burger-menu_button', '.burger-menu_lines');
    let links = menu.find('.burger-menu_link');
    let overlay = menu.find('.burger-menu_overlay');
    
    button.on('click', (e) => {
      e.preventDefault();
      toggleMenu();
    });
    
    links.on('click', () => toggleMenu());
    overlay.on('click', () => toggleMenu());
    
    function toggleMenu(){
      menu.toggleClass('burger-menu_active');
      
      if (menu.hasClass('burger-menu_active')) {
        $('body').css('overflow', 'hidden');
      } else {
        $('body').css('overflow', 'visible');
      }
    }
  }
  
  burgerMenu('.burger-menu');
  /*const portfolioBtnOne = document.querySelector('.portfolio-btn-winter');
  const portfolioBtnTwo = document.querySelector('.portfolio-btn-spring');
  const portfolioBtnThree = document.querySelector('.portfolio-btn-summer');
  const portfolioBtnFour = document.querySelector('.portfolio-btn-autumn');
/*const portfolioImageOne = document.querySelector('.portfolio-image-one');
const portfolioImageTwo = document.querySelector('.portfolio-image-two');
const portfolioImageThree = document.querySelector('.portfolio-image-three');
const portfolioImageFour = document.querySelector('.portfolio-image-four');
const portfolioImageFive = document.querySelector('.portfolio-image-five');
const portfolioImageSix = document.querySelector('.portfolio-image-six');*/
/*const portfolioImages = document.querySelectorAll(".portfolio-image");

portfolioBtnOne.addEventListener('click', () => {
  portfolioImages.forEach((img,index) => img.src = `./assets/img/Winter/${index+1}.jpg`)
});*/
const portfolioBtn = document.querySelector('.button-list');
const portfolioImages = document.querySelectorAll(".portfolio-image");
const portfolioButton = document.querySelector('.portfolio-btn')

function changeImage(event) {
  if(event.target.classList.contains('portfolio-btn')) {
      let data = event.target.dataset.season;
      portfolioImages.forEach((img,index) => img.src = `./assets/img/${data}/${index+1}.jpg`);
     
    }
  
}
addEventListener('click',changeImage);
function preloadSummerImages() {
  for(let i = 1; i <= 6; i++) {
    const img = new Image();
    img.src = `./assets/img/Summer/${i}.jpg`;
  }
}
preloadSummerImages();

const activeBtn = document.querySelectorAll(".portfolio-btn");
function changeClassActive(event) {
  if(event.target.classList.contains('portfolio-btn')) {
    activeBtn.forEach((item,index) => {
      $(item).removeClass("active")
      $(event.target).addClass("active");
  })
 
}
}
addEventListener('click',changeClassActive)




