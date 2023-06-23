// ------------- Modal ------------------
// btn
let btn_openModals=document.querySelectorAll(".btn_openModal");
let btn_closeModals=document.querySelectorAll(".closeModal");
// div
let div_modals=document.querySelectorAll(".div_modal");
let bg_darken=document.querySelector(".overlay");

// fonction
const showModal=(div)=>{
    div.classList.add("show-modal");
    bg_darken.classList.add("show-modal");
    
}
const closModal =(divF)=>{
    divF.classList.remove("show-modal");
    bg_darken.classList.remove("show-modal");
}
const bg_darkenF =()=>{
    bg_darken.classList.remove("show-modal");
}

// addEventListeners
bg_darken.addEventListener("click",bg_darkenF);

// atiender toute les btn_openModals  
for (let index = 0; index < btn_openModals.length; index++) {  
    let btn_element = btn_openModals[index];
    // atiender toute les id de btn_openModals  
    let id_element=btn_element.getAttribute("id");

    // atiender toute les div modal  
    for (let idx = 0; idx < div_modals.length; idx++) {
        let divmodal = div_modals[idx];

    // atiender toute les id de div modal   
        let id_div=divmodal.getAttribute("id");
        if (id_element==id_div) {
            btn_openModals[index].addEventListener("click",()=>{
                showModal(div_modals[idx]);
            })            
        }
        // atiender toute les btn fermer  
        for (let i = 0; i < btn_closeModals.length; i++) {
            let btn_close_element = btn_closeModals[i];

        // atiender toute les id de div modal
            let id_close_element=btn_close_element.getAttribute("id");
            if (id_close_element==id_div) {
                bg_darken.addEventListener("click",closModal.bind(null,div_modals[idx]));
                btn_closeModals[i].addEventListener("click",()=>{
                    closModal((div_modals[idx]));
                })                
            }            
        }        
    }    
}









// ------------- end Modal ------------------