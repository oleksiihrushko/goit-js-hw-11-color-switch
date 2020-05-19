import './styles.css';

const body = document.querySelector('body');
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
let timer;
let started = false;

const startBtn = document.querySelector('button[data-action="start"]');
const stopBtn = document.querySelector('button[data-action="stop"]');
startBtn.addEventListener('click', startChangeBgrnd);
stopBtn.addEventListener('click', stopChangeBgrnd);

function startChangeBgrnd() {
  if (!started) {
    timer = setInterval(() => {
      body.style.backgroundColor =
        colors[randomIntegerFromInterval(0, colors.length)];
    }, 1000);
    started = true;
  }
}

function stopChangeBgrnd() {
  clearInterval(timer);
  started = false;
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
