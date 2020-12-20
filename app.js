const modal = document.querySelector('.popup');

const button = document.querySelector('.btn--projects');
const closeButton = document.querySelector('.close');

button.addEventListener('click', openModal);
closeButton.addEventListener('click', closeModal);

//Listen for click on window
window.addEventListener('click', closeModal);

// Function to close modal
function closeModal(e) {
    console.log(e);
    if (e.target === modal || e.target === closeButton) {
        modal.style.visibility = "hidden";
        modal.style.opacity = 0;
    }

}

function openModal() {
    console.log("button click");
    modal.style.visibility = "visible";
    modal.style.opacity = 1;
}