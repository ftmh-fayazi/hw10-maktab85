function createList() {
  let list = document.createElement("ul");
  while (true) {
    let listitem = prompt("please enter your list item");
    if (!listitem) {
      break;
    }
    let item = document.createElement("li");
    item.innerText = listitem;
    list.append(item);
    document.body.append(list);
  }
}

createList();
