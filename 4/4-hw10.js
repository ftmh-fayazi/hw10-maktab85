let data = {
    "Fish": {
      "trout" : {},
      "salmon" : {}
    },
    "Tree": {
        "Huge": {
        "sequoia": {},
        "oak": {}
      },
      "Flowering": {
        "apple tree": {},
        "magnolia" : {}
      }
    }
  };
  function createTree(container, obj){
    container.append(createTreeItems(obj));
 }
 
 function createTreeItems(obj){
     if (!Object.keys(obj).length)
     return;
 
     let ul = document.createElement('ul');
 
       for (let key in obj) {
         let li = document.createElement('li');
         li.innerHTML = key;
 
         let childrenUl = createTreeItems(obj[key]);
         if (childrenUl) {
           li.append(childrenUl);
         }
 
         ul.append(li);
       }
 
       return ul;
 }
 
 let container = document.getElementById('container');
 
 createTree(container, data);