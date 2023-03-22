import "../styles/mainContent.css";
import mainPageImg from "../assets/main-page-img.jpg";

export default function mainContent() {
  const content = document.createElement("div");
  content.className = "content";

  const mainImg = new Image();
  mainImg.src = mainPageImg;
  mainImg.className = "main-page-img";

  const mainTextContent = document.createElement("div");
  mainTextContent.className = "main-text-content";

  const textContentName = document.createElement("h1");
  textContentName.innerHTML = "Italiano";

  mainTextContent.appendChild(textContentName);

  content.appendChild(mainImg);
  content.appendChild(mainTextContent);

  return content;
}
