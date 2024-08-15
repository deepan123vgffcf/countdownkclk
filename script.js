document.getElementById('deathnoteForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const age = parseInt(document.getElementById('age').value);
    const dob = document.getElementById('dob').value;
    const remainingYears = getRandomInt(40, 60);

    // Calculate the total seconds from all time units
    const yearsInSeconds = remainingYears * 365.25 * 24 * 60 * 60;
    const months = getRandomInt(1, 12);
    const monthsInSeconds = months * (365.25 / 12) * 24 * 60 * 60;
    const days = getRandomInt(1, 30);
    const daysInSeconds = days * 24 * 60 * 60;
    const hours = getRandomInt(1, 24);
    const hoursInSeconds = hours * 60 * 60;
    const minutes = getRandomInt(1, 60);
    const minutesInSeconds = minutes * 60;

    let totalSeconds = yearsInSeconds + monthsInSeconds + daysInSeconds + hoursInSeconds + minutesInSeconds;

    // Adjust total seconds based on age groups
    if (age < 20) {
        totalSeconds += 0;
    } else if (age >= 21 && age < 30) {
        totalSeconds -= 15 * 365.25 * 24 * 60 * 60;
    } else if (age >= 31 && age < 40) {
        totalSeconds -= 23 * 365.25 * 24 * 60 * 60;
    } else {
        totalSeconds -= 30 * 365.25 * 24 * 60 * 60;
    }

    const resultData = {
        name: name,
        totalSeconds: totalSeconds,
        years: remainingYears,
        months: months,
        days: days,
        hours: hours,
        minutes: minutes
    };

    localStorage.setItem('resultData', JSON.stringify(resultData));

    window.location.href = 'result.html';
});

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
