const months = [
"January",
"February",
"March",
"April",
"May",
"June",
"July",
"August",
"September",
"October",
"November",
"December",

];

const weekdays = [
"Monday",
"Tuesday",
"Wednesday",
"Thursday",
"Friday",
"Saturday",
"Sunday",

];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelectorAll("#deadline");

const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

let futureDate = new Date(2021, 10, 26, 11, 59, 59);

const year = futureDate.getFullYear();
const Hours = futureDate.getHours();
const Minutes = futureDate.getMinutes();
const Seconds = futureDate.getSeconds();

let month = futureDate.getMonth()

month = months[month];
const weekday = weekdays[futureDate.getDay()];
const date = futureDate.getDate();


giveaway.textContent = `Offers starts on ${weekday} ${date} ${month} ${year} ${Hours} : ${Minutes} : ${Seconds} pm`;



const futureTime = futureDate.getTime();

function getRemainingTime () {
    const today = new Date().getTime();

    const t = futureTime - today;


    const oneDay = 24 * 60 * 60 * 1000;

    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;


    let days = t/oneDay;
    days = Math.floor(days);

    console.log(days);

    let remHours = Math.floor((t % oneDay) / oneHour);
    console.log(remHours);

    let remMinutes = Math.floor((t % oneHour) / oneMinute);

    console.log(remMinutes);

    let remSeconds = Math.floor((t % oneMinute) / 1000);
    console.log(remSeconds);
}

getRemainingTime();
