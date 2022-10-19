let secretNumber = Math.trunc(Math.random() * 20) + 1;

const again = document.querySelector('.again');
const number = document.querySelector('.number');
const check = document.querySelector('.check');
const scoreMain = document.querySelector('.score');
const levelUp = document.querySelector('#levelup');
let info = document.querySelector('.info');

var score = 20;
var highScore = 0;


const displayMessage = function(message){
  document.querySelector('.message').textContent = message;
}

levelUp.classList.add('hidden');

check.addEventListener('click', function(){
  const guess = Number(document.querySelector('.guess').value);

  if(!guess){
    displayMessage("Lütfen bir tahmin giriniz 😕");
  }
  else if(guess === secretNumber){
    displayMessage("Doğru Cevap ✅");
    document.querySelector('body').style.background = 'lightgreen';
    number.style.transition = '.4s';
    number.style.width = '300px';
    number.textContent = secretNumber;
    levelUp.classList.remove('hidden');

    if(score > highScore){
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  else if(guess !== secretNumber){
    if(score > 1){
      displayMessage(guess > secretNumber ? 'Çok Büyük 📈' : 'Çok Küçük 📉');
      score--;
      scoreMain.textContent = score;
    }
    else{
      displayMessage('Oyunu Kaybettin 😥');
      scoreMain.textContent = 0;
    }
  }
});


again.addEventListener('click', function(){
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage ("Tahmin etmeye başla.. 💨");
  info.textContent = '(1 ile 20 arasında bir sayı seçiniz.)';
  scoreMain.textContent = score;
  number.textContent = '?';
  guess.value = '';
  document.querySelector('body').style.background = '#252525';
  levelUp.classList.remove('hidden');
});

levelUp.addEventListener('click', function (){
  score = 10;
  secretNumber = Math.trunc(Math.random() * 50) + 1;
  info.textContent = '(1 ile 50 arasında bir sayı seçiniz.)';
  displayMessage('Tahmin etmeye başla.. 💨');
  scoreMain.textContent = score;
  number.textContent = '?';
  guess.value = '';
  document.querySelector('body').style.background = '#252525';
});


