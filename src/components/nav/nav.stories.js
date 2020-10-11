import "./nav.css";
import navbottom from "./nav.html";
import navbottomsongs from "./nav-s.html";
import navbottomsettings from "./nav-sett.html";

export default { title: "Components/BottomNavigation" };

export const HomeActive = () => navbottom;
export const SongsActive = () => navbottomsongs;
export const SettingsActive = () => navbottomsettings;
