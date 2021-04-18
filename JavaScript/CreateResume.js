function addNewWEField() {
    //console.log("adding new field");
    
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.setAttribute("rows", 3);
    
    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");
    weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAQField() {
    //console.log("change");
    
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('eqField');
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here");
    
    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("weAddButton");
    aqOb.insertBefore(newNode, aqAddButtonOb);
} 