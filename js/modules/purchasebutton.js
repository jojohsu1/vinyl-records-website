const Clickpurchasebtn = (_ => {
    //DOM
    const purchaseBtnElem = document.querySelector('.purchase')
    const modalElem = document.querySelector('.modal')
    const openModalBtns = document.querySelectorAll('[data-modal-target]')
    const closeModalBtns = document.querySelectorAll('[data-close-btn]')
    const overlayElem = document.querySelector('#overlay')

    const openModalEvent = modal => {
        if (modal == null) return
        modal.classList.add('active')
        if (overlayElem) overlayElem.classList.add('active')
    }

    const closeModalEvent = modal => {
        if (modal == null) return
        modal.classList.remove('active')
        if (overlayElem) overlayElem.classList.remove('active')
    }

    overlayElem.addEventListener('click', _ => {
        let modals = document.querySelectorAll('.modal.active')
        modals.forEach(modal => {
            closeModalEvent(modal)
        })
    })

    openModalBtns.forEach(button => {
        button.addEventListener('click', _ => {
            let modal = document.querySelector(button.dataset.modalTarget)
            openModalEvent(modal)
        })
    })

    closeModalBtns.forEach(button => {
        button.addEventListener('click', _ => {
            let modal = button.closest('.modal')
            closeModalEvent(modal)
        })
    })


    const init = _ => {
        openModalEvent(purchaseBtnElem)
        closeModalEvent(modalElem)
    }
    return {
        init
    }

})();
export default Clickpurchasebtn;