let input = document.querySelector('input');
let add = document.querySelector('#plus');
let min = document.querySelector('#minus');
let by = document.querySelector('#by');
let game = document.querySelector('.game');
let fst = document.querySelector('.first');
let h1 = document.querySelector('.game h1');
let addB = document.querySelector('#addB');
let subB = document.querySelector('#subB');
let mulB = document.querySelector('#mulB');
let aB = document.querySelector('#aB');
let sB = document.querySelector('#sB');
let mB = document.querySelector('#mB');
let state = document.querySelector('#state');

let streakTxt = document.querySelector('#streak');
let streakArr = [];
let streak = streakArr.length;
let ran1 = Math.floor(Math.random() * 10);
let ran2 = Math.floor(Math.random() * 10);
let ans = 0;

add.onclick = function () {
  game.style.display = 'block';
  fst.style.display = 'none';
  addf();
};
min.onclick = function () {
  game.style.display = 'block';
  fst.style.display = 'none';
  subf();
};
by.onclick = function () {
  game.style.display = 'block';
  fst.style.display = 'none';
  mulf();
};
function addf() {
  addB.style.display = 'block';
  aB.style.display = 'block';
  let str = String(ran1);
  let str2 = String(ran2);
  let ansStr = str + ' + ' + str2;
  h1.innerText = ansStr;
  ans = ran1 + ran2;
  ran1 = Math.floor(Math.random() * 20);
  ran2 = Math.floor(Math.random() * 20);
}
aB.onclick = () => {
  addB.style.display = 'none';
  aB.style.display = 'none';
  game.style.display = 'none';
  fst.style.display = 'block';
};
addB.onclick = (event) => {
  event.preventDefault()
  if (Number(input.value) === ans) {
    streakArr.push(true);
    streak = streakArr.length;
    streakTxt.innerText = 'Streak: ' + streak;
    input.value = '';
    state.innerText = 'correct'
    state.style.color = 'lime';
    state.style.opacity = '1';
    setTimeout(() => {
      state.style.opacity = '0';
    }, 2000);
    addf();
  } else {
    streakArr.length = 0;
    streak = streakArr.length;
    streakTxt.innerText = 'Streak: ' + streak;
    state.innerText = 'incorrect'
    state.style.color = 'red';
    state.style.opacity = '1';
    setTimeout(() => {
      state.style.opacity = '0';
      
    }, 2000);
    input.value = '';
    addf();
  }
};

function subf() {
  subB.style.display = 'block';
  sB.style.display = 'block';
  let str = String(ran1);
  let str2 = String(ran2);
  let ansStr = str + ' - ' + str2;
  h1.innerText = ansStr;
  ans = ran1 - ran2;
  ran1 = Math.floor(Math.random() * 20);
  ran2 = Math.floor(Math.random() * 15);
}

sB.onclick = () => {
  subB.style.display = 'none';
  sB.style.display = 'none';
  game.style.display = 'none';
  fst.style.display = 'block';
};

subB.onclick = (event) => {
  event.preventDefault()
  if (Number(input.value) === ans) {
    streakArr.push(true);
    streak = streakArr.length;
    streakTxt.innerText = 'Streak: ' + streak;
    input.value = '';
    state.innerText = 'correct'
    state.style.color = 'lime';
    state.style.opacity = '1';
    setTimeout(() => {
      state.style.opacity = '0';
    }, 2000);
    subf();
  } else {
    streakArr.length = 0;
    streak = streakArr.length;
    streakTxt.innerText = 'Streak: ' + streak;
    state.innerText = 'incorrect'
    state.style.color = 'red';
    state.style.opacity = '1';
    setTimeout(() => {
      state.style.opacity = '0';
    }, 2000);
    input.value = '';
    subf();
  }
};

function mulf() {
  mulB.style.display = 'block';
  mB.style.display = 'block';
  let str = String(ran1);
  let str2 = String(ran2);
  let ansStr = str + ' x ' + str2;
  h1.innerText = ansStr;
  ans = ran1 * ran2;
  ran1 = Math.floor(Math.random() * 10);
  ran2 = Math.floor(Math.random() * 10);
}

mB.onclick = () => {
  mulB.style.display = 'none';
  mB.style.display = 'none';
  game.style.display = 'none';
  fst.style.display = 'block';
};

mulB.onclick = (event) => {
  event.preventDefault()
  if (Number(input.value) === ans) {
    streakArr.push(true);
    streak = streakArr.length;
    streakTxt.innerText = 'Streak: ' + streak;
    input.value = '';
    state.innerText = 'correct'
    state.style.color = 'lime';
    state.style.opacity = '1';
    setTimeout(() => {
      state.style.opacity = '0';
    }, 2000);
    mulf();
  } else {
    streakArr.length = 0;
    streak = streakArr.length;
    streakTxt.innerText = 'Streak: ' + streak;
    state.innerText = 'incorrect'
    state.style.color = 'red';
    state.style.opacity = '1';
    setTimeout(() => {
      state.style.opacity = '0';
    }, 2000);
    input.value = '';
    mulf();
  }
};
