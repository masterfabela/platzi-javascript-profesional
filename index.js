import {MediaPlayer} from './models/MediaPlayer.js'
import {AutoPlay} from './plugins/AutoPlay.js'

const video = document.querySelector('video');
const playButton = document.querySelector('#playButton');
const muteButton = document.querySelector('#muteButton');

const player = new MediaPlayer(video, [new AutoPlay()]);

playButton.onclick = () => player.playPause();
muteButton.onclick = () => player.muteUnmute();