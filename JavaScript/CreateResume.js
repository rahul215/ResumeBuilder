function addNewWEField() {
    //console.log("Adding New Field");

    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter Here");

    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAQField() {
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('aqField');
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter Here");

    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode, aqAddButtonOb);

}

function addNewSkField() {

    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('skField');
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter Here");

    let skOb = document.getElementById("sk");
    let skAddButtonOb = document.getElementById("skAddButton");

    skOb.insertBefore(newNode, skAddButtonOb);
}