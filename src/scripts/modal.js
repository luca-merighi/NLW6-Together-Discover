export default function Modal() {
    
    const cancelButton = document.querySelector('#modal .buttons .cancel-button')
    cancelButton.addEventListener('click', () => {
        close()
    })

    function open() {
        const markAsReadModal = document.querySelector('#modal')
        markAsReadModal.classList.add('show')
    }

    function close() {
        const markAsReadModal = document.querySelector('#modal')
        markAsReadModal.classList.remove('show')
    }

    return {open, close}
}