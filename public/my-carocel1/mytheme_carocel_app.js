
let nmbsection = document.querySelectorAll(".mycarocel-section").length;
let nmbr100 = 100 / nmbsection;

// --------------------- div -------------------------
let div_slider = document.querySelector(".mycarocel-slider");
let ul =document.querySelector(".mycarocel-ul");
// --------------------- end div -------------------------

// -------- la recupereation de tout les btn cercle -----------------------------
let li=document.querySelectorAll('.mycarocel-li');
// -------- end la recupereation de tout les btn cercle -----------------------------

let slidindex=0;

// -------- animer les btn cercle -----------------------------
for (let index = 0; index < li.length; index++) {
    let element = li[index];
    element.addEventListener("click",()=>{
        slidindex =index ;
        deplacement();
    });
}
// -------- animer les btn cercle -----------------------------

// -------- fonction deplacement -----------------------------
const deplacement =()=>{
    document.querySelector('.mycarocel-selcted').classList.remove('mycarocel-selcted');
    ul.children[slidindex].classList.add("mycarocel-selcted");
    div_slider.style.transform = 'translate(' + slidindex * -nmbr100 +'%)';
}
// -------- end fonction deplacement -----------------------------

