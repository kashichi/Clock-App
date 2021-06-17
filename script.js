let ht = ``;
var napTime = -1;
var wakeTime = -1;
var lunchTime = -1;
var evening = 18;
var night = 22;
var morning = 9;

for (let i = 0; i < 24; i++) {
    ht += `<option value="${i}">${i < 10 ? "0" + i : i}-${i + 1 < 10 ? "0" + (i + 1) : i + 1}</option>\n`
}

document.getElementById("wakeup").innerHTML = ht;
document.getElementById("lunch").innerHTML = ht;
document.getElementById("nap").innerHTML = ht;
var nap = () => {
    napTime = document.getElementById("nap").value;
};

var wakeup = () => {
    wakeTime = document.getElementById("wakeup").value;
};

function lunch  () {
    console.log("girdim")
    lunchTime = document.getElementById("lunch").value;
    console.log(typeof lunchTime)
};

document.getElementById("nap").addEventListener("change", nap);
document.getElementById("wakeup").addEventListener("change", wakeup);
document.getElementById("lunch").addEventListener("change", lunch);

console.log(lunchTime)
const clock = () => {
    let now = new Date();

    let hours = now.getHours() < 10 ? '0' + now.getHours() : now.getHours();
    let minutes = now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes();
    let seconds = now.getSeconds() < 10 ? '0' + now.getSeconds() : now.getSeconds();
    document.getElementById("clock").innerText = `${hours}:${minutes}:${seconds}`;
    switch (now.getHours()) {
        case Number(evening):
            document.getElementById("msg").innerText = "Good Evening"
            break;
        case Number(night):
            document.getElementById("msg").innerText = "Good Night"
            break;
        case Number(morning):
            document.getElementById("msg").innerText = "Good Morning"
            break;
        case Number(wakeTime):
            document.getElementById("msg").innerText = "Wake Up Time"
            break;
        case Number(napTime):
            document.getElementById("msg").innerText = "Nap Time"
            break;
        case Number(lunchTime):
            document.getElementById("msg").innerText = "Lunch Time"
            break;
    }
}

setInterval(() => {
    clock();
}, 1000);
