const output = document.getElementById('output');
const output2 = document.getElementById('output2');
const pickNumber = document.querySelector('#picknumber');
const reportbox = document.getElementById('reportbox');
const reportbox2 = document.getElementById('reportbox2');
// const miner2 = document.querySelector('miner2');
const btn = document.getElementById('btn');

let count =1
const number= [1,2,3,4,5,6,7,8,9,10,11];
const number2= [1,2,3,4,5,6,7,8,9,10];
// const number3= [1,2,3,4,5,6,7,8,9,10,11,12, 13, 14, 15, 16, 17, 18, 19, 20];

btn.addEventListener('click', miner);
// btn.addEventListener('click', miner2);
// miner2.addEventListener('click', showgameover);

  

function miner(){
    // console.log('I was clicked');
    let random = Math.floor(Math.random()*number.length);
    output.innerHTML = random;
    let random2 = Math.floor(Math.random()*number2.length);
    output2.innerHTML = random2;
    count=count + 1
    console.log(count)

    if (random2 === random){
        //    alert('You Win')
           
           reportbox.style.display='block'
           setInterval(() => {
            location.reload()
           }, 5000);
        //    miner2.style.display='block'

           
       
        }else {
            location.reload
        //    alert('You lose')
           reportbox2.style.display='block'
           setInterval(() => {
            location.reload()
           }, 1000);
      
        }
   

}


function showgameover(){

//     if(miner===true){
//         miner2.style.display='block'
        location.reload()
    }

    // switch (random) {
    //     case 1:
       
    //         break;
       
    //     case 2:
        
    //         break;
    //     case 3:
    //         break;
    //     case 4:
    //         break;
    //     case 5:
    //     reportbox.style.display='block'
    //         break;
    //     case 6:
    //         break;
    //     case 7:
    //         break;
    //     case 8:
    //         break;
    
    //     case 9:
    //         break;
    
    //     case 10:
    //         break;
    
    //     default:
    //         break;
    // } 
    
    // report.style.display='block'

    // number.forEach(pickNumber => {
    //     console.log(pickNumber)
    // });

  
// }

// document.querySelector('#picknumber').addEventListener('click',function(){
//     // const target= e.target;

//      if (random === picknumber)
//             reportbox.style.display='block'
//          else {
//             console.log('You lose')
//         }
    
    
// })




