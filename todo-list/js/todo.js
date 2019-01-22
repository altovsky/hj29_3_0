'use strict';

const input = document.querySelectorAll('input');
const undone = document.querySelector('.undone');
const done = document.querySelector('.done');

Array.from(input).forEach(task => {
  task.addEventListener('click', updateState);
});

function updateState(event) {

	if (event.currentTarget.checked) {
		done.appendChild(event.currentTarget.parentNode);
	} else {
		undone.appendChild(event.currentTarget.parentNode);
	}
}
