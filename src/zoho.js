window.addEventListener('load', () => {
  let initCount = 100;
  let initInterval = setInterval(() => {
    const darkModeBody = document.querySelector('body.darkMode');
    if (darkModeBody) {
      document.querySelector('body').classList.add('darkModeSoren');
      document.querySelector('body').classList.remove('darkMode');
      clearInterval(initInterval);
    } else if (initCount <= 0) {
      clearInterval(initInterval);
    }

    initCount -= 1;
  }, 50);
  
  let buttonIntervalCount = 100;
  let buttonInterval = setInterval(() => {
    const button = document.querySelector('#bb-nightmode > button');
    if (button) {
      clearInterval(buttonInterval);
      button.onclick = function() {
        document.querySelector('body').classList.remove('darkMode');
        document.querySelector('body').classList.toggle('darkModeSoren');
      }
    } else if (buttonIntervalCount <= 0) {
      clearInterval(buttonInterval);
      console.log('[Nothing was found]');
    }

    buttonIntervalCount -= 1;
  }, 50);
});