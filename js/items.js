for (let i = 1; i <= 10; i++) {

  var divItemElement = document.createElement("div");
  divItemElement.classList.add("item-element");
  divItemElement.id = i;

  const divItemText = document.createElement("div");
  divItemText.classList.add("item-text");

  const itemHeader = document.createElement("h2");
  const itemHeaderText = document.createTextNode("Item");

  const itemPosition = document.createElement("p");
  const itemPositionText = document.createTextNode("Pos." + i);

  divItemElement.append(divItemText);
  divItemText.append(itemHeader);
  itemHeader.append(itemHeaderText);
  divItemText.append(itemPosition);
  itemPosition.append(itemPositionText);

  document.querySelector(".item-container").append(divItemElement);

  
  const ItemButton = document.getElementById(i);

  ItemButton.addEventListener("click", (event) => {
    const ItemButtonNumber = ItemButton.getAttribute('id');
    alert("Item's position: " + ItemButtonNumber);
  });
};