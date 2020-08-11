/**
 * 
 * @param {HTMLMediaElement} media 
 */
function MediaPlayer(media) {
    this.media = media;
  }
  
  MediaPlayer.prototype.play = function(){
    this.media.play();
  }
  
  MediaPlayer.prototype.playPause = function(){
    if (this.media.paused){
      this.media.play();
    } else {
      this.media.pause();
    }
  }