
let nmbsection2 = document.querySelectorAll(".mycarocel2-section").length;
let nmbr1002 = 100 / nmbsection2;

// --------------------- div -------------------------
let div_slider2 = document.querySelector(".mycarocel2-slider");
let  ul2 =document.querySelector(".mycarocel2-ul");
// --------------------- end div -------------------------



// -------- la recupereation de tout les btn cercle -----------------------------
let  li2=document.querySelectorAll('.mycarocel2-li');
// -------- end la recupereation de tout les btn cercle -----------------------------


let slidindex2=0;

// -------- animer les btn cercle -----------------------------
for (let index = 0; index <  li2.length; index++) {
    let element2 =  li2[index];
    element2.addEventListener("click",()=>{
        slidindex2 =index ;
        deplacement2();
    });
}
// -------- animer les btn cercle -----------------------------




// -------- fonction deplacement2 -----------------------------
const deplacement2 =()=>{
    document.querySelector('.selcted2').classList.remove('selcted2');
     ul2.children[slidindex2].classList.add("selcted2");
    div_slider2.style.transform = 'translate(' + slidindex2 * -nmbr1002 +'%)';
    document.querySelector('.tranfoorm').classList.remove('tranfoorm');
    div_slider2.children[slidindex2].classList.add('tranfoorm');

}
// -------- end fonction deplacement2 -----------------------------

