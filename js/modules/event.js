import { peopleList } from '../data/people.js';

const SetCountdown = (_ => {
    //data
    let speaker = peopleList
    let currentPersonIndex = 0
    let currentMonthIndex = 0
    const isClicked = true

    //cache DOM
    const dayNumElem = document.querySelector('.num_day')
    const hourNumElem = document.querySelector('.num_hour')
    const minuteNumElem = document.querySelector('.num_min')
    const secondNumElem = document.querySelector('.num_sec')
    const speakersElem = document.querySelector('.sixitem_container')
    let eventItemsElem = document.querySelector('.event_items')
    let monthBtns = document.querySelectorAll('.item_parts')


    const renderCountDown = _ => {
        const endTime = new Date(2020, 4, 1).getTime()
        let secLeft = endTime - Date.now();

        if (secLeft > 0) {
            let day = Math.floor(secLeft / 86400000)
            let hour = Math.floor((secLeft % 86400000) / (3600000))
            let min = Math.floor(((secLeft % 86400000) % (3600000)) / (60000))
            let sec = Math.floor((((secLeft % 86400000) % 3600000) % 60000) / 1000)
            if (day < 10) day = `0${day}`
            if (hour < 10) hour = `0${hour}`
            if (min < 10) min = `0${min}`
            if (sec < 10) sec = `0${sec}`
            if (dayNumElem) dayNumElem.innerText = day
            if (hourNumElem) hourNumElem.innerText = hour
            if (minuteNumElem) minuteNumElem.innerText = min
            if (secondNumElem) secondNumElem.innerText = sec
        } else {
            clearInterval()
        }
    }

    const renderSpeakerContent = _ => {
        let markup = ''
        speaker.forEach((obj, index) => {
            markup += `
        <div class="people_items">
            <div class="people_item">
                <img src="${obj.img1}" class="people_img">
            </div>
            <div class="people_text">
                <p class="people_name">${obj.name}</p>
                <p class="people_profession">${obj.profession}</p>
            </div>
        </div>      `
        })
        if (speakersElem) speakersElem.innerHTML = markup
    }

    const renderMonthEvent = _ => {
        let markup = ''
        speaker.forEach((obj) => {
            markup += `
            <div class="event_item ${obj.month}">
                <div class="event_details">
                    <span class="event-title">${obj.name}</span>
                    <span class="event-date">${obj.date}</span>
                    <span class="event-money">${obj.cost}</span>
                    <div class="book_icon">
                    <span class="event-booking"><a href="login.html" target="_self">BOOK NOW</a></span>
                        <div class="event_btn">
                        <button class="event_icon">+</button>
                        </div>
                    </div>
                </div>
                <div class="event_content">
                    <div class="event-pic">
                        <img src="${obj.img1}">
                    </div>
                    <div class="event-pic pic-big">
                        <img src="${obj.img2}">
                        <span class="event-caption pic_text">${obj.title}</span>
                    </div>
                    <div class="event-pic">
                        <img src="${obj.img3}">
                    </div>
                </div>
            </div>
            `
        })
        if (eventItemsElem) eventItemsElem.innerHTML = markup
    }

    const showMonthEvents = element => {
        element.style.display = 'block'
    }

    const hideMonthEvents = element => {
        element.style.display = 'none'
    }

    const showMonthEvent = _ => {
        document.addEventListener('click', event => {
            let monthMayEvents = document.querySelectorAll('.May')
            let monthJuneEvents = document.querySelectorAll('.June')
            if (event.target && event.target.matches('.month_5')) {
                let btn = event.target
                btn.classList.add('month_active')
                document.querySelector('.month_6').classList.remove('month_active')
                monthMayEvents.forEach(showMonthEvents)
                monthJuneEvents.forEach(hideMonthEvents)
            } else if (event.target && event.target.matches('.month_6')) {
                let btn = event.target
                btn.classList.add('month_active')
                document.querySelector('.month_5').classList.remove('month_active')
                console.log(monthMayEvents)
                monthMayEvents.forEach(hideMonthEvents)
                monthJuneEvents.forEach(showMonthEvents)

            }
        })
    }


    const showEventContent = _ => {
        document.addEventListener('click', event => {
            if (event.target && event.target.matches('.event_icon')) {
                let btn = event.target
                let eventItemElem = btn.parentElement.parentElement.parentElement
                let eventsElem = eventItemElem.parentElement
                let eventIndex = [...eventsElem.children].indexOf(eventItemElem)
                let eventElem = [...eventsElem.children][1]
                btn.innerText === '+' ? btn.innerText = '-' : btn.innerText = '+'
                eventElem.classList.toggle('long')
            }
        })
    }

    const listener = _ => {
        showEventContent()
        showMonthEvent()

    }

    const render = _ => {
        setInterval(_ => {
            renderCountDown()
        }, 1000);

        renderSpeakerContent()
        renderMonthEvent()
    }

    const init = _ => {
        render()
        listener()
    }

    return {
        init
    }

})();

export default SetCountdown;