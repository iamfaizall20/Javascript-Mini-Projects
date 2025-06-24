// now add js 

document.getElementById('copyBtn').addEventListener('click', function () {

    const inputText = document.getElementById('textInput').value;

    navigator.clipboard.writeText(inputText)

    //Clear the input fied when the text is copied
    document.getElementById('textInput').value = '';
})