const modal = document.querySelector('.popup');

const button = document.querySelector('.btn--projects');

button.addEventListener('click', openModal)

//Listen for click on window
window.addEventListener('click', closeModal);

// Function to close modal
function closeModal(e) {
    console.log(e);
    if (e.target === modal) {
        modal.style.visibility = "hidden";
        modal.style.opacity = 0;
    }
}

function openModal() {
    console.log("button click");
    modal.style.visibility = "visible";
    modal.style.opacity = 1;
}