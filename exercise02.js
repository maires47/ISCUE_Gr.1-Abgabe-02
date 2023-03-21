function currentDay() {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const date = new Date();
    const day = daysOfWeek[date.getDay()];
    const month = monthsOfYear[date.getMonth()];
    const dayOfMonth = date.getDate();
    const year = date.getFullYear();

    const formattedDate = `${day}, ${month} ${dayOfMonth}, ${year}`;

    document.write(formattedDate);
}

function addLeadingZero(value) {
    return value < 10 ? `0${value}` : value;
}

function currentTime() {
    const date = new Date();
    const hours = addLeadingZero(date.getHours());
    const minutes = addLeadingZero(date.getMinutes());
    const seconds = addLeadingZero(date.getSeconds());

    const formattedTime = `${hours}:${minutes}:${seconds}`;

    document.write(formattedTime);
}

//Time on page
let startTime = new Date();
function timeOnPage() {
    const now = new Date();
    const elapsedSeconds = Math.floor((now - startTime) / 1000);
    const hours = Math.floor(elapsedSeconds / 3600);
    const minutes = Math.floor((elapsedSeconds % 3600) / 60);
    const seconds = elapsedSeconds % 60;
    const timeString = `${addLeadingZero(hours)}:${addLeadingZero(minutes)}:${addLeadingZero(seconds)}`;
    alert (`Your time on page: ${timeString}`);
}

function refreshBrowser(){
    location.reload();
}



