// defining variables 
const addNoteBtn = document.querySelector('.Add-Note-Btn');
const addNoteModal = document.querySelector('.addNoteModal');
const closeNoteBtn = document.querySelector('.addNoteModal i');
const overlay = document.querySelector('.overlay');
const saveNoteBtn = document.querySelector('.saveNoteBtn');
const viewNoteModal = document.querySelector('.viewNoteModal'); // ✅ Moved outside

// Add Note Popup Modal 
addNoteBtn.addEventListener('click', function () {
    addNoteModal.classList.add('show');
    overlay.classList.add('show');
});

// Close Popup Modal
function closeNoteModal() {
    addNoteModal.classList.remove('show');
    overlay.classList.remove('show');
}

// Event to Save Note
saveNoteBtn.addEventListener('click', function () {
    const Title = document.getElementById('title-field').value.trim();
    const Description = document.getElementById('description-field').value.trim();

    if (Title === "" || Description === "") {
        alert("Fill Field");
        return;
    }

    const NoteDiv = document.createElement('div');
    NoteDiv.classList.add('note');

    const NoteTitle = document.createElement('h2');
    const NoteDescription = document.createElement('p');
    const DeleteOption = document.createElement('i');

    DeleteOption.className = 'ri-delete-bin-7-line';

    NoteTitle.innerText = Title;
    NoteDescription.innerText = Description;

    NoteDiv.appendChild(NoteTitle);
    NoteDiv.appendChild(NoteDescription);
    NoteDiv.appendChild(DeleteOption);
    document.querySelector('.notes-section').prepend(NoteDiv);

    document.getElementById('title-field').value = '';
    document.getElementById('description-field').value = '';
    closeNoteModal();

    // Delete note
    DeleteOption.addEventListener('click', function (e) {
        e.stopPropagation();
        NoteDiv.remove();
    });

    // View note
    NoteDiv.addEventListener('click', function () {
        document.querySelector('.viewNoteModal .modal-Title').innerText = NoteTitle.innerText;
        document.querySelector('.viewNoteModal .modal-Description').innerText = NoteDescription.innerText;

        overlay.classList.add('show');
        viewNoteModal.classList.add('show');
    });
});

// Close any modal on overlay click
overlay.addEventListener('click', function () {
    addNoteModal.classList.remove('show');
    viewNoteModal.classList.remove('show');
    overlay.classList.remove('show');
});
