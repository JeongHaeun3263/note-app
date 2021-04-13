const submitBtn = document.querySelector('.submit-btn');
const statusBtns = document.querySelector('.status');
const noteContainer = document.querySelector('.notes');
const title = document.querySelector('.input-title');
const status = document.querySelector('.input-status');
let notes = document.querySelectorAll('.note');

submitBtn.addEventListener('click', addNote);
statusBtns.addEventListener('click', (e) => {
	const filter = e.target.dataset.filter;
	if (filter == null) {
		return;
	}

	notes.forEach((note) => {
		if (filter === '*' || filter === note.dataset.type) {
			note.classList.remove('invisible');
		} else {
			note.classList.add('invisible');
		}
	});
});

function addNote() {
	if (title.value == '' || status.value == '') {
		alert('Please Enter the text');
		return;
	}

	const noteDiv = document.createElement('div');
	noteDiv.setAttribute('class', 'note');
	noteDiv.setAttribute('data-type', status.value);

	const noteTitle = document.createElement('span');
	const noteStatus = document.createElement('span');
	noteTitle.setAttribute('class', 'note-title');
	noteTitle.innerText = title.value;
	noteStatus.setAttribute('class', 'note-status');
	noteStatus.innerText = status.value;

	noteDiv.appendChild(noteTitle);
	noteDiv.appendChild(noteStatus);
	noteContainer.appendChild(noteDiv);
	notes = document.querySelectorAll('.note');

	title.value = '';
	status.value = '';
}
