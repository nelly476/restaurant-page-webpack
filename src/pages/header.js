import "../styles/header.css";

export default function header() {
  const header = document.createElement("div");
  header.className = "header";

  const menuLink = document.createElement("h2");
  menuLink.innerHTML = "Menu";

  const contactLink = document.createElement("h2");
  contactLink.innerHTML = "Contact";

  header.appendChild(menuLink);
  header.appendChild(contactLink);

  return header;
}
