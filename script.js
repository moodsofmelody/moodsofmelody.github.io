let bgToggle = false;
function toggleBackground() {
    document.body.style.backgroundImage = bgToggle ? "url('background1.jpg')" : "url('background2.jpg')";
    bgToggle = !bgToggle;
}

document.querySelectorAll('.button, .toggle-btn').forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.transform = 'scale(1.1)';
    });
    button.addEventListener('mouseout', () => {
        button.style.transform = 'scale(1)';
    });
});