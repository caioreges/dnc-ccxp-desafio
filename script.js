const days = document.getElementById('countdown-days')
const hours = document.getElementById('countdown-hours')
const minutes = document.getElementById('countdown-minutes')
const seconds = document.getElementById('countdown-seconds')

const launchDay = "01 dec 2023";

function countDown (){
    const dataLaunch = new Date(launchDay);
    const today = new Date();

    const totalSecs = (dataLaunch - today)/1000;


    const totalDays = Math.floor(totalSecs / 60 / 60 / 24);
    const totalHours = Math.floor(totalSecs / 60 / 60) % 24;
    const totalMinutes = Math.floor(totalSecs / 60) % 24;
    const totalSeconds = Math.floor(totalSecs) % 60;

    days.innerHTML = timeFormat(totalDays);
    hours.innerHTML = timeFormat(totalHours);
    minutes.innerHTML = timeFormat(totalMinutes);
    seconds.innerHTML = timeFormat(totalSeconds);
}

function timeFormat(timeVar){
    return (timeVar) <10 ? `0${timeVar}` : timeVar;
}

countDown();
setInterval(countDown, 1000);