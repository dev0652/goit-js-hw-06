const categoriesRef = document.querySelector("#categories");

console.log("Number of categories:", categoriesRef.children.length);

const getCategories = (categories) => {
  return [...categories.children].forEach((category) => {
    console.log("Category:", category.querySelector(".item h2").textContent);
    console.log(
      "Elements:",
      category.querySelector(".item ul").children.length
    );
  });
};

getCategories(categoriesRef);
