import "../styles/mainContent.css";
import mainPageImg from "../assets/main-page-img.jpg";

export default function mainContent() {
  const content = document.createElement("div");
  content.className = "content landing-page";

  const mainImg = new Image();
  mainImg.src = mainPageImg;
  mainImg.className = "main-page-img";

  const mainTextContent = document.createElement("div");
  mainTextContent.className = "main-text-content";

  const textContentName = document.createElement("h1");
  textContentName.innerHTML = "Italiano";

  const textContentDescription = document.createElement("p");
  textContentDescription.innerHTML =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ";

  mainTextContent.appendChild(textContentName);
  mainTextContent.appendChild(textContentDescription);

  content.appendChild(mainImg);
  content.appendChild(mainTextContent);

  return content;
}
