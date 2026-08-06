// ---------- CHANGE THIS ----------

// When your waiting started
const startDate = new Date("2026-08-06T00:00:00+02:00");

// Reunion
const targetDate = new Date("2026-08-13T18:00:00+02:00");

// -------------------------------

const countdown = document.getElementById("countdown");
const progressBar = document.getElementById("progress");
const plane = document.getElementById("plane");
const percent = document.getElementById("percent");

function update(){

    const now = new Date();

    const remaining = targetDate-now;

    if(remaining<=0){

        countdown.innerHTML="❤️ SHE'S HERE ❤️";

        progressBar.style.width="100%";

        plane.style.left="100%";

        percent.innerHTML="100%";

        return;

    }

    const days=Math.floor(remaining/86400000);

    const hours=Math.floor((remaining%86400000)/3600000);

    const minutes=Math.floor((remaining%3600000)/60000);

    const seconds=Math.floor((remaining%60000)/1000);

    countdown.innerHTML=
    `${days}d ${hours}h ${minutes}m ${seconds}s`;

    const total=targetDate-startDate;

    const elapsed=now-startDate;

    let progress=elapsed/total*100;

    progress=Math.max(0,Math.min(progress,100));

    progressBar.style.width=progress+"%";

    plane.style.left=progress+"%";

    percent.innerHTML=`${progress.toFixed(1)}% of the waiting is over ❤️`;

}

update();

setInterval(update,1000);