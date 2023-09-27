window.onload = function() {
    const typewriterText = document.getElementById('typewriter-text');
    const textToType = typewriterText.textContent;

    typewriterText.textContent = '';
    let textPosition = 0;

    const typingInterval = setInterval(function() {
        if (textPosition < textToType.length) {
            typewriterText.textContent += textToType.charAt(textPosition);
            textPosition++;
        } else {
            clearInterval(typingInterval);
        }
    }, 200);
};