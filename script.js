const images = [
    'back1.jpg', 
    'back2.jpg', 
    'color1.png'
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



function toggleQuestion() {
    
}
