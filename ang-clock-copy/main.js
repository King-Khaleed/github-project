// function updateClock() {
//     const now = new Date();
//     const seconds = now.getSeconds();
//     const minutes = now.getMinutes();
//     const hours = now.getHours();

//     const secondDegrees = (seconds / 60) * 360;
//     const minuteDegrees = (minutes / 60) * 360;
//     const hourDegrees = (hours % 12 / 12) * 360 + (minutes / 60) * 30;

//     document.getElementById('second').style.transform = `rotate(${secondDegrees}deg)`;
//     document.getElementById('minute').style.transform = `rotate(${minuteDegrees}deg)`;
//     document.getElementById('hour').style.transform = `rotate(${hourDegrees}deg)`;
// }

// setInterval(updateClock, 1000);
// updateClock();
