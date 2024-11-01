    //실습예제3_합계 구하기
    //1. 변수선언
    let n;
    let res_b = document.getElementById('res_btn');

    //2. 버튼 클릭시 합계 함수 실행
    res_b.addEventListener('click',sum);

    //3. 합계 함수
    function sum(){
      s = 0;
      n = document.getElementById('number').value;
      console.log(n);

      //3-2. 반복문을 사용해 1 ~ 입력한 숫자n 까지 출력하기
      for(let i=1;i<n;i++){
        s = s + i; 
        //s가 0이니까
        // s = 0+1 =1 / 1+2=3; 3+3=6; ... i가 n(입력한 숫자)이 될때까지 반복
      }
      //3-3. 구한 값 출력하기
      document.getElementById('s_result').value = s;
    }