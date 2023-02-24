const categoriesRef = document.querySelector('#categories');

console.log('Number of categories:', categoriesRef.children.length);

const getCategories = (categories) => {
  return [...categories.children].forEach((category) => {
    console.log(
      'Category:',
      category.firstElementChild.textContent
      // or, alternatively:
      // category.querySelector('h2').textContent
    );

    console.log(
      'Elements:',
      category.lastElementChild.children.length
      // or, alternatively:
      // category.querySelector('ul').children.length
    );
  });
};

getCategories(categoriesRef);
