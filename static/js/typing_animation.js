const textToType = ["I am known for excellence in defining and integrating cutting-edge technologies to improve automation and reliability."];

const textContainer = document.getElementById('textContainer');
let lineIndex = 0;
let charIndex = 0;

function typeText() {
    if (lineIndex < textToType.length) {
        if (charIndex <= textToType[lineIndex].length) {
            textContainer.innerHTML = textToType[lineIndex].substring(0, charIndex);
            charIndex++;
            setTimeout(typeText, 100);
        } else {
            lineIndex++;
            charIndex = 0;
            setTimeout(typeText, 1000); // Delay before typing the next line
        }
    } else {
        // Restart the animation
        lineIndex = 0;
        charIndex = 0;
        textContainer.innerHTML = '';
        setTimeout(typeText, 0);
    }
}

// Start the animation
typeText();