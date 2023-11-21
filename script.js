var modal = document.getElementById("videoModal");

var span = document.getElementsByClassName("close")[0];

function showPopup(videoSrc, description) {
    var modal = document.getElementById('videoModal');
    var modalVideo = document.getElementById('modalVideo');
    var modalText = document.getElementById('modalText');

    modalVideo.src = videoSrc;
    modalText.innerHTML = description;

    modal.style.display = 'block';

    var span = document.getElementsByClassName('close')[0];
    span.onclick = function() {
        modal.style.display = 'none';
    }
}

function ClickNext(){
    window.location.replace("./align.html");
}

function ToSkating(){
    window.location.replace("./skating_instruction.html");
}

window.onclick = function(event) {
    var modal = document.getElementById('videoModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
