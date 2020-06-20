import { albumList } from '../data/album.js';
//data
const albumdata = albumList
let currentCategoryIndex = 0;
//DOM
let categoryPianoAlbums = document.querySelectorAll('.piano_category')
let categoryStringsAlbums = document.querySelectorAll('.strings_category')
let categorySymphonyAlbums = document.querySelectorAll('.symphony_category')
let categoryPopAlbums = document.querySelectorAll('.pop_category')
let categoryJazzAlbums = document.querySelectorAll('.jazz_category')

const Categorymenu = (_ => {
    const showCategoryElem = elem => {
        elem.style.display = 'block'
    }

    const hideCategoryElem = elem => {
        elem.style.display = 'none'
    }

    const addClassEvent = elem => {
        elem.parentElement.classList.add('title-active')
    }

    const removeClassEvent = elem => {
        elem.parentElement.classList.remove('title-active')
    }

    const showCategoryEvent = _ => {
        document.addEventListener('click', event => {
            if (event.target && event.target.matches('.instrument_string')) {
                let btn = event.target
                let categoryItemElem = btn.parentElement.parentElement
                let titleElem = [...categoryItemElem.children][1]
                let titleText = [...titleElem.children][0]
                titleText.classList.add('instrument-active')

                let pianoItemElem = document.querySelector('.instrument_piano').parentElement.parentElement.children
                let pianoTitle = [...pianoItemElem][1]
                let pianoText = [...pianoTitle.children][0]
                let symphonyItemElem = document.querySelector('.instrument_symphony').parentElement.parentElement.children
                let symphonyTitle = [...symphonyItemElem][1]
                let symphonyText = [...symphonyTitle.children][0]
                let popItemElem = document.querySelector('.instrument_pop').parentElement.parentElement.children
                let popTitle = [...popItemElem][1]
                let popText = [...popTitle.children][0]
                let jazzItemElem = document.querySelector('.instrument_jazz').parentElement.parentElement.children
                let jazzTitle = [...jazzItemElem][1]
                let jazzText = [...jazzTitle.children][0]

                pianoText.classList.remove('instrument-active')
                symphonyText.classList.remove('instrument-active')
                popText.classList.remove('instrument-active')
                jazzText.classList.remove('instrument-active')

            } else if (event.target && event.target.matches('.instrument_symphony')) {
                let btn = event.target
                let categoryItemElem = btn.parentElement.parentElement
                let titleElem = [...categoryItemElem.children][1]
                let titleText = [...titleElem.children][0]
                titleText.classList.add('instrument-active')

                let pianoItemElem = document.querySelector('.instrument_piano').parentElement.parentElement.children
                let pianoTitle = [...pianoItemElem][1]
                let pianoText = [...pianoTitle.children][0]
                let stringItemElem = document.querySelector('.instrument_string').parentElement.parentElement.children
                let stringTitle = [...stringItemElem][1]
                let stringText = [...stringTitle.children][0]
                let popItemElem = document.querySelector('.instrument_pop').parentElement.parentElement.children
                let popTitle = [...popItemElem][1]
                let popText = [...popTitle.children][0]
                let jazzItemElem = document.querySelector('.instrument_jazz').parentElement.parentElement.children
                let jazzTitle = [...jazzItemElem][1]
                let jazzText = [...jazzTitle.children][0]

                pianoText.classList.remove('instrument-active')
                stringText.classList.remove('instrument-active')
                popText.classList.remove('instrument-active')
                jazzText.classList.remove('instrument-active')

            } else if (event.target && event.target.matches('.instrument_pop')) {
                let btn = event.target
                let categoryItemElem = btn.parentElement.parentElement
                let titleElem = [...categoryItemElem.children][1]
                let titleText = [...titleElem.children][0]
                titleText.classList.add('instrument-active')

                let pianoItemElem = document.querySelector('.instrument_piano').parentElement.parentElement.children
                let pianoTitle = [...pianoItemElem][1]
                let pianoText = [...pianoTitle.children][0]
                let stringItemElem = document.querySelector('.instrument_string').parentElement.parentElement.children
                let stringTitle = [...stringItemElem][1]
                let stringText = [...stringTitle.children][0]
                let symphonyItemElem = document.querySelector('.instrument_symphony').parentElement.parentElement.children
                let symphonyTitle = [...symphonyItemElem][1]
                let symphonyText = [...symphonyTitle.children][0]
                let jazzItemElem = document.querySelector('.instrument_jazz').parentElement.parentElement.children
                let jazzTitle = [...jazzItemElem][1]
                let jazzText = [...jazzTitle.children][0]

                pianoText.classList.remove('instrument-active')
                stringText.classList.remove('instrument-active')
                symphonyText.classList.remove('instrument-active')
                jazzText.classList.remove('instrument-active')

            } else if (event.target && event.target.matches('.instrument_jazz')) {
                let btn = event.target
                let categoryItemElem = btn.parentElement.parentElement
                let titleElem = [...categoryItemElem.children][1]
                let titleText = [...titleElem.children][0]
                titleText.classList.add('instrument-active')

                let pianoItemElem = document.querySelector('.instrument_piano').parentElement.parentElement.children
                let pianoTitle = [...pianoItemElem][1]
                let pianoText = [...pianoTitle.children][0]
                let stringItemElem = document.querySelector('.instrument_string').parentElement.parentElement.children
                let stringTitle = [...stringItemElem][1]
                let stringText = [...stringTitle.children][0]
                let symphonyItemElem = document.querySelector('.instrument_symphony').parentElement.parentElement.children
                let symphonyTitle = [...symphonyItemElem][1]
                let symphonyText = [...symphonyTitle.children][0]
                let popItemElem = document.querySelector('.instrument_pop').parentElement.parentElement.children
                let popTitle = [...popItemElem][1]
                let popText = [...popTitle.children][0]

                pianoText.classList.remove('instrument-active')
                stringText.classList.remove('instrument-active')
                symphonyText.classList.remove('instrument-active')
                popText.classList.remove('instrument-active')

            } else if (event.target && event.target.matches('.instrument_piano')) {
                let btn = event.target
                let categoryItemElem = btn.parentElement.parentElement
                let titleElem = [...categoryItemElem.children][1]
                let titleText = [...titleElem.children][0]
                titleText.classList.add('instrument-active')

                let stringItemElem = document.querySelector('.instrument_string').parentElement.parentElement.children
                let stringTitle = [...stringItemElem][1]
                let stringText = [...stringTitle.children][0]
                let symphonyItemElem = document.querySelector('.instrument_symphony').parentElement.parentElement.children
                let symphonyTitle = [...symphonyItemElem][1]
                let symphonyText = [...symphonyTitle.children][0]
                let popItemElem = document.querySelector('.instrument_pop').parentElement.parentElement.children
                let popTitle = [...popItemElem][1]
                let popText = [...popTitle.children][0]
                let jazzItemElem = document.querySelector('.instrument_jazz').parentElement.parentElement.children
                let jazzTitle = [...jazzItemElem][1]
                let jazzText = [...jazzTitle.children][0]

                stringText.classList.remove('instrument-active')
                symphonyText.classList.remove('instrument-active')
                popText.classList.remove('instrument-active')
                jazzText.classList.remove('instrument-active')

            }
        })
    }

    const showCategoryAlbum = _ => {
        document.addEventListener('click', _ => {
            if (event.target && event.target.matches('.instrument_piano')) {
                categoryPianoAlbums.forEach(showCategoryElem)
                categoryStringsAlbums.forEach(hideCategoryElem)
                categorySymphonyAlbums.forEach(hideCategoryElem)
                categoryPopAlbums.forEach(hideCategoryElem)
                categoryJazzAlbums.forEach(hideCategoryElem)
            } else if (event.target && event.target.matches('.instrument_string')) {
                categoryStringsAlbums.forEach(showCategoryElem)
                categoryPianoAlbums.forEach(hideCategoryElem)
                categorySymphonyAlbums.forEach(hideCategoryElem)
                categoryPopAlbums.forEach(hideCategoryElem)
                categoryJazzAlbums.forEach(hideCategoryElem)
            } else if (event.target && event.target.matches('.instrument_symphony')) {
                categorySymphonyAlbums.forEach(showCategoryElem)
                categoryPianoAlbums.forEach(hideCategoryElem)
                categoryStringsAlbums.forEach(hideCategoryElem)
                categoryPopAlbums.forEach(hideCategoryElem)
                categoryJazzAlbums.forEach(hideCategoryElem)
            } else if (event.target && event.target.matches('.instrument_pop')) {
                categoryPopAlbums.forEach(showCategoryElem)
                categoryPianoAlbums.forEach(hideCategoryElem)
                categoryStringsAlbums.forEach(hideCategoryElem)
                categorySymphonyAlbums.forEach(hideCategoryElem)
                categoryJazzAlbums.forEach(hideCategoryElem)
            } else if (event.target && event.target.matches('.instrument_jazz')) {
                categoryJazzAlbums.forEach(showCategoryElem)
                categoryPianoAlbums.forEach(hideCategoryElem)
                categoryStringsAlbums.forEach(hideCategoryElem)
                categorySymphonyAlbums.forEach(hideCategoryElem)
                categoryPopAlbums.forEach(hideCategoryElem)
            }
        })
    }

    const listener = _ => {
        showCategoryEvent()
        showCategoryAlbum()
    }



    const init = _ => {
        listener()
    }

    return {
        init
    }

})();
export default Categorymenu;