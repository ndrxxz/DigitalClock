let clock = document.querySelector('.clock');

function updateTime(){
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    let hour = hours > 12 ? hours - 12 : hours;
    let ampm = hours < 12 ? 'AM' : 'PM';

    clock.innerHTML = `${hour}:${minutes}:${seconds} ${ampm}`;
    setTimeout(updateTime, 1000);
}

updateTime();