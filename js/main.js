let albumCover = document.querySelectorAll('.album-cover');
let audio = document.querySelectorAll('.audio');

// function to hide all divs
function hideAll() {
  audio.forEach(function(el) {
    el.style.display = 'none';
  });
}

hideAll();

albumCover.forEach(function(el) {
  el.onclick = (e) => {
    hideAll();

switch (e.target.getAttribute('id')) {
        case 'bocelli':
          document.querySelector('#conTePartiro')
          	.style.display = 'block';
          break;
        case 'amore':
          document.querySelector('#besameMucho')
          	.style.display = 'block';
          break;
        case 'passione':
          document.querySelector('#quizas')
          .style.display = 'block';
          break;
        case 'si':
          document.querySelector('#amoSoltantoTe')
          .style.display = 'block';
          break;
      } // end of switch
      // switch does not need default for this
      let players = document.querySelectorAll('audio');
      players.forEach(function(el) {
              el.pause();
              el.currentTime = 0;
          });
    } // end of function for clicking

  }); // end of forEach()
