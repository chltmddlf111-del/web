//햄버거 메뉴
const header = document.querySelector('header');
// 지정 header가 document.querySelector('header'); 역할을 하게 된다.

document.getElementById('ham_menu').addEventListener('click', function(){
   header.classList.toggle('on')
   // ham_menu를 '클릭'시 header에 class 'on'을 부여한다.
})