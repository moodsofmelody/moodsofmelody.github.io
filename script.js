const images = [
    'back1.png',
    'back4.png',
    'back3.png',
    'back2.png'
];

let currentIndex = 0;

document.getElementById('bg-button').addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % images.length;
    document.body.style.backgroundImage = `url(${images[currentIndex]})`;
});

document.querySelectorAll('.button, .toggle-btn').forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.transform = 'scale(1.1)';
    });
    button.addEventListener('mouseout', () => {
        button.style.transform = 'scale(1)';
    });
});

document.getElementById("openPopup").addEventListener("click", function() {
    document.getElementById("popup").style.display = "flex";
});

document.getElementById("closePopup").addEventListener("click", function() {
    document.getElementById("popup").style.display = "none";
});

function checkJason() {
    const correctAnswers = [
        "50c878", "laufey", "12", "81", "g2", "creeper", "210", "david", "321", "aime",
        "being alone", "melody", "quality time", "4", "august 1", "2314", "1432", "0",
        "positions", "2", "taylor swift", "word hunt", "michael jordan"
    ];

    let score = 0;
    
    for (let i = 0; i < correctAnswers.length; i++) {
        const userInput = document.getElementById(`q${i + 1}a`).value.trim().toLowerCase();
        if (userInput === correctAnswers[i]) {
            score++;
        }
    }

    document.getElementById("result").innerText = `you got ${score} out of ${correctAnswers.length} correct for jason's favs!`;
}


function checkAnswers() {
    const correctAnswers = [
        "50c878", "laufey", "12", "81", "g2", "creeper", "210", "david", "321", "aime",
        "being alone", "melody", "quality time", "4", "august 1", "2314", "1432", "0",
        "positions", "2", "taylor swift", "word hunt", "michael jordan"
    ];

    let score = 0;
    
    for (let i = 0; i < correctAnswers.length; i++) {
        const userInput = document.getElementById(`q${i + 1}b`).value.trim().toLowerCase();
        if (userInput === correctAnswers[i]) {
            score++;
        }
    }

    document.getElementById("result").innerText = `you and jason match ${score} out of ${correctAnswers.length}!`;
}

function toggleAnswers() {
    var answers = document.getElementById("answers");
    answers.style.display = (answers.style.display === "block") ? "none" : "block";
}
