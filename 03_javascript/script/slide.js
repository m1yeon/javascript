//외부스크립트 slide.js

//1. 변수선언
const slide = document.querySelector('.slide'); //상품 목록(li)의 부모 요소
const slide_img = document.querySelectorAll('.slide li');//상품 목록(li)
const l_btn = document.getElementById('l_btn'); //이전
const r_btn = document.getElementById('r_btn'); //다음

const s_btn = document.querySelector('.fa-stop');
const p_btn = document.querySelector('.fa-play');

const img_n = slide_img.length; //li목록의 개수를 변수에 담음
// console.log(img_n);

const img_w = 380;//상품사진너비
const m =30;//여백 너비
const s_count = 3; //보여질 상품의 개수

let count = 0; //이전, 다음 클릭시 사용할 변수값 설정

slide.style.width = (img_w+m)*img_n-m+'px';

//왼쪽으로 움직이는 슬라이드 함수 작성하기(이전)
function mslide(n){
  slide.style.left = (img_w+m)*-n+'px';
  count=n;
  console.log(count); //이전 버튼 클릭시 2,1,0 출력
  console.log(slide.style.left);
}

l_btn.addEventListener('click',function(){
  if(count>0){  //만약 카운트 값이 0보다 크면
    mslide(count-1); //카운트 값이 1을 빼서 mslide에 넘김
  }else{
    mslide(img_n-s_count); //li개수
  }
});

r_btn.addEventListener('click',function(){
  if(count < img_n-s_count){ //0보다 li개수가 많다면
    mslide(count+1); //0+1해서 넘김
  }else{  //그렇지 않다면 
    mslide(0); //0을 대입해서 처음으로 돌아가게 함
  }
});


// 3초마다 자동으로 슬라이드 움직이게 하기
let Timer = setInterval(function(){
  console.log('setInterval = 반복호출실행 객체');
  if(count==2){
    count=0
  }else{
    count++;
  }
  mslide(count); //mslide에 count값을 넘겨서 자동으로 움직이게 함
  // console.log(count);
},3000);

//stop버튼 클릭시 시간을 제거하여 멈추게함
s_btn.addEventListener('click',function(){
  clearInterval(Timer);
  s_btn.style.color='#333';
  s_btn.style.background='rgba(255,255,255,.7)';
  p_btn.style.color='';
  p_btn.style.background='';
});

p_btn.addEventListener('click',function(e){
  //
  clearInterval(Timer);
  Timer = setInterval(function(){
    console.log('setInterval = 반복호출실행 객체');
    if(count==2){
      count=0
    }else{
      count++;
    }
    mslide(count); //mslide에 count값을 넘겨서 자동으로 움직이게 함
    // console.log(count);
  },3000);
  e.preventDefault();
  p_btn.style.color='#333';
  p_btn.style.background='rgba(255,255,255,.7)';
  s_btn.style.color='';
  s_btn.style.background='';
});