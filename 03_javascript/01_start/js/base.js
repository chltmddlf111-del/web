// 1.alert 예제
document.getElementById('bin_onclick').onckick = () => {
   alert('이것은 alert가 구했다.')
}

// 2.prompt 예제
// prompt('입력내용', '입력내용 초기값')
document.getElementById('#btn_propmt2').onckick = () => {
   const nickName = prompt('닉네임을 입력하세요', 'anata dare?');
   // console.log(onclick)
   document.getAnimations('ioResult').innerHTML = nickName;
}
// promt *초기값 생략가능
document.getElementById('bun_promp').onclick = () => {
   const age = prompt('나이를 입력하세요');
   document.getElementsByClassName('ioResult') + "기본값 없음";
}

document.getElementById('btn_confirm').onclick = () => {
   const isSure = confirm('자바스크립트 할만하죠?');
   isSure ? '네 할만합니다.' ; '죽을 것 같아요';
   document.getElementById('ioResult').innerHTML = Text;
}

// 4. 식(Expression) 예제 실행
const output = '<strong>식(Expression) 예제 결과</storng><br>';
const greetiong = '안녕하세요'; /* 식 : 문자열 값 */
const isAdult = 20 >= 18; //식 : true 값을 생성 해줌.
const num1 = prompt('첫번째 숫자를 입력하세요');
const num2 = prompt('두번째 숫자를 입력하세요')
const sum = Number(num1) + Number(num2); // 식 중에선 sum 값을 생성

document.getElementById('btn_expression').onclick = () => {
   const resultHtml = output + sum + '/' + greeting + ' ' + isAdult;
   documen.getElementById('result_output2').innerHTML = resultHtml;
   document.querySelector('.pre_wrap1').classList.remove('on');
   document.querySelector('.pre_wrap2').classList.add('on');
}

//5. 문 예제 실행
document.getElementById('btn_statenment').onclick = () => {
   const output = '<strong> 문 예제 실행 </strong>'
   let output2;
   if (sum > 5) {
      output2 = sum + '값이 5보다 큽니다';
   } else {
      output2 = sum = '값이 5이하 입니다';
   }
   document.getElementById('result_output2').innerHTML = output + output2
   document.querySelector('.pre_wrap1').classList.remove('on');
   document.querySelector('.pre_wrap2').classList.add('on');
}