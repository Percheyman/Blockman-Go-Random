const shuffle = document.getElementsByClassName("cubic")[0].getElementsByTagName("img")[0];
const popup = document.getElementsByClassName("popup")[0];
const bedwar = document.getElementsByClassName("bedwar")[0];
const popup2 = document.getElementsByClassName("popup2")[0];
let available = true;

function closepopup2() {
    bedwar.style.display="none"
}

function spin () {
    if (available == true) {
        available = false
        bedwar.style.display="none"
        shuffle.style.animation="spin 0.8s";
        shuffle.style.animationIterationCount=4;
        shuffle.style.animationPlayState="running";
        setTimeout(() => {shuffle.style.animation="none"; openpopup2();}, 3400)
    }
}

function openpopup() {
    popup.style.display="flex"
}

function closepopup() {
    popup.style.display="none"
}

const arr_img = [
    "https://d1uba6qpncid9.cloudfront.net/sandbox/games/images/g1046-1666840535783.png",
    "https://d1uba6qpncid9.cloudfront.net/sandbox/games/images/g2041-1622614908192.png",
    "https://d1uba6qpncid9.cloudfront.net/sandbox/games/images/g1048-1666965979664.png",
    "https://d1uba6qpncid9.cloudfront.net/sandbox/games/images/g2033-1657772575238.png",
    "https://d1uba6qpncid9.cloudfront.net/sandbox/games/images/g2038-1610422887250.jpg",
    "https://d1uba6qpncid9.cloudfront.net/sandbox/games/images/g1042-1622722248583.png",
    "https://d1uba6qpncid9.cloudfront.net/sandbox/games/images/g1055-1595508513797.webp",
    "https://d1uba6qpncid9.cloudfront.net/sandbox/games/images/g1018-1658297685573.png",
    "https://www.blockmango.com/static/images/games/g2020_cover_small.png"
]

const arr_name = [
    "Bed Wars",
    "Anime All Star",
    "Sky Block",
    "Anime Fighting Simulator",
    "Trainers Arena",
    "Build and Shoot",
    "WWE School Simulator",
    "Egg War",
    "Adopt Me"
]

const arr_link = [
    "https://www.blockmango.com/#/game-details/g1046?onlineNumber=8425",
    "https://www.blockmango.com/#/game-details/g2041?onlineNumber=218",
    "https://www.blockmango.com/#/game-details/g1048?onlineNumber=4586",
    "https://www.blockmango.com/#/game-details/g2033?onlineNumber=364",
    "https://www.blockmango.com/#/game-details/g2038?onlineNumber=339",
    "https://www.blockmango.com/#/game-details/g1042?onlineNumber=202",
    "https://www.blockmango.com/#/game-details/g1055?onlineNumber=289",
    "https://www.blockmango.com/#/game-details/g1018?onlineNumber=547",
    "https://www.blockmango.com/#/game-details/g2020?onlineNumber=132"
]

function openpopup2() {
    const random = (Math.floor(Math.random() * 9));
    bedwar.style.display="block"; 
    available = true;
    popup2.getElementsByTagName("img")[1].src = arr_img[random];
    popup2.getElementsByTagName("p")[0].innerHTML = arr_name[random]; 
    popup2.getElementsByTagName("a")[0].href = arr_link[random];
}




