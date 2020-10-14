import { createTrackElement } from "./track";
import MichaelJacksonImg from "../../assets/MichaelJackson.png";

export default {
  title: "Components/Track",
  // parameters: { layout: "centered" },
};

export const BillieJean = () =>
  createTrackElement({
    tracktitle: "Billie Jean",
    artist: "Michael Jackson",
    imgSrc: MichaelJacksonImg,
    audioSrc:
      "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/none_given/TRG_Banks/TRG_Banks_-_Singles/TRG_Banks_-_Grandpas_great_escape.mp3",
  });
export const BeatIt = () =>
  createTrackElement({
    tracktitle: "Beat It",
    artist: "Michael Jackson",
    imgSrc: MichaelJacksonImg,
  });
export const Thriller = () =>
  createTrackElement({
    tracktitle: "Thriller",
    artist: "Micheal Jackson",
    imgSrc: MichaelJacksonImg,
  });
