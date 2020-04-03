const TrackBar = (_ => {
    //state
    const state = {
        currentTime: 0,
        fullTime: 0,
        fillWidth: 0
    };
    //DOM
    const trackBarFillElem = document.querySelector('.track_bar_fill');

    const init = _ => {
        render()
    }

    const render = _ => {
        trackBarFillElem.style.width = `${state.fillwidth}%`
    }

    const getPercent = (num1, num2) => {
        return (num1 / num2) * 100
    }

    const setState = obj => {
        state.currentTime = obj.currentTime;
        state.fullTime = obj.duration;
        state.fillWidth = getPercent(state.currentTime, state.fullTime);
        render();
    }

    return {
        init,
        setState
    }

})();

export default TrackBar;