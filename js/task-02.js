const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

const listItems = ingredients.map((value) => {
  const listItem = document.createElement("li");
  listItem.classList.add("item");
  listItem.textContent = value;

  return listItem;
});

ingredientsList.append(...listItems);
console.log(ingredientsList);
