function syncDelay(milliseconds){
    var start = new Date().getTime();
    var end=0;
    while( (end-start) < milliseconds){
        end = new Date().getTime();
    }
}   


let unpacked = false;
let element = document.querySelector(".user")
let user_dn = document.querySelector(".user_dn")
let user_img = document.querySelector(".user_logo")
let user_name = document.querySelector(".user_name")
let user_description = document.querySelector(".user_description")
let trails = document.querySelector(".trail")
user_dn.style.visibility = "hidden";

//  BG MOVING

var body=document.body;

document.addEventListener("mousemove",(e)=>{
    var elem=document.createElement("div");
    elem.setAttribute("class","trail")
    elem.setAttribute("style",`left: ${e.clientX - 10}px; top: ${e.clientY -10}px;`)

    elem.onanimationend=()=>{
        elem.remove();
    }

    body.insertAdjacentElement("beforeend",elem);
    })

function rendering() {
    trails.style.visibility = "visible";
}

// BG MOVING

function unpack() {
    if (unpacked == false) {
        user_img.animate({ opacity: [0, 1] }, { duration: 800, iterations: 1, easing: "ease" })
        syncDelay(800)
        user_name.animate({ opacity: [0, 1] }, { duration: 800, iterations: 1, easing: "ease" })
        syncDelay(300)
        user_description.animate({ opacity: [0, 1] }, { duration: 400, iterations: 1, easing: "ease" })
        user_dn.style.visibility = "visible";
        console.log("unpacked")
        unpacked = true;
    }
}

function unpacking() {
    if (unpacked == false) {
        console.log("unpacking")
    }
}
