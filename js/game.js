const P = 'Pierre';
const F = 'Feuille';
const C = 'Ciseaux';

const coups = [P, F, C];

function joueCoupAleatoire(){
    return parseInt(Math.random() * coups.length);
}

const pierreBtn = document.getElementById('pierre');
const feuilleBtn = document.getElementById('feuille');
const ciseauxBtn = document.getElementById('ciseaux');

const scorePlayer = document.getElementById('scorePlayer');
const scoreBot = document.getElementById('scoreBot')

const message = document.getElementById('message');

function gameFinish(){
    if(scoreBot.innerText == 3){
        message.innerText = 'Vous avez perdu !';
    }else if(scorePlayer.innerText == 3){
        message.innerText = 'Vous avez gagné !';
    }
}

pierreBtn.addEventListener('click', (element) => {
    const coupBot = coups[joueCoupAleatoire()];

    if(coupBot === F){
        scoreBot.innerText = parseInt(scoreBot.innerText) + 1;
    }else if(coupBot === C){
        scorePlayer.innerText = parseInt(scorePlayer.innerText) + 1;
    }

    gameFinish();
});

feuilleBtn.addEventListener('click', (element) => {
    const coupBot = coups[joueCoupAleatoire()];

    if(coupBot === C){
        scoreBot.innerText = parseInt(scoreBot.innerText) + 1;
    }else if(coupBot === P){
        scorePlayer.innerText = parseInt(scorePlayer.innerText) + 1;
    }

    gameFinish();
});

ciseauxBtn.addEventListener('click', (element) => {
    const coupBot = coups[joueCoupAleatoire()];

    if(coupBot === P){
        scoreBot.innerText = parseInt(scoreBot.innerText) + 1;
    }else if(coupBot === F){
        scorePlayer.innerText = parseInt(scorePlayer.innerText) + 1;
    }

    gameFinish();
});

