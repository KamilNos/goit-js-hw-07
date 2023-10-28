const categoryList = document.querySelector("#categories");
const categoryItems = categoryList.querySelectorAll("li.item");
const numberOfCategories = categoryItems.length;
console.log("Number of categories: " + numberOfCategories);

for (const item of categoryItems) {
  const title = item.querySelector("h2").textContent;
  const categoryElements = item.querySelectorAll("ul li");
  const numberOfElements = categoryElements.length;
  console.log("Category: " + title);
  console.log("Elements: ", numberOfElements);
}

