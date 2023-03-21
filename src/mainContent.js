import "./style.css";

export default function mainContent() {
  const element = document.createElement("div");
  const btn = document.createElement("button");

  element.innerHTML = "hello";

  btn.innerHTML = "Click me and check the console!";
  btn.classList.add("hello");

  element.appendChild(btn);

  return element;
}
