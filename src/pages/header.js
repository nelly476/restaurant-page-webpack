import "../styles/header.css";

export default function header() {
  const header = document.createElement("div");
  header.className = "header";

  const menuLink = document.createElement("h2");
  menuLink.innerHTML = "Menu";
  menuLink.id = "menuLink";

  const contactLink = document.createElement("h2");
  contactLink.innerHTML = "Contact";
  contactLink.id = "contactLink";

  const logoLink = document.createElement("h2");
  logoLink.innerHTML = "Italiano";
  logoLink.id = "logoLink";
  logoLink.className = "logo-link";

  header.appendChild(logoLink);
  header.appendChild(menuLink);
  header.appendChild(contactLink);

  return header;
}
