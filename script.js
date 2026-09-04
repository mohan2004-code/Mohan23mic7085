const menuBtn=document.querySelector('.menu-btn');const nav=document.querySelector('.navbar nav');
menuBtn.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.navbar nav a').forEach(link=>link.addEventListener('click',()=>nav.classList.remove('open')));
