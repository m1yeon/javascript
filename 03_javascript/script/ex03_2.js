    //실습예제2_계산기 만들기
    //1. 변수선언
    let res = document.getElementById('result');

    //2. 각 버튼 클릭시 해당 매개변수값을 함수의 매개변수에 대입
    function cal(op){
      //2-1. 버튼 클릭 테스트
      console.log(op);
      //2-2. 연산수식을 변수(outPut_v)에 저장
      let outPut_v = res.value + op;
      //2-3. 위 변수를 숫자와 수식을 모두 보이게 출력
      res.value = outPut_v;
    }

    //3. = 버튼 클릭 시 result 함수 호출 (input 태그의 onclick cal()함수와 연결)
    function result(){
      res.value = number(res.value);
    }

    //4. clear 버튼 클릭시 res 초기화하기
    function init(){
      res.value =""; //기존 값 지우기
    }