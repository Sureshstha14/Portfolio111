let typed = new Typed('.changingText',{
    strings:["Designer","Developer",'Free Lancer'],
    typespeed:10,
    backspeed:10,
    loop:true
})
var bars = document.querySelector('.bars')
var navbar = document.querySelector('.navbar')
var slider_img=document.querySelectorAll('.slider_img')
slider_img.forEach(function(slider_img){  
slider_img.addEventListener('mouseover',()=>{
    slider_img.classList.add('active');
})
slider_img.addEventListener('mouseout',()=>{
    slider_img.classList.remove('active');
})
})

console.log(navbar);
console.log(slider_img.length)
bars.addEventListener('click',()=>{
   navbar.classList.contains('active')?navbar.classList.remove('active'):navbar.classList.add('active');
})
