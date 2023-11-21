var modal = document.getElementById("videoModal");

var span = document.getElementsByClassName("close")[0];

function showPopup(videoSrc, description) {
    var modal = document.getElementById('videoModal');
    var modalVideo = document.getElementById('AlignmentVideo');

    modalVideo.src = videoSrc;

    modal.style.display = 'block';

    var span = document.getElementsByClassName('close')[0];
    span.onclick = function() {
        modal.style.display = 'none';
        document.removeEventListener('keydown', handleEscape);
    }

    // Event listener for Escape key
    function handleEscape(event) {
        if (event.key === 'Escape') {
            modal.style.display = 'none';
            document.removeEventListener('keydown', handleEscape);
        }
    }

    // Add event listener when modal is opened
    document.addEventListener('keydown', handleEscape);
}

function ToBoxing(){
    window.location.replace("./align.html");
}

function ClickPrevious(){
    window.location.replace("./skating_instruction.html");
}

window.onclick = function(event) {
    var modal = document.getElementById('videoModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
