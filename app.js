
const buttons = document.getElementsByClassName("btn--projects");
const buttonsArray = Array.from(buttons).entries();
const modals = document.getElementsByClassName("popup");
const closeButtons = document.getElementsByClassName("close");

for (let [index, buttons] of buttonsArray) {
    const showModal = () => {
        modals[index].style.visibility = "visible";
        modals[index].style.opacity = 1;
    };
    const hideModal = (e) => {
        if (e.target === modals[index]) {
            modals[index].style.visibility = "hidden";
            modals[index].style.opacity = 0;
        }
    };
    const closeModal = () => {
        modals[index].style.visibility = "hidden";
        modals[index].style.opacity = 0;
    };
    buttons.addEventListener("click", showModal);
    closeButtons[index].addEventListener("click", closeModal);
    window.addEventListener('click', hideModal);
}