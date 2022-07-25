

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

  console.log(userInput?.value, 'whats here 1')

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


  // restartGame.innerText = 'Play Again';
  // start.style.display = 'none';
  // restartGame.style.display = 'block';
  // scoreBoard.innerText =  score;
  // userInput.value = '';
  // userInput.disabled = true;
  // sound.gameOver.play()
  // score = 0;
  // setTimeout(dead, 1000);
  //setTimeout(hideImage, 8000);

}



start?.addEventListener('click',  function (){
 

   if (message?.innerText == '' || message?.innerText == null) return
   message.innerText = 'start...!';
   console.log(message.innerText,'jeeed1')


   if (scoreBoard?.innerText || scoreBoard?.innerText == null) return
   scoreBoard.innerText =  '1';

  let score : number = 1   // can not find and make a
   
   generateNum();  // can not find and make a function

}
  
  );
   

  check?.addEventListener('click', function () {

      console.log('home checlk')


    if (userInput?.value == '' || userInput?.value == null) return 
 
    let num = (Number(userInput.value))

    console.log(num,answer)
    


    if (num === answer )  {
 
            if (message?.innerText == '' || message?.innerText == null) return 
        // message.innerText = '';

         message.innerText = 'Correct!'
          // message.innerText = '';
             if (scoreBoard?.innerText == '' || scoreBoard?.innerText == null) return 

          score += 1;
          scoreBoard.innerText = String(score);
         generateNum();
           userInput.value = '';
     
    } else if (num !== answer) {
      if (message?.innerText == '' || message?.innerText == null) return 
      // message.innerText = '';

       message.innerText = 'Wrong!'
        // message.innerText = '';
           if (scoreBoard?.innerText == '' || scoreBoard?.innerText == null) return 
        score -= 1;
        scoreBoard.innerText = String(score);
       generateNum();
         userInput.value = '';
         

    } else if (num !== answer && score < 0) {
      console.log(score, 'is score')
      gameOver()
    }


    // // if (Number(userInput.value) === answer ) 
    // // console.log(Number(userInput.value), answer)
    // return 
    // console.log(num,'home', 'legooo')
    //     //  console.log(Number(userInput.value), answer, 'legooo')
    //     //  console.log(userInput.value, answer, 'legooo2')

    //     if (message?.innerText == '' || message?.innerText == null) return 
    //     // message.innerText = '';

    //     message.innerText = 'Correct!'

    //     // if (scoreBoard?.innerText == '' || scoreBoard?.innerText == null) return 
    //     // scoreBoard.innerText = '';

          
    //       // score += 1;
    //       // scoreBoard.innerText = String(score);
    //       generateNum();
    //        userInput.value = '';

    // if (parseInt(userInput.value) !== answer && score >  0 && score < 3) 
    //       score -= 1;
    //       scoreBoard.innerText = String(score);
    //       console.log(userInput.value, )
    //       message.innerText = 'why Wrong !';
    //       generateNum();


    //   if (parseInt(userInput.value) !== answer && score === 0)  
    //       gameOver() 





        // { 

          

            // return 
            // message?.innerText = 'Correct!';
            // score += 1;
            // scoreBoard.innerText = score;
            // firstStageSound();
            // generateNum();
            // setTimeout(successImage, 1000);
            // setTimeout(hideImage, 2000);
           
    
            // } else 
            
            // if (parseInt(userInput.value) !== answer && score > 0 && score < 3) {   
            // score -= 1;
            // scoreBoard.innerText = score;
            // message.innerText = 'Wrong !';
            // sound.fail.play();
            // generateNum();
            // setTimeout(cry, 1000);
            // setTimeout(hideImage, 2000);
            


        // } else 


        
    //     if (parseInt(userInput.value) !== answer && score === 0)  

    //     {
    //         gameOver()    
    // }  else if 
    // (parseInt(userInput.value) === answer && score >= 3 && score <= 6)

    // {
    //     message.innerText = 'Correct!';
    //         score += 1;
    //         scoreBoard.innerText = score;
    //         firstStageSound();
    //         secondStageSound();
    //          generateNum2();
    //         setTimeout(successImage2, 1000);
    //         setTimeout(hideImage, 2000);
    //     console.log('activated substracton')
        
    // } else if (parseInt(userInput.value) !== answer && score  >= 3 && score <= 6) {   
    //     score -= 1;
    //     scoreBoard.innerText = score;

    //     message.innerText = 'Wrong !';
    //     sound.fail.play();
    //     generateNum2();
    //     setTimeout(cry, 1000);
    //     setTimeout(hideImage, 2000);
        


    // } else if (parseInt(userInput.value) === answer && score >= 6 && score <= 9)


    // {
    //     message.innerText = 'Correct!';
    //         score += 1;
    //         scoreBoard.innerText = score;
    //         firstStageSound();
    //      generateNum3();
    //      setTimeout(mag, 1000);
    //     setTimeout(hideImage, 2000);
        

        
    // } else if (parseInt(userInput.value) !== answer && score >= 6 && score <= 9) {   
    //     score -= 1;
    //     scoreBoard.innerText = score;
    //     message.innerText = 'Wrong !';
    //     sound.fail.play();
    //     generateNum3();
    //     setTimeout(cry, 1000);
    //     setTimeout(hideImage, 2000);
        


    // } else if (parseInt(userInput.value) === answer && score >= 9 && score <= 1200)


    // {
    //     message.innerText = 'Correct!';
    //         score += 1;
    //         scoreBoard.innerText = score;
    //         firstStageSound();
    //         generateNum4();
    //         setTimeout(best, 1000);
    //         setTimeout(hideImage, 2000);
       
        
    // } else if (parseInt(userInput.value) !== answer && score >= 9 && score <= 1200) {   
    //     score -= 1;
    //     scoreBoard.innerText = score;

    //     message.innerText = 'Wrong !';
    //     sound.fail.play();
    //     generateNum4();
    //     setTimeout(cry, 1000);
    //     setTimeout(hideImage, 2000);

    // } 


});
