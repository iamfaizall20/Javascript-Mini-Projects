// selecting fields
const Inputfield = document.getElementById('textInput'),
    copyIcon = document.querySelector('.copyIcon'),
    copyLabel = document.querySelector('.copyLabel');



// Adding Onclick function on copy icon
copyIcon.onclick = () => {

    // Edge Case - If Input field is empty
    if (Inputfield.value === '') {
        alert('Empty field!')
    } else {
        navigator.clipboard.writeText(Inputfield.value).then(() => {
            // On click change the icon to checkmark
            copyLabel.classList.add('copied');

            // after copying clear the input field
            Inputfield.value = '';
        })

        // switching icon back to clipboard after 4 seconds 
        setTimeout(() => {
            copyLabel.classList.remove('copied');
        }, 4000)
    }
}