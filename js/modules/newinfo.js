import { newList } from '../data/new.js';

const Newinfo = (_ => {
    let newSongs = newList
    let currentPlayingIndex = 1
    let currentSong = new Audio(newSongs[currentPlayingIndex].url)
    let isPlaying = false

    // cache DOM
    const trackBarFillElem = document.querySelector('.track_bar_fill');
    const newRecordElem = document.querySelector('.new_records');
    const playPauseBtn = document.querySelector('.btn-play-pause');

    const changeAudioSrc = _ => {
        currentSong.src = newSongs[currentPlayingIndex].url
    }

    const togglePlayPause = index => {
        return currentSong.paused ? currentSong.play() : currentSong.pause();
    }

    const mainPlay = index => {
        if (currentPlayingIndex === index) {
            togglePlayPause()

        } else {
            currentPlayingIndex = index
            changeAudioSrc()
            togglePlayPause()
        }
    }

    const toggleBtnName = index => {
        if (currentPlayingIndex === index) {
            return currentSong.paused ? '&#9658;' : '&#9616; &#9612;'
        } else {
            return '&#9658;'
        }
    }

    const render = _ => {
        let markup = ''
        newSongs.forEach((obj, index) => {
            markup += `
            <div class="new__items">
                <div class="new_item">
                    <img src="${obj.img}" class="item_img">
                    <button class="btn btn-play-pause">${toggleBtnName(index)}</button>
                    </img>
                    <div class="new_item_details">
                        <span class="new_performer performer">${obj.artist}</span>
                        <span class="new_title title">${obj.title}</span>
                        <button class="btn btn-more">more</button>
                    </div>
                </div>
            </div>
            `
        })

        if (newRecordElem) newRecordElem.innerHTML = markup
    }

    const listener = _ => {
        document.addEventListener('click', event => {
            if (event.target && event.target.matches('.btn-play-pause')) {
                let btn = event.target
                let item = btn.parentElement.parentElement
                let itemElem = item.parentElement
                let itemIndex = [...itemElem.children].indexOf(item)

                mainPlay(itemIndex)
                render()
            }
        })

        currentSong.addEventListener('timeupdate', _ => {
            let fillWidth = (currentSong.currentTime / currentSong.duration) * 100
            trackBarFillElem.style.width = `${fillWidth}%`
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

export default Newinfo;