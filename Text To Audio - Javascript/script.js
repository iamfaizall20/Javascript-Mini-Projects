// Select Elements with Id
const textarea = document.getElementById('textarea'),
    button = document.getElementById('button');

// Creating Hear Audio function
const hearAudio = (textSpeech) => {
    const speech = new SpeechSynthesisUtterance();

    speech.text = textSpeech;

    speech.onstart = () => {
        button.disabled = true;
        button.textContent = `Converting Into Voice`;
    }

    // Restoring Button On Speech End
    speech.onend = () => {
        button.disabled = false;
        button.textContent = `Hear The Voice?`;
        textarea.value = ''; //This will clear the previous text when voice is completed
    }

    window.speechSynthesis.speak(speech);
}

// Adding Onclick function on Button
button.onclick = () => {
    const Text = textarea.value.trim();

    // Edge Case 
    if (Text === '') {
        alert("ERROR, There is no Text To Hear");
    } else {
        hearAudio(Text);
    }
}