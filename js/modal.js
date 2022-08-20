export const Modal = {
    wrapper:document.querySelector('.modal-wrapper'),
    Message:document.querySelector('.modal .tittle span'),
    ButtonClose:document.querySelector('.modal button.close'),

    open(){
        Modal.wrapper.classList.add('open')
    },
    close(){
        Modal.wrapper.classList.remove('open')
    }
}

Modal.ButtonClose.onclick = () => {
    Modal.close()    
}

window.addEventListener('keydown', handleKeyDown)

function handleKeyDown(event){
    if(event.key === 'Escape')
    Modal.close()
}