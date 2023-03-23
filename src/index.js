import "./styles/index.css";

import mainContent from "../src/pages/mainContent";

import header from "../src/pages/header";

import menu from "../src/pages/menu";

document.body.appendChild(header());

document.body.appendChild(mainContent());

document.getElementById("menuLink").onclick = () => {
  document.body.children[1].remove();
  document.body.appendChild(menu());
};

document.getElementById("contactLink").onclick = () => {
  document.body.children[1].remove();
  document.body.appendChild(mainContent());
};
