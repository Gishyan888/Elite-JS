let slideImg = document.getElementById("slideImg");
let images = new Array (
    "img/lr1.webp",
    "img/lr2.webp",
    "img/lr3.webp"
);
 let len = images.length;
 let i = 0;
 function slider(){
     if( i > len-1){
         i = 0
     }
     slideImg.src = images[i];
     i++;
     setTimeout('slider()',3000)
 }

 const productContainers = [...document.querySelectorAll('.product-container')];
 const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
 const preBtn = [...document.querySelectorAll('.pre-btn')];

 productContainers.forEach((item,i) =>{
     let containerDemensions = item.getBoundingClientRect();
     let containerWidth = containerDemensions.width;

     nxtBtn[i].addEventListener('click', () => {
         item.scrollLeft += containerWidth;
})

preBtn[i].addEventListener('click', () => {
    item.scrollLeft -= containerWidth;
})

 })