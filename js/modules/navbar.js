const ChangeNavbar = (_ => {
    //cache the DOM
    const mainHeaderElem = document.querySelector('.main-header')
    const mainNavElem = document.querySelector('.main_nav')
    const headerTitleElem = document.querySelector('.header-title')


    const scrollFunction = _ => {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            mainHeaderElem.classList.add('section_display')
            mainNavElem.classList.add('section_distance')
            headerTitleElem.classList.add('section_distance')
        } else {
            mainHeaderElem.classList.remove('section_display')
            mainNavElem.classList.remove('section_distance')
            headerTitleElem.classList.remove('section_distance')
        }
    }

    const init = _ => {
        window.onscroll = _ => {
            scrollFunction()
            console.log('this is changeNavBar')
        };
    }

    return {
        init
    }

})();
export default ChangeNavbar;