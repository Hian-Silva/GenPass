let values = ['CatOnion', '44.5', 'JDONMySoul', 'YoDayo', 'Friend', 'Faq', 'Akaina', 'UUU', 'BibooTax', 'IAmGod', 'OhNyoo', 'Ahoy', 'NunNun', 'Beeeeg', 'A', 'Wah', 'TOMORROW', 'Today', 'BauBau', 'Shuba', "ItsAlive", 'FaqingMonkey', 'ImDieThankYouForever', 'DoggoIsHuman', 'Pardun', 'GyatForNerizler', 'DochiDochi', 'Hachamachama', 'Guh', 'WatameWaWarukunaiYoNe', '1to6']

const btn = document.getElementsByTagName('button');
const visor = document.querySelector(`.visor`);
const title = document.querySelector(`.container h1`);
const input = document.querySelector(`.container input`);

//title.addEventListener('mouseover', () => {
//  title.innerHTML = 'Are You Gay?';
//})

function genPass(){
  let num = []
  let pass = ''
  size = input.value
  for(var i = 0; i < values.length; i++){
    num.push(i)
  }
  for(var i = 0; i < size; i++){
    let rand = Math.floor(Math.random() * num.length)
    pass += values[rand]
    num.splice(num.indexOf(rand), 1)
  }
  visor.innerHTML = pass;
}
btn[0].addEventListener('click', genPass);
