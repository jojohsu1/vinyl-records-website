const Rotatespinner = (_ => {
    //DOM
    let spinnerElem = document.querySelector('.spinner_display')

    const rotateSpinnerEvent = _ => {
        if (spinnerElem) spinnerElem.style.display = 'none'
    }

    const listener = _ => {
        setInterval(rotateSpinnerEvent, 2800)
        clearInterval()
    }

    const init = _ => {
        listener()
    }

    return {
        init
    }
})();

export default Rotatespinner;