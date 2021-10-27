function progressBar() {
    var progress = document.getElementById("notify_progressbar")
    var width = 1;
    var id = setInterval(frame, 25);

    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            progress.style.width = width + '%';
        }
    }
}