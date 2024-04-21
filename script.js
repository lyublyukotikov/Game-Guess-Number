"use strict";

///////////////////////////////////////

/* 
ЗАДАЧА: 
Создайте игру в угадай число.


Удачи)
*/

let max=20;//максимальное число 
let min=1;//минимальное число 
let valueGuess;//переменная числа которое вводит пользователь
let randomNumber2=Math.random();
console.log(randomNumber2);

let  randomNumber= Math.round((Math.random() * (max - min) + min)); //присвоили переменной randomNumber число от 1 до 20 
console.log(randomNumber)
// const header=document.querySelector("h1");
const reboot=document.querySelector(".again")
console.log(reboot)
const buttonResult=document.querySelector(".check"); // получили кнопку и записали ее в переменную buttonResult 
console.log(buttonResult);
const resaultNumber=document.querySelector(".number");//получили окно куда будем записывать результат
const message=document.querySelector(".message");//получили переменную,которая отвечает за вывод надписи:Число больше вашего результата или число меньше вашего результата
const numberTry=document.querySelector(".score"); //переменная оставшихся попыток
const numberRecord=document.querySelector(".highscore");//получили переменную рекорда
let backGround=document.querySelector("body")
let maxScore=20; //колличество попыток
let heightScore=0;
buttonResult.addEventListener('click', function() {
   valueGuess = Number(document.querySelector(".guess").value); //получили значение которое вводит пользователь и преобразовали его в тип number 

  console.log(valueGuess);
  //когда не ввели число
  if(!valueGuess){
    message.textContent="Вы не ввели число!"
  }
  // когда угадали число
  else if(valueGuess==randomNumber){
   message.textContent='вы победили!'
 
  
  backGround.style.cssText=`
  background: #60b347;
  
  `  

   resaultNumber.textContent=valueGuess;
    if(maxScore>heightScore){ 
    numberRecord.textContent=maxScore;
  }
  }
  // когда не угадали число
  else if(valueGuess!==randomNumber){
//  когда не угадали число и остались попытки 
  if( maxScore>1){
// если попытки остались тогда подсказываем пользователю Больше
    if(valueGuess<randomNumber){
      message.textContent =`введите число больше!!`
      maxScore--;
      numberTry.textContent=maxScore;
    }
    // если попытки остались тогда подсказываем пользователю меньше 
    else if(valueGuess>randomNumber){
      maxScore--;
      numberTry.textContent=maxScore;
      message.textContent = 'введите число меньше!!';
    }
  }
  // если попыток не осталось 
  else{
    message.textContent="Вы проиграли! ";
    maxScore=0;//обнуляем счет 
    numberTry.textContent=maxScore; //заисываем его в поле 
    console.log(maxScore);  //проверяем
  }
   
  }
  


});
//Обработчик событий на кнопку reboot 
reboot.addEventListener('click', function(){
   maxScore=20; //колличество попыток
  randomNumber= Math.round((Math.random() * (max - min) + min)); //получаем другое число
  console.log(randomNumber);
  backGround.style.cssText = '';//обнуляем фон 
  numberRecord.textContent=0;//обнуляем рекорд
 numberTry.textContent=0,
 message.textContent = 'Начните угадывать...';
  resaultNumber.textContent='?';
document.querySelector(".guess").value=""; //получили значение которое вводит пользователь и преобразовали его в тип number 

  
});


// КОНЕЦ


