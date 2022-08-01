var form = document.querySelector('.form');
var input1 = document.querySelector('.input1');
var input2 = document.querySelector('.input2');
var btn = document.querySelector('.btn');
var result = document.querySelector('.result');
var money = 2000;
form.addEventListener('submit', function (evt){
  evt.preventDefault();

  if (isNaN(input2.value)) {
    result.textContent = 'Son kiriting'
  } 
  else if (input2.value < money) {
    result.textContent = `Pulingiz yetmadi ${input1.value}`
  }
  else if(input2.value >= money){
    result.textContent = ` ${input1.value} O'tdingiz`
  }
})