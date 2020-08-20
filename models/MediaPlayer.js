

/**
 * 
 * @param {HTMLMediaElement} media 
 */
export function MediaPlayer(media, plugins) {
    this.media = media;
    this.plugins = plugins || [];
    this._initPlugins();
  }

  MediaPlayer.prototype._initPlugins = function(){
    this.plugins.forEach(plugin => {
      plugin.run(this.media);
    });
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

  MediaPlayer.prototype.muteUnmute = function() {
    this.media.muted = !this.media.muted;
  }
