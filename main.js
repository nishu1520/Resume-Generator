function addNewWEField() {
  let newNode = document.createElement("textarea");

  newNode.classList.add("form-control");
  newNode.classList.add("weField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 5);
  newNode.setAttribute('placeholder', 'Enter Here');

  let weOb = document.getElementById("we");
  let weAddButtonOb = document.getElementById("weAddButton");

  weOb.insertBefore(newNode, weAddButtonOb);
}

// Designed By Avinash
function addNewAQField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("aqField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 5);
  newNode.setAttribute('placeholder', 'Enter Here');

  let aqOb = document.getElementById("aq");
  let aqAddButtonOb = document.getElementById("aqAddButton");

  aqOb.insertBefore(newNode, aqAddButtonOb);
}
//adding new skill section 
function addNewSKField() {
  let newNode = document.createElement("textarea");

  newNode.classList.add("form-control");
  newNode.classList.add("skField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 5);
  newNode.setAttribute('placeholder', 'Enter Here');

  let skOb = document.getElementById("sk");
  let skAddButtonOb = document.getElementById("skAddButton");

  skOb.insertBefore(newNode, skAddButton);
}

//adding new hobby section 
function addNewHBField() {
  let newNode = document.createElement("textarea");

  newNode.classList.add("form-control");
  newNode.classList.add("hbField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 5);
  newNode.setAttribute('placeholder', 'Enter Here');

  let hbOb = document.getElementById("hb");
  let skAddButtonOb = document.getElementById("hbAddButton");

  hbOb.insertBefore(newNode, hbAddButton);
}
//genarating resume function//

function generate() {
  let nameField = document.getElementById("namefeild").value;
  let name = document.getElementById("name");
  name.innerHTML = nameField;

  document.getElementById("name2").innerHTML = nameField;

  document.getElementById("profession").innerHTML = document.getElementById("professionfeild").value;

document.getElementById("profession2").innerHTML = document.getElementById("professionfeild").value;

  document.getElementById("contact").innerHTML = document.getElementById("phone").value;

  document.getElementById("email").innerHTML = document.getElementById("mailfeild").value;

  document.getElementById("address").innerHTML = document.getElementById("addressfeild").value;

  document.getElementById("fb").setAttribute("href", document.getElementById("linkedfeild0").value);
  document.getElementById("linked").setAttribute("href", document.getElementById("linkedfeild1").value);
  document.getElementById("insta").setAttribute("href", document.getElementById("linkedfeild3").value);
  document.getElementById("myweb").setAttribute("href", document.getElementById("linkedfeild2").value);


  document.getElementById("objectiveT").innerHTML = document.getElementById("objectivefeild").value;

// Get all elements with the class name "eqField"
let aqs = document.getElementsByClassName("eqField");

// Loop through each element and append its value as a new list item
for (let e of aqs) {
  // Trim to avoid empty list items
  let trimmedValue = e.value.trim();
  if (trimmedValue !== '') {
    // Create a new list item element
    let listItem = document.createElement('li');
    listItem.textContent = trimmedValue;

    // Append the new list item to the "academicT" ul
    document.getElementById("academicT").appendChild(listItem);
  }
}


  let wes = document.getElementsByClassName("weField");
  let str1 = "";

  for (let e of wes) {
    str1 += `<li>${e.value}</li>`;
  }
  document.getElementById("work").innerHTML = str1;

  let sk = document.getElementsByClassName("skField");
  let str2 = "";

  for (let e of sk) {
    str2 += `<li>${e.value}</li>`;
  }
  document.getElementById("skills").innerHTML = str2;

  let heb = document.getElementsByClassName("hbField");
  let str3 = "";

  for (let e of heb) {
    str3 += `<li>${e.value}</li>`;
  }
  document.getElementById("hobby").innerHTML = str3;

  let file = document.getElementById("imagefeild").files[0];

  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onloadend = function() {
    document.getElementById("myimg").src = reader.result;
  }

  document.getElementById("resume-template").style.display = "block";
  document.getElementById("resume-form").style.display = "none";
}

function printresume() {
  window.print();
}