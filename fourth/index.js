let notes = [];
let titles = [];

function validate() {
    let errorMessage = '';
    document.querySelector('#errorMessage').innerText = '';
    let note = document.querySelector('.text').value;

    if (!note.length || note.length > 220) {
        errorMessage = 'Введите сообщение. Оно не должно быть больше, чем 220 символов!'
        document.querySelector('#errorMessage').innerText = errorMessage;
        return;
    }
    return note;
}

// добавляю комментарий
function addNote() {
    let note = validate();
    let text = document.querySelector('#name').value;

    // сохраняем в локальном хранилище текст и заголовок 
    localStorage.setItem('note', note);
    localStorage.setItem('text', text);

    fillNoteTags(note, text);

    // очищаем поле
    document.querySelector('.text').value = '';
    document.querySelector('#name').value = '';
}

// создаем и наполняю теги для комментариев
function fillNoteTags(note, text) {
    let resField = document.querySelector('.notes');

    let textDiv = document.createElement('div');
    textDiv.classList.add('note-text');
    resField.appendChild(textDiv);

    let noteDiv = document.createElement('div');
    noteDiv.classList.add('note-text');
    resField.appendChild(noteDiv);

    textDiv.innerText = text;
    noteDiv.innerText = note;
 
}

// отображаю комментарии из хранилища
function displayNotes() {
  

   let texts = localStorage.getItem('text');
   let notes = localStorage.getItem('note');
   document.querySelector(".notes").value = texts
   document.querySelector(".notes").value = notes
}

displayNotes();

document.querySelector('button').addEventListener('click', addNote);