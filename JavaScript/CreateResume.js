function addNewWEField() {

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
     document.getElementById('objectiveT').innerHTML = document.getElementById("ObjectiveField").value;

     //we
     let wes=document.getElementById('weField').value;
    //  let str=''

    //  for(let e of wes)
    //  {
    //      console.log(e.value)
    //      str= str + '<li> ${e.value} </li>'
    //      console.log(str);
    //  }

     document.getElementById('weT').innerHTML = wes;

     //aq
     let aqs = document.getElementById('aqField').value;
    //  let str1=""

    //  for(let e of aqs) {
    //      str1+='<li> ${e.value} </li>'
    //  }

     document.getElementById('aqT').innerHTML= aqs;

     document.getElementById('skT').innerHTML = document.getElementById('skField').value;

     //code for setting image
     let file = document.getElementById('imgField').files[0]

     console.log(file);

     let reader = new FileReader()
     reader.readAsDataURL(file);

     console.log(reader.result);

     //set the image to template
     document.getElementById('imgTemplate').src=reader.result;


     document.getElementById('cv-form').style.display='none';
     document.getElementById('cv-template').style.display='block';
 }

 //PRINT CV
 function printCV(){
     window.print();
 }