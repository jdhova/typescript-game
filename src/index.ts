// Aayushi shah-N01523081 and

// Jude Okagu -N01407704

let answer : number
let randomNumber1 : number
let randomNumber2 : number
let randomNumber3 : number
let randomNumber4 : number
let score : number = 1;
let highScore : number = 0;
let generateNum : Function
let gameOver : Function

let score2 = score > 3 && score < 6 ? score :''


const scoreBoard = document.querySelector<HTMLParagraphElement>('.score');
const highScoreBoard = document.querySelector<HTMLParagraphElement>('.highScore');


const message  = document.querySelector<HTMLHeadingElement>('.message');

const messageone  = document.querySelector<HTMLHeadingElement>('.messageone');

const restartGame = document.querySelector<HTMLButtonElement>('.restartGame');

const start = document.querySelector<HTMLButtonElement>('.start');

const check = document.querySelector<HTMLButtonElement>('.check');

const restart = document.querySelector<HTMLButtonElement>('.reset');


const userInput = document.querySelector<HTMLInputElement>('.guess');


const img = document.querySelector<HTMLImageElement>("img");


generateNum = () => {
                    
  randomNumber1 = Math.floor(Math.random() * 10) + 1;
  randomNumber2 = Math.floor(Math.random() * 10) + 1;
  answer = randomNumber1 + randomNumber2;

  if (messageone?.innerText == '' || 
  messageone?.innerText == null) return
  messageone.innerText = `${randomNumber1} ` + '+ ' + `${randomNumber2} = `

  // console.log(userInput?.value, 'whats here 1')

  if (userInput?.value == '' || userInput?.value == null) return
  
  
}


 gameOver = () => {

  if (message?.innerText == '' || message?.innerText == null) return
  message.innerText = 'Game Over...!';

  if (messageone?.innerText == '' || messageone?.innerText == null) return
  messageone.innerText = 'Game Over...!';

  if (restartGame?.innerText == '' || restartGame?.innerText == null) return
  restartGame.innerText = 'Play Again...!';

  if (scoreBoard?.innerText == '' || scoreBoard?.innerText == null) return
  scoreBoard.innerText = String(score);

  if (userInput?.value !== '' || restartGame?.innerText == null) return
  restartGame.innerText = '';


 

}



start?.addEventListener('click',  function (){
 

   if (message?.innerText == '' || message?.innerText == null) return
   message.innerText = 'start...!';
 


   if (scoreBoard?.innerText || scoreBoard?.innerText == null) return
   scoreBoard.innerText =  '1';

  let score : number = 1   
   
   generateNum();  

}
  
  );
   

  check?.addEventListener('click', function () {

      // console.log('home checlk')


    if (userInput?.value == '' || userInput?.value == null) return 
 
    let num = (Number(userInput.value))

    

    if (num === answer )  {
 
            if (message?.innerText == '' || message?.innerText == null) return 
       

         message.innerText = 'Correct!'
      
             if (scoreBoard?.innerText == '' || scoreBoard?.innerText == null) return 

          score += 1;
          scoreBoard.innerText = String(score);
         generateNum();
           userInput.value = '';
     
    } else if (num !== answer && score > 0) {
      if (message?.innerText == '' || message?.innerText == null) return 
     

       message.innerText = 'Wrong!'
     
           if (scoreBoard?.innerText == '' || scoreBoard?.innerText == null) return 
        score -= 1;
       
        scoreBoard.innerText = String(score);
        
       generateNum();
         userInput.value = '';
         

    } else if (num !== answer) {
     
      gameOver()
    }



});
