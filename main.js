// (function () {
//     document.querySelector(".testimonials__slider-images").style.left = 0 + "px";
//     let offset = 0;
    
// })();

let offset = 0;//смещение от левого края
let buttonsOffset = 0;
const sliderImages = document.querySelector(".testimonials__slider-images");
const buttons = document.querySelector(".testimonials__slider-buttons");
const quote = document.querySelector(".testimonials__caption-quote");
const quoteAuthor = document.querySelector(".testimonials__caption-quote-author");


document.querySelector(".testimonials__slider-button-left").addEventListener("click", function(){
    if(offset === 0){
        sliderImages.style.left = 0 + "px";
    }
    else if(offset === 768){
        sliderImages.style.left = 768 + "px";
        
    }
    else{
        offset += 384;
        sliderImages.style.left = offset + "px";
        
    }
});
document.querySelector(".testimonials__slider-button-right").addEventListener("click", function(){
    if(offset === -768){
        sliderImages.style.left = -768 + "px";
    }
    else{
        offset -= 384;
        sliderImages.style.left = offset + "px";
    }
});
// if(offset === 0){
//     quote.textContent =`Текст от Захара:
//     Я люблю Машульку!`;
// }
// else{
//     quote.textContent = ""
// }
