import { pianoList } from '../data/piano.js';
import { stringsList } from '../data/strings.js';
import { symphonyList } from '../data/symphony.js';
import { popList } from '../data/pop.js';
import { jazzList } from '../data/jazz.js';

const Sidemenu = (_ => {
    //data
    let pianodata = pianoList
    let stringsdata = stringsList
    let symphonydata = symphonyList
    let popdata = popList
    let jazzdata = jazzList

    //cache DOM
    const sidemenuElem = document.querySelector('.sidemenu')
    const albumSummaryPianoElems = document.querySelector('.piano')
    const albumSummaryStringsElems = document.querySelector('.strings')
    const albumSummarySymphonyElems = document.querySelector('.symphony')
    const albumSummaryPopElems = document.querySelector('.pop')
    const albumSummaryJazzElems = document.querySelector('.jazz')


    const showAlbumSummary = _ => {
        document.addEventListener('click', event => {
            if (event.target && event.target.matches('.section-plus')) {
                let btn = event.target
                let liElem = btn.parentElement.parentElement
                let ulElem = liElem.parentElement
                let albumIndex = [...ulElem.children].indexOf(liElem)
                let albumliElem = [...ulElem.children][albumIndex]
                let albumContentElem = [...albumliElem.children][1]
                btn.innerText === '+' ? btn.innerText = '-' : btn.innerText = '+'
                albumContentElem.style.display === 'block' ? albumContentElem.style.display = 'none' : albumContentElem.style.display = 'block'
            }
        })
    }

    const renderContent = (data, elem) => {
        let markup = ''
        data.forEach((obj) => {
            markup += `
        <div class="album_summary">
            <a href="${obj.link}">
            <span class="album_title">${obj.title}</span>
            <span class="album_divider">&nbsp;|&nbsp;</span>
            <span class="performer">${obj.artist}</span>
        </div>
`
        })
        if (elem) elem.innerHTML = markup
    }

    const renderAlbumSummaryContent = _ => {
        renderContent(pianodata, albumSummaryPianoElems)
        renderContent(stringsdata, albumSummaryStringsElems)
        renderContent(symphonydata, albumSummarySymphonyElems)
        renderContent(popdata, albumSummaryPopElems)
        renderContent(jazzdata, albumSummaryJazzElems)
    }

    const listener = _ => {
        showAlbumSummary()

    }
    const render = _ => {
        renderAlbumSummaryContent()

    }
    const init = _ => {
        listener()
        render()
    }

    return {
        init
    }

})();
export default Sidemenu;