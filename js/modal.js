const openModalLink = document.getElementById('openModalOne');
const closeModalButtons = document.getElementById('closeModalOne');
const overlayOne = document.getElementById('overlayOne');
const modalOne = document.getElementById('modalOne');


openModalLink.addEventListener('click', () => {
    openModalOne()
})

closeModalButtons.addEventListener('click', () => {
    closeModalOne()
})

overlayOne.addEventListener('click', () => {
    closeModalOne()
})

function openModalOne() {
    modalOne.classList.add('active')
    overlayOne.classList.add('active')
}

function closeModalOne() {
    modalOne.classList.remove('active')
    overlayOne.classList.remove('active')
}