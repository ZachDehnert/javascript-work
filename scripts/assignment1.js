console.log('\n\nexternal js is connected');
// ****************************************************************************************

// This is for Random Number Generator v1.0

const outputBox = document.getElementById('numDisplay');

function randomNumber() {
    rannum = Math.floor(Math.random() * 52) +1;
    outputBox.innerHTML = rannum;
    console.log(rannum);
}

document.getElementById('randomButton').addEventListener('click',randomNumber);

// This is for Background Changer v1.0

function bgchanger() {
    var bgcolor = document.getElementById('colorInput').value;
    document.body.style.background = bgcolor;
}

document.getElementById('colorButton').addEventListener('click',bgchanger);

// This is for the textbox resetter

function resetText() {
    document.getElementById("textBox1").value = "";
    document.getElementById("textBox2").value = "";
    document.getElementById("textBox1").focus();
}

document.getElementById('clearButton').addEventListener('click',resetText);

// This is for the city and state HTML

function addressReset() {

    const addressBox = document.getElementById('address');
    const cityBox = document.getElementById('city');

    address.style.border = '1px solid #222';
    city.style.border = '1px solid #222';

    if (addressBox.value == '') {
        address.style.border = '2px solid red';
        alert("You have left the Address field empty");
    }
    if (cityBox.value == '') {
        city.style.border = '2px solid red';
        alert("You have left the City field empty");
    }
}


document.getElementById('locationButton').addEventListener('click',addressReset);

// This is for the number comparing script

function compareNumbers() {
    const valOne = document.getElementById('value1').value;
    const valTwo = document.getElementById('value2').value;

    if (valOne > valTwo) {
        alert("Value 1 is larger than Value 2");
    } else {
        alert("Value 2 is larger then Value 1");
    }
}

document.getElementById('valueButton').addEventListener('click',compareNumbers);