let rand_num1 = 0;
let count = 0;

const getRandomIntNumberInRange = (min, max) => {
    return Math.floor(Math.random() * max) + min;
};

const ramdomizeNumbers = () => {
    rand_num1 = getRandomIntNumberInRange(1, 9);
    document.querySelector('#num1').innerHTML = rand_num1;
};

addEventListener("DOMContentLoaded", () => {
    ramdomizeNumbers();
});

document.querySelector('button').addEventListener('click', () => {
    count++;
    document.querySelector('#rivit').textContent = `Valmiita rivejä: ${count}`;

    ramdomizeNumbers();
    document.querySelector('input').value = '';
});
