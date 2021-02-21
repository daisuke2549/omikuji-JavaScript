'use strict';


{
   const btn = document.getElementById('btn'); 

//    btn.addEventListener('click', () => {
//        const results = ['大吉', '中吉', '凶'];
//         const n = Math.floor(Math.random() * results.length);
//         btn.textContent = results[n];


    // const n = Math.floor(Math.random() * 3);
    // btn.textContent = n;


//     switch (n) {
//       case 0:
//         btn.textContent = '大吉';
//         break;
//       case 1:
//         btn.textContent = '中吉';
//         break;
//       case 2:
//         btn.textContent = '小吉';
//         break;
//     }
 btn.addEventListener('click', () => {
     const n = Math.random();
     if (n < 0.1){
         btn.textContent = '大吉';
     }else if(n < 0.8){
         btn.textContent = '中吉';
     }else{
        btn.textContent = '小吉';
     }
     



  });
}
