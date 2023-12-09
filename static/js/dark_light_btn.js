function myFunction() {
    var buttonElement = document.getElementById('toggleButton');
    var allElements = document.querySelectorAll('*');
    var body = document.body;
    if (buttonElement.innerText === 'DARK MODE') {
      buttonElement.innerText = 'Light mode';
    }
    else {
      buttonElement.innerText = 'Dark mode';
    }
    body.classList.toggle('dark-mode');
    allElements.forEach(function (element) {
      var style = window.getComputedStyle(element);
      var color = style.getPropertyValue('color');

      if (color === 'rgb(0, 0, 0)' || color === '#000' || color.toLowerCase() === 'black') {
        element.style.color = 'white';
      }
      else if (color === 'rgb(255, 255, 255)' || color === '#fff' || color.toLowerCase() === 'white') {
        element.style.color = 'black';
      }
    });
  }