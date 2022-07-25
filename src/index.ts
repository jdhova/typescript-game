// console.log('working now')

let answer : number
let randomNumber1 : number
let randomNumber2 : number
let randomNumber3 : number
let randomNumber4 : number
let score : number = 1;
let highScore : number = 0;
let generateNum : Function
let myAdd : Function

let score2 = score > 3 && score < 6 ? score :''




const scoreBoard = document.querySelector<HTMLParagraphElement>('.score');
const highScoreBoard = document.querySelector<HTMLParagraphElement>('.highScore');
// const message1 = document.querySelector<HTMLHeadingElement>('.message1')
// const messageone  = document.querySelector<HTMLHeadingElement>('.message1');

const message  = document.querySelector<HTMLHeadingElement>('.message');

const messageone  = document.querySelector<HTMLHeadingElement>('.messageone');

const restartGame = document.querySelector<HTMLButtonElement>('.restartGame');
const start = document.querySelector<HTMLButtonElement>('.start');
const restart = document.querySelector<HTMLButtonElement>('.reset');
const userInput = document.querySelector<HTMLInputElement>('input');
const img = document.querySelector<HTMLImageElement>("img");



generateNum = () => {


  console.log('here im here now working')
                    
  randomNumber1 = Math.floor(Math.random() * 10) + 1;
  randomNumber2 = Math.floor(Math.random() * 10) + 1;
  answer = randomNumber1 + randomNumber2;

  console.log('im here1',answer)
  console.log('im here 1',randomNumber1 , randomNumber2)


  if (messageone?.innerText == '' || 
  messageone?.innerText == null) return
  // messageone.innerText = 'start...!';
  messageone.innerText = `${randomNumber1} ` + '+ ' + `${randomNumber2} = `
  console.log(messageone.innerText,'jeeed22')

  if (userInput?.value == '' || userInput?.value == null) return
  userInput.value = '';


  // if (message1?.innerText == '' || message1?.innerText == null) return
  // message1.innerText = `${randomNumber1} ` + '+ ' + `${randomNumber2} = `;
  
 


  
  console.log('num',randomNumber1 , randomNumber2)

  // if (userInput?.value == '' || userInput?.value == null) return
  // userInput.value = '';

  // messageone.innerText = `${randomNumber1} ` + '+ ' + `${randomNumber2}) = ` ; 
  // message1.innerText = `${randomNumber1} ` + '+ ' + `${randomNumber2} = ` ; 
  userInput.value = ''; 
  
  
}

// BUG HOW DO I CONVART INNER TEXT TO ACCET NUMBER




//  generateNum = (randomNumber1 : number, randomNumber2: number, answer: number ) => {

//   console.log('here im here now working')
                    
//   randomNumber1 = Math.floor(Math.random() * 10) + 1;
//   randomNumber2 = Math.floor(Math.random() * 10) + 1;
//   answer = randomNumber1 + randomNumber2;

//   console.log('and',answer)
//   console.log('num',randomNumber1 , randomNumber2)

//   if (message1?.innerText == '' || message1?.innerText == null) return
//   message1.innerText = `${randomNumber1} ` + '+ ' + `${randomNumber2} = `;

//   if (userInput?.value == '' || userInput?.value == null) return
//   userInput.value = '';


//   message1.innerText = `${randomNumber1} ` + '+ ' + `${randomNumber2} = ` ; 
//   userInput.value = '';  
// }


// myAdd = function (x: number, y: number) {
//   console.log(x + y)
// };




start?.addEventListener('click',  function (){
 

   if (message?.innerText == '' || message?.innerText == null) return
   message.innerText = 'start...!';
   console.log(message.innerText,'jeeed1')



 
   
  


   if (scoreBoard?.innerText || scoreBoard?.innerText == null) return
   scoreBoard.innerText =  '1';


  // scoreBoard.innerText = 1;  // name number not a string
  let score : number = 1   // can not find and make a number 
  // userInput.disabled = false; // can be null recheck this
   

   generateNum();  // can not find and make a function


}
  
  );


   


// const generateNum = () => {

//   console.log('here im here now')
                    
//   let randomNumber1 = Math.floor(Math.random() * 10) + 1;
//   let randomNumber2 = Math.floor(Math.random() * 10) + 1;
//   answer = randomNumber1 + randomNumber2;

//   if (message1?.innerText == '' || message1?.innerText == null) return
//   message1.innerText = `${randomNumber1} ` + '+ ' + `${randomNumber2} = `;

//   if (userInput?.value == '' || userInput?.value == null) return
//   userInput.value = '';


//   // message1.innerText = `${randomNumber1} ` + '+ ' + `${randomNumber2} = ` ; 
//   // userInput.value = '';  
// }