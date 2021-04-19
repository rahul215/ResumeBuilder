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

//generating CV
 function generateCV() {
     //console.log("generating CV");

     let nameField = document.getElementById("nameField").value;
     let nameT1 = document.getElementById("nameT1");

     nameT1.innerHTML = nameField;

     //direct

     document.getElementById('nameT2').innerHTML = nameField;

     //contact

     document.getElementById('contactT').innerHTML = document.getElementById("contactField").value;

     //address
     document.getElementById('addressT').innerHTML = document.getElementById("addressField").value;
     document.getElementById('linkedT').innerHTML = document.getElementById("linkedField").value;
     document.getElementById('gitT').innerHTML = document.getElementById("gitField").value;

     //Objective
     document.getElementById('objectiveT').innerHTML = document.getElementById("objectiveField").value;

     //we
     let wes=document.getElementsByClassName('weField');
     let str=''

     for(let e of wes)
     {
         str= str + '<li> ${e.value} </li>'
     }

     document.getElementById('weT').innerHTML = str;

     //aq
     let aqs = document.getElementsByClassName('aqField');
     let str1=""

     for(let e of aqs) {
         str1+='<li> ${e.value} </li>'
     }

     document.getElementById('aqT').innerHTML= str1;

     document.getElementById('cv-form').style.display='none';
     document.getElementById('cv-template').style.display='block';
 }

 //PRINT CV
 function printCV(){
     window.print();
 }