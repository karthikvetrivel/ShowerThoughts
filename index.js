var request = new XMLHttpRequest();
const APP = document.getElementById("root");
const DISPLAYED_TEXT = document.getElementById("displayedThought");

request.open(
    "GET",
    "https://www.reddit.com/r/showerthoughts.json?limit=500",
    true // json = true
);
request.onload = function() {
    var showerThoughtsJSON = JSON.parse(this.responseText);

    if (request.status >= 200 && request.status < 400) {
        generateRandomThought(showerThoughtsJSON);
    } else {
        console.log("error");
    }
};

request.send();

function generateRandomThought(showerThoughtsJSON) {
    var listOfThoughts = [];
    showerThoughtsJSON.data.children.forEach(child => {
        listOfThoughts.push(child.data.title);
    });
    listOfThoughts.shift(); // removing the first title.
    var displayedThought = listOfThoughts[getRandomInt(listOfThoughts.length)];
    while (WordCount(displayedThought) > 20) {
        var displayedThought =
            listOfThoughts[getRandomInt(listOfThoughts.length)];
    }
    DISPLAYED_TEXT.textContent = displayedThought;
}

// Functions for random use

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function WordCount(str) {
    return str.split(" ").length;
}

// Generating the corner time

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    // add a zero in front of numbers<10
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("time").innerHTML = h + ":" + m + ":" + s;
}
startTime();
setInterval(startTime, 500);

// Setting the background color:
var backgroundColors = [
    "#ACDBC9",
    "#DBEBC2",
    "#FDD2B5",
    "#F7A7A6",
    "#F48B94, #E5EEC1",
    "#A2D4AB",
    "#3EACA8",
    "#F69A9A",
    "#F9CDAE",
    "#C8C8A9",
    "#83AE9B"
];
document.body.style.backgroundColor =
    backgroundColors[getRandomInt(backgroundColors.length)];
