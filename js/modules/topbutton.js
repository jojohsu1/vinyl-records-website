const Topbutton = (_ => {
    //cache the DOM
    const topBtnElem = document.querySelector('#topbtn')

    const showTopBtn = _ => {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            topBtnElem.style.display = "block";
        } else {
            topBtnElem.style.display = "none";
        }
    }

    const render = _ => {
        window.onscroll = _ => {
            showTopBtn()
        }
    }

    const listener = _ => {
        document.addEventListener('click', event => {
            if (event.target && event.target.matches('#topbtn')) {
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
            } else {
                if (event.target && event.target.matches('.fa-angle-up')) {
                    document.body.scrollTop = 0;
                    document.documentElement.scrollTop = 0;
                }
            }
        })
    }

    const init = _ => {
        listener()
        render()
    }

    return {
        init
    }

})();
export default Topbutton;