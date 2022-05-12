import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('#modal .modal-container h2')
const modalDescription = document.querySelector('#modal .modal-container p')
const modalButton = document.querySelector('#modal .modal-container form .buttons .delete-button')

const markAsReadButton = document.querySelectorAll('.actions .mark-as-read')
markAsReadButton.forEach(button => {
    button.addEventListener('click', handleClick)
})

const deleteQuestionButton = document.querySelectorAll('.actions .delete-question')
deleteQuestionButton.forEach(button => {
    button.addEventListener('click', (event) => {
        handleClick(event, false)
    })
})

function handleClick(event, check = true) {
    event.preventDefault()
    const text = check ? 'Marcar como lida' : 'Excluir'
    const slug = check ? 'check' : 'delete'
    const roomId = document.querySelector('#room-id').dataset.id
    const questionId = event.target.dataset.id

    const form = document.querySelector('.modal-container form')
    form.setAttribute('action', `/question/${roomId}/${questionId}/${slug}`)

    modalTitle.innerHTML = `${text} esta pergunta`
    modalDescription.innerHTML = `Tem certeza que você deseja ${text.toLowerCase()} esta pergunta?`
    modalButton.innerHTML = `Sim, ${text.toLowerCase()} esta pergunta`
    check ? modalButton.classList.add('blue-bg') : modalButton.classList.remove('blue-bg')
    modal.open()
}