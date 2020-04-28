function setClock() {
    console.log("ya gay");
    let curDate = new Date();
    let dayOfKnowledge = new Date(curDate.getFullYear(), 8, 1);
    let secPos = document.getElementById("seconds");
    let minPos = document.getElementById("minutes");
    let hourPos = document.getElementById("hours");
    let dayPos = document.getElementById("days");

    let timeDifference = dayOfKnowledge - curDate;

    dayPos.innerHTML = Math.floor(timeDifference / 86400000);
    hourPos.innerHTML = Math.floor(timeDifference % 86400000 / 3600000);
    minPos.innerHTML = Math.floor(timeDifference % 86400000 % 3600000 / 60000);
    secPos.innerHTML = Math.floor(timeDifference % 86400000 % 3600000 % 60000 / 1000);
};
setClock();
setInterval(setClock, 1000);
