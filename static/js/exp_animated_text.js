const animatedTexts = document.querySelectorAll('.animated-text');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('appear');
        } else {
            entry.target.classList.remove('appear');
        }
    });
});

animatedTexts.forEach(text => {
    observer.observe(text);
});