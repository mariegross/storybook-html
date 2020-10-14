import "./track.css";
import playActionSrc from "../../assets/play-action-icon.svg";
import pauseIconSrc from "../../assets/icon-pause-gradient.svg";

export function createTrackElement(track) {
  const trackElement = document.createElement("div");
  // divElement.innerText = "This is a track";

  // Variables
  const artistName = document.createElement("p");
  const trackTitle = document.createElement("h4");
  const textElement = document.createElement("div");
  const artistImg = document.createElement("img");
  const playActionButton = document.createElement("button");
  const playActionIcon = document.createElement("img");
  const borderElement = document.createElement("div");
  const audioElement = new Audio(track.audioSrc);
  let isPlaying = false;

  const showPlayIcon = (playActionIcon) => {
    playActionIcon.src = playActionSrc;
    playActionIcon.alt = "Play-Button";
  };

  const showPauseIcon = (playActionIcon) => {
    playActionIcon.src = pauseIconSrc;
    playActionIcon.alt = "Pause-Button";
  };

  //   Classes
  trackElement.className = "track";
  textElement.className = "track__text";
  artistImg.className = "img__artist";
  borderElement.className = "border";
  playActionButton.className = "track__btn";

  // Properties
  artistName.innerText = track.artist;
  trackTitle.innerText = track.tracktitle;
  artistImg.src = track.imgSrc;
  playActionIcon.src = playActionSrc;
  playActionButton.onclick = function () {
    if (isPlaying) {
      //   isPlaying = false;
      audioElement.pause();
      showPlayIcon(playActionIcon);
    } else {
      //   isPlaying = true;
      audioElement.play();
      showPauseIcon(playActionIcon);
    }
    isPlaying = !isPlaying;
  };

  // Methods
  playActionButton.append(playActionIcon);
  textElement.append(trackTitle, artistName);
  trackElement.append(artistImg, borderElement);
  borderElement.append(textElement, playActionButton);

  return trackElement;
}
