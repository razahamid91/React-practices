//everything happen in executing context
//execution context ==>contains the code that currently 

// console.log(10);

// function x(){
//     console.log(20);
// }
// x()
// console.log(30);
// debugger
// var message='hello lpu';
// console.log(message);

// function a(){
//      var b=30;
//      console.log(b);
// }

// function sum(num1,num2){
//     let result=num1+num2;
//     return result;
// }
// sum();
// console.log('bye all');

//ex2

// var a= 'program start'
//   function x(){
//     let a= 10;
//     function y(){
//         let b = 20;
//         console.log(a);
//         function z(){
//             console.log(b);
//         }
//         z()
//     }
//     y()
//   }
//   x()

//   var  b = 'program ends';
//   console.log(b);

var a=10;
function x(a){
    var b=a;
    return function y(){
        b=b+10;
    }
}
x()
