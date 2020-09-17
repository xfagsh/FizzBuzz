// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10 , 11, 12, 13, 14 , 15 , 16, 17 , 18, 19, 20];

// function fizzBuzz(arr){
//     for (let i = 0; i < array.length; i++) {
//         if (i/3 === 1 && i/5 == 1) {
//             items
//         }
        
//     }
// }


let i = 1;

function fizzBuzz(){

for ( ; i <= 30; i++) {

   if (i%3 == 0 && i%5 == 0) {
   
      console.log('fizzbuzz')      
    }

    else if (i%3 == 0){
    
        console.log('fizz')
    }
    else if (i%5 == 0){
    
        console.log('buzz')
    }
    else {
        console.log(i);
    }
  }

}

fizzBuzz();



 
  