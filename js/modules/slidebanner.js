const ChangeSlideBanner = (_ => {
    let slideIndex = 0
    //cache the DOM
    let slideContainer = document.querySelector('.container_slide')
    let slideItemsElems = document.getElementsByClassName('slide_items')
    let itemAry = [...slideItemsElems]
    let dotsElem = document.querySelector('.dots_area')
    let dotsElems = document.getElementsByClassName('dot')

    const renderBanner = index => {
      for(let i=0; i<slideItemsElems.length ;i++){
        if(i === index){
          slideItemsElems[i].classList.add('banner-active')
        } else {
          slideItemsElems[i].classList.remove('banner-active')
        }
      }
    }

    const renderDot = index => {
      for(let i=0; i<slideItemsElems.length ;i++){
        if(i === index){
         dotsElems[i].classList.add('dot-active')
        } else {
         dotsElems[i].classList.remove('dot-active')
        }
      }
    }

    const renderSlide = _ => {
      slideIndex++
           renderBanner(slideIndex)
           renderDot(slideIndex)
           if(slideIndex >= slideItemsElems.length) {
             slideIndex = 0
             renderBanner(slideIndex)
             renderDot(slideIndex)
           }
    }
    setInterval(renderSlide, 5000)

    const clickNextEvent = _ => {
      document.addEventListener('click', event => { 
       if(event.target && event.target.matches('.next')){
           let btn = event.target
           slideIndex++
           renderBanner(slideIndex)
           renderDot(slideIndex)
           if(slideIndex >= slideItemsElems.length) {
             slideIndex = 0
             renderBanner(slideIndex)
             renderDot(slideIndex)
           }
          }       
      })
    }

    const clickPreEvent = _ => {
      document.addEventListener('click', event => { 
       if(event.target && event.target.matches('.previous')){
           let btn = event.target
           console.log(slideIndex)
           if(slideIndex <= 0) {
            slideIndex = slideItemsElems.length
            renderBanner(slideIndex)
            renderDot(slideIndex)
          }
           slideIndex--
           renderBanner(slideIndex)
           renderDot(slideIndex)
          }       
      })
    }

    const init = _ => {
      clickNextEvent()
      clickPreEvent()
    }

    return {
        init
    }

})();
export default ChangeSlideBanner;