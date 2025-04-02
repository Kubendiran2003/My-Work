function changeBackgroundColor() {
    const width = window.innerWidth;
    if (width < 600) {
        document.body.style.backgroundColor = 'lightblue';
    } else if (width < 900) {
        document.body.style.backgroundColor = 'lightgreen';
    } else {
        document.body.style.backgroundColor = 'lightcoral';
    }
}

// Initial call to set the background color based on the current window size
changeBackgroundColor();

// Change the background color when the window is resized
window.addEventListener('resize', changeBackgroundColor);