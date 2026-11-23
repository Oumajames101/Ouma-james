document.documentElement.classList.add('js');
const btn=document.querySelector('.menu-btn'),nav=document.getElementById('nav');
if(btn&&nav){btn.addEventListener('click',()=>{const o=nav.classList.toggle('open');btn.setAttribute('aria-expanded',o)});}