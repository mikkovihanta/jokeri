let count = 0;

const getRandomIntNumberInRange = (min, max) => {
    return Math.floor(Math.random() * max) + min;
};

const lisaRivi = () => {
    const tableBody = document.querySelector('#num1 tbody');
    
    const uusRivi = document.createElement('tr');

    for (let i = 0; i < 7; i++) {
        const solu = document.createElement('td');
        const rand_num = getRandomIntNumberInRange(1, 9);
        solu.textContent = rand_num;
        uusRivi.appendChild(solu);
    }

    tableBody.appendChild(uusRivi);

    count++;
    document.querySelector('#rivit').textContent = `Valmiita rivejä: ${count}`;
};

document.querySelector('#uutta').addEventListener('click', lisaRivi);
