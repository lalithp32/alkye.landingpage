//header sticky

document.addEventListener("scroll",()=>{
    const header = document.querySelector("nav");
    if(window.scrollY>0){

        header.classList.add("scrolled")
     } else{
            header.classList.remove("scrolled");
        }
    }
);
//button click home
$(document).ready(function(){
    $('.left').on('click',function(){
        console.log('click')
    })
});
$(document).ready(function(){
    $('.right').on('click',function(){
        console.log('click')
    })
});

document.addEventListener('click',()=>{
    const story = document.querySelector(".story1");
    //another page link goes here
})
