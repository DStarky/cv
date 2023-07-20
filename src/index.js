import "./index.html";
import "./index.scss";
import { i18n } from "./modules/i18n";
import render from "./modules/render";

const cv = document.querySelector('.cv');
const buttonEng = document.querySelector('.button-eng');
const buttonRus = document.querySelector('.button-rus');


cv.innerHTML = render();

buttonEng.addEventListener('click', (e) => {
  i18n.changeLanguage('en');
  cv.innerHTML = render();
})

buttonRus.addEventListener('click', (e) => {
  i18n.changeLanguage('ru');
  cv.innerHTML = render();
})