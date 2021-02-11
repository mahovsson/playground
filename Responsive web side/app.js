function toggleMenu(){
  var menuToggle = document.querySelector('.menuToggle');
  var navigation = document.querySelector('.navigation');
  menuToggle.classList.toggle('active');
  navigation.classList.toggle('active');
}

const cursorCircle = document.querySelector('.cursor');
  document.addEventListener('mousemove', (e) => {
    cursorCircle.style.left = e.pageX + 'px';
    cursorCircle.style.top = e.pageY + 'px';
  })