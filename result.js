function countdown(totalSeconds, displayElement) {
    let number = totalSeconds;
    const intervalId = setInterval(() => {
        if (number <= 0) {
            clearInterval(intervalId);
            displayElement.innerHTML += "<br>Time's up!";
            return;
        }
        displayElement.innerHTML = `Countdown: ${number} seconds remaining`;
        number--;
    }, 1000);
}

// Retrieve the result data from localStorage
let resultData = JSON.parse(localStorage.getItem('resultData'));

if (resultData) {
    let timeDetailsDiv = document.getElementById('timeDetails');
    timeDetailsDiv.innerHTML = `
        <p>${resultData.name}, you will be alive for approximately:</p>
        <p>${resultData.totalSeconds} seconds</p>
        <p>Equivalent to:</p>
        <p>${resultData.years} years</p>
        <p>${resultData.months} months</p>
        <p>${resultData.days} days</p>
        <p>${resultData.hours} hours</p>
        <p>${resultData.minutes} minutes</p>
    `;

    let countdownDiv = document.getElementById('countdown');
    countdown(resultData.totalSeconds, countdownDiv);
}
