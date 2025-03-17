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


function checkAnswers() {
    let score = 0;
    const answers = {
        q1: "50c878",
        q2: "laufey",
        q3: "9",
        q4: "81",
        q5: "g2",
        q6: "creeper",
        q7: "210",
        q8: "david",
        q9: "321",
        q10: "aime",
        q11: "being alone",
        q12: "melody",
        q13: "quality time",
        q14: "4",
        q15: "august 1",
        q16: "2314",
        q17: "1432",
        q18: "0",
        q19: "the eminem show",
        q20: "1",
        q21: "taylor swift",
        q22: "word hunt",
        q23: "michael jordan"
    };

    for (let i = 1; i <= 23; i++) {
        const userAnswer = document.getElementById('q' + i).value.trim().toLowerCase();
        const correctAnswer = answers['q' + i].toLowerCase();
        if (userAnswer === correctAnswer) {
            score++;
        }
    }

    document.getElementById('result').innerHTML = `yay u scored ${score} out of 23!`;
    document.getElementById('result').style.display = 'block';
}

function toggleAnswers() {
    var answers = document.getElementById("answers");
    answers.style.display = (answers.style.display === "block") ? "none" : "block";
}
