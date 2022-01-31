const i18Obj = {
  'en': {
    'skills': 'Skills',
    'portfolio': 'Portfolio',
    'video': 'Video',
    'price': 'Price',
    'contacts': 'Contacts',
    'hero-title': 'Alexa Rise',
    'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
    'hire': 'Hire me',
    'skill-title-1': 'Digital photography',
    'skill-text-1': 'High-quality photos in the studio and on the nature',
    'skill-title-2': 'Video shooting',
    'skill-text-2': 'Capture your moments so that they always stay with you',
    'skill-title-3': 'Retouch',
    'skill-text-3': 'I strive to make photography surpass reality',
    'skill-title-4': 'Audio',
    'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
    'winter': 'Winter',
    'spring': 'Spring',
    'summer': 'Summer',
    'autumn': 'Autumn',
    'price-description-1-span-1': 'One location',
    'price-description-1-span-2': '120 photos in color',
    'price-description-1-span-3': '12 photos in retouch',
    'price-description-1-span-4': 'Readiness 2-3 weeks',
    'price-description-1-span-5': 'Make up, visage',
    'price-description-2-span-1': 'One or two locations',
    'price-description-2-span-2': '200 photos in color',
    'price-description-2-span-3': '20 photos in retouch',
    'price-description-2-span-4': 'Readiness 1-2 weeks',
    'price-description-2-span-5': 'Make up, visage',
    'price-description-3-span-1': 'Three locations or more',
    'price-description-3-span-2': '300 photos in color',
    'price-description-3-span-3': '50 photos in retouch',
    'price-description-3-span-4': 'Readiness 1 week',
    'price-description-3-span-5': 'Make up, visage, hairstyle',
    'order': 'Order shooting',
    'contact-me': 'Contact me',
    'send-message': 'Send message'
  },
  'ru': {
    'skills': 'Навыки',
    'portfolio': 'Портфолио',
    'video': 'Видео',
    'price': 'Цены',
    'contacts': 'Контакты',
    'hero-title': 'Алекса Райс',
    'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
    'hire': 'Пригласить',
    'skill-title-1': 'Фотография',
    'skill-text-1': 'Высококачественные фото в студии и на природе',
    'skill-title-2': 'Видеосъемка',
    'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
    'skill-title-3': 'Ретушь',
    'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
    'skill-title-4': 'Звук',
    'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
    'winter': 'Зима',
    'spring': 'Весна',
    'summer': 'Лето',
    'autumn': 'Осень',
    'price-description-1-span-1': 'Одна локация',
    'price-description-1-span-2': '120 цветных фото',
    'price-description-1-span-3': '12 отретушированных фото',
    'price-description-1-span-4': 'Готовность через 2-3 недели',
    'price-description-1-span-5': 'Макияж, визаж',
    'price-description-2-span-1': 'Одна-две локации',
    'price-description-2-span-2': '200 цветных фото',
    'price-description-2-span-3': '20 отретушированных фото',
    'price-description-2-span-4': 'Готовность через 1-2 недели',
    'price-description-2-span-5': 'Макияж, визаж',
    'price-description-3-span-1': 'Три локации и больше',
    'price-description-3-span-2': '300 цветных фото',
    'price-description-3-span-3': '50 отретушированных фото',
    'price-description-3-span-4': 'Готовность через 1 неделю',
    'price-description-3-span-5': 'Макияж, визаж, прическа',
    'order': 'Заказать съемку',
    'contact-me': 'Свяжитесь со мной',
    'send-message': 'Отправить'
  }
}
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
addEventListener('click',changeClassActive);

const words = document.querySelectorAll("[data-i18]");
const eng = document.querySelector('.en');
const ru = document.querySelector('.ru');
function getTranslate(lang) {
  words.forEach((i) => i.textContent = i18Obj[lang][i.dataset.i18]);
}
eng.addEventListener('click', () => getTranslate('en'));
ru.addEventListener('click', () => getTranslate('ru'));
const activeLang = document.querySelectorAll(".language");
function changeLangActive(event) {
  if(event.target.classList.contains('language')) {
    activeLang.forEach((item,index) => {
      $(item).removeClass("act")
      $(event.target).addClass("act");
  })
 
}
}
addEventListener('click',changeLangActive);

const lig = document.querySelectorAll('.skill');
const li = document.querySelectorAll('.title');
const portBtn = document.querySelectorAll('.portfolio-btn')
function changeTheme(event) {
  if (event.target.classList.contains('li')) {
    
    lig.forEach((item)=> item.classList.toggle('light-theme'));
    li.forEach((e)=> e.classList.toggle('titleLight'))
    portBtn.forEach((elem)=> elem.style.backgroundColor="white");
  }
}
addEventListener('click',changeTheme);
let lang = 'en';
let theme = ''


