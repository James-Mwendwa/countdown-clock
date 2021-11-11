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

const items = document.querySelectorAll(".deadline-format h4");


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
    let remHours = Math.floor((t % oneDay) / oneHour);
    let remMinutes = Math.floor((t % oneHour) / oneMinute);
    let remSeconds = Math.floor((t % oneMinute) / 1000);

    const values = [days, remHours, remMinutes, remSeconds];

    function format(item) {
        if(item < 10) {
            return (item = `0${item}`);
        }
        return item;
    }

    items.forEach(function (item, index) {
        item.innerHTML = format(values[index]);
        
    });

    if(t < 0) {
        clearInterval(countdown);
        deadline.innerHTML = `<h4 class="expired">Sorry, the Offer expired</h4>`;
    }

    
    
}


let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();
