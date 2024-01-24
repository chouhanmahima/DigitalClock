function updateTime() {
    const HR = document.querySelector("#hr-container > div > p");
    const MIN = document.querySelector("#min-container > div > p");
    const SEC = document.querySelector("#sec-container > div > p");
    const AMPM = document.querySelector("#ampm");
    const GREETING = document.querySelector("#greeting");

    let currTime = new Date();
    let currHour = currTime.getHours();
    let currMin = currTime.getMinutes();
    let currSec = currTime.getSeconds();

    if (currHour < 12) {
        AMPM.innerText = "AM";
        GREETING.innerText = "GOOD MORNING!!!"
    } else {
        AMPM.innerText = "PM";
        if (currHour < 17) {
            GREETING.innerText = "GOOD AFTERNOON!!!"
        } else {
            GREETING.innerText = "GOOD EVENING!!!"
        }

    }

    currHour = currHour > 12 ? currHour == 24 ? currHour / 2 : currHour % 12 : currHour;
    HR.innerText = currHour < 10 ? "0" + currHour : currHour;
    MIN.innerText = currMin < 10 ? "0" + currMin : currMin;
    SEC.innerText = currSec < 10 ? "0" + currSec : currSec;
}

document.addEventListener("DOMContentLoaded", () => {
    setInterval(updateTime, 10);
})