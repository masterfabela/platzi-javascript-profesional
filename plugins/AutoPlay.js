export function AutoPlay() {

    /**
     * 
     * @param {HTMLMediaElement} player 
     */
    AutoPlay.prototype.run = function(player) {
        player.muted = true;
        player.play();
    }

}

