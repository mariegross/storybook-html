import "./button.css";
import buttonText from "./button-text.html";
import buttonLogo from "./button-logo.html";
import buttonplay from "./play-text.html";
import buttonaddFavorites from "./favorites.html";
import buttonShare from "./share.html";

export default { title: "Components/Button" };

export const withText = () => buttonText;
export const withLogo = () => buttonLogo;
export const Play = () => buttonplay;
export const AddFavorites = () => buttonaddFavorites;
export const Share = () => buttonShare;
