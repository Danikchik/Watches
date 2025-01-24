const h = document.querySelector('.h');
const m = document.querySelector('.m');
const s = document.querySelector('.s');

const hoursWatch = document.querySelector('.hours');
const minutesWatch = document.querySelector('.minutes');

function clock() {

    const time = new Date();

    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    s.style = `transform:rotate(${seconds * 6}deg);transition:1s linear;`;
    m.style = `transform:rotate(${minutes * 6}deg);transition:1s linear;`;
    h.style = `transform:rotate(${hours * 30}deg);transition:1s linear;`;
    // ? :
    hoursWatch.innerHTML = hours >= 10 ? hours : '0' + hours;
    minutesWatch.innerHTML = minutes >= 10 ? minutes : '0' + minutes;

    setTimeout(() => {
        clock();
    }, 1000);
}

clock();



const links = document.querySelectorAll('.tabsItem');
const tabs = document.querySelectorAll('.tabsContentItem');
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', () => {
        for (let x = 0; x < links.length; x++) {
            links[x].classList.remove('active');
            tabs[x].classList.remove('active');
        }
        tabActive(links[i], tabs[i]);
    });
}

function tabActive(link, tab) {
    link.classList.add('active');
    tab.classList.add('active');
}


const stopWatchBtn = document.querySelector('.stopwatch__btn');
const stopWatchHours = document.querySelector('.stopwatch__hours');
const stopWatchMinutes = document.querySelector('.stopwatch__minutes');
const stopWatchSeconts = document.querySelector('.stopwatch__seconds');
stopWatchBtn.addEventListener('click', function () {

    if (this.innerHTML == 'start') {
        this.innerHTML = 'stop';

        let i = 0;

        stopwatch(this, i);

    } else if (this.innerHTML == 'stop') {
        this.innerHTML = 'clear';
    } else {
        this.innerHTML = 'start';
        stopWatchHours.innerHTML = 0;
        stopWatchMinutes.innerHTML = 0;
        stopWatchSeconts.innerHTML = 0;
    }
});



function stopwatch(btn, i) {

    if (btn.innerHTML == 'stop') {

        if (i == 60) {

            i = 0;
            stopWatchSeconts.innerHTML = i;

            if (stopWatchMinutes.innerHTML == 59) {
                stopWatchMinutes.innerHTML = 0;
                stopWatchHours.innerHTML++;
            } else {
                stopWatchMinutes.innerHTML++;
            }
        } else {
            i++;
            stopWatchSeconts.innerHTML = i;
        }
        setTimeout(() => {
            stopwatch(btn, i);
        }, 1000);

    }
}