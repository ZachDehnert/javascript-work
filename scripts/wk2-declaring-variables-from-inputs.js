console.log('\n\nexternal js is connected');
// ****************************************************************************************

function textboxInputs1() {

    // These variables will not change
    const txtFname = document.getElementById('fname');
    const outputBox = document.getElementById('outputDisplay1');

    // These variables will change based on the user click and input
    let valFname = txtFname.value;

    // This will change the output area to whatever the user inputted
    document.getElementById('outputDisplay1').innerHTML = valFname;
    txtFname.style.border = '1px solid #222';

    // If the user does not put any name into the box then there needs to be the error below
    if (txtFname.value == '') {
        let valFname = 'Please enter a name in the textbox above.';
        outputBox.innerHTML = valFname;
        txtFname.style.border = '2px solid red';
    }   
}

// This event listener will listen for a click and then run the function above
document.getElementById('submitButton1').addEventListener('click',textboxInputs1);


