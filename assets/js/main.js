function changeColorBackground() {

    let background = document.querySelector('body');
          
    if (background.className === 'light') {
        background.className = 'dark';
    } else {
        background.className = 'light';
    }
}