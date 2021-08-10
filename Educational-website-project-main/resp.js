// console.log("javascript");
burger=document.querySelector('.burger')
navbar=document.querySelector('.navbar')
navlist=document.querySelector('.navlist')
searchbar=document.querySelector('.searchbar')
burger.addEventListener('click',()=>{
    navbar.classList.toggle('navh-resp');
    searchbar.classList.toggle('navVis-resp');
    navlist.classList.toggle('navVis-resp');
})