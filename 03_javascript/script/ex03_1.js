    //실습 예제1 _ BMI지수 구하기
    //1. 변수 선언
    let h, w;
    const btn = document.getElementById('cal_btn');

    //2. 입력한 데이터 출력하기
    btn.addEventListener('click',function(){
      //2-1. 계산 버튼 클릭시 입력 값 변수에 저장
      h = document.getElementById('height').value;
      w = document.getElementById('weight').value;

      //2-2. 값 출력 테스트
      console.log(h);
      console.log(w);

      //2-3. Number()함수 사용 _ 문자열을 숫자로 변환하는 함수 (숫자로 변환할 수 없는 값인 경우 NaN(not a number)을 반환함)
      // String() _ 숫자를 문자열로 변환 시 사용
      let sum = parseInt(Number(w)/(Number(h)*Number(h))); 
      console.log(sum);

      // let sum2 = Number(w)/(Number(h)*Number(h));
      // console.log(sum2); 
      // 1.5m/60kg sum1의 경우 => 26 / sum2의 경우 => 26.666  (parseInt() 함수 사용시 정수로 변환해줌)

      // 2-4. if문을 사용하여 숫자데이터별 내용 출력하기
      if(sum<=18.5){
        document.getElementById('result').innerHTML='<span class="blueC bc">저체중입니다.</span>';
      }else if((18.5<sum)&&(sum<=23)){
        document.getElementById('result').innerHTML='<span class="greenC bc">정상체중입니다.</span>';
      }else if((sum>23)&&(sum<=25)){
        document.getElementById('result').innerHTML='<span class="orangeC bc">과체중입니다.</span>';
      }else if((sum>25)&&(sum<=30)){
        document.getElementById('result').innerHTML='<span class="purpleC bc">비만입니다.</span>';
      }else{
        document.getElementById('result').innerHTML='<span class="redC bc">고도비만입니다.</span>';
      }
    });