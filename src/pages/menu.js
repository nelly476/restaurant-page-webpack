import "../styles/menu.css";

export default function menu() {
  const menuContainer = document.createElement("div");
  menuContainer.className = "menu-container content";
  // menuContainer.className = "container";

  const dishes = [
    "Lasagne alla Bolognese",
    "Fettuccine al Pomodoro",
    "Gnocchi di Patate",
    "Melanzane alla Parmigiana",
    "Pollo alla Cacciatora",
    "Pizza Margherita",
    "Costoletta alla Milanese",
    "Vitello Tonnato",
  ];

  dishes.forEach((item) => {
    const dish = document.createElement("div");
    dish.className = "dish";

    const dishName = document.createElement("p");
    dishName.innerHTML = item;

    const dishPrice = document.createElement("p");
    dishPrice.innerHTML = "17.99";

    dish.appendChild(dishName);
    dish.appendChild(dishPrice);

    menuContainer.appendChild(dish);
  });

  return menuContainer;
}
