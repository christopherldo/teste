const menuHamburguer = document.querySelector('.hamburguer--menu');
const menu = document.getElementById('menu');
const menuItems = document.querySelectorAll('#menu a');

menuHamburguer.addEventListener('click', e => {
  menu.style.display = 'flex';
  menuItems.forEach(item => {
    item.addEventListener('click', e => {
      menu.style.display = 'none';
    });
  });
});

window.addEventListener('resize', e => {
  if(window.innerWidth < 575.98) {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'flex';
  };
});