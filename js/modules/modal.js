// This file manages the modal functionality, including opening and closing modals for user interactions.

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const openModalButtons = document.querySelectorAll('[data-modal-open]');
    const closeModalButton = document.getElementById('modal-close');

    openModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            modal.classList.add('is-active');
        });
    });

    closeModalButton.addEventListener('click', () => {
        modal.classList.remove('is-active');
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.classList.remove('is-active');
        }
    });
});