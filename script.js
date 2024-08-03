document.getElementById('yes-btn').addEventListener('click', function() {
    document.getElementById('landing-page').classList.remove('active');
    setTimeout(function() {
        document.getElementById('surprise-page').classList.add('active');
        createPetals();
    }, 500); // Match the transition duration
});

document.getElementById('landing-page').classList.add('active');

// Prevent "No" button from doing anything
document.getElementById('no-btn').addEventListener('click', function() {
    alert('Please click Yes!');
});

function createPetals() {
    const container = document.querySelector('.petals-container');
    for (let i = 0; i < 25; i++) {
        const petal = document.createElement('div');
        petal.classList.add('petal');
        petal.style.left = `${Math.random() * 100}vw`;
        petal.style.animationDuration = `${Math.random() * 3 + 2}s`;
        petal.style.animationDelay = `${Math.random() * 5}s`;
        container.appendChild(petal);
    }
}
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

