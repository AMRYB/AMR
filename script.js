function toggleVisibility(id) {
    var element = document.getElementById(id);
    if (element.style.display === 'block') {
        element.style.display = 'none';
    } else {
        element.style.display = 'block';
    }
}

document.getElementById('date').textContent = new Date().toLocaleDateString();

document.addEventListener('DOMContentLoaded', function() {
  var myAudio = document.getElementById('myAudio');
  setTimeout(function(){
    myAudio.play();
  }, 5000);
});
