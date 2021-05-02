let thisH1 = document.getElementsByTagName("h1")[0];
let thisP = document.getElementsByTagName("p")[0];
let thisDiv = document.getElementsByTagName("div")[2];

function mouseIn(){
    thisH1.innerHTML = "小夫進來了";
}
function mouseout(){
    thisH1.innerHTML = "小夫出去了";
    thisP.innerHTML = "";
}
function mousemove(e) {
    thisP.innerHTML = "小夫在裡面走來走去" + e.clientX + "," + e.clientY;
}

thisDiv.addEventListener("mouseover",mouseIn);
thisDiv.addEventListener("mouseout",mouseout);
thisDiv.addEventListener("mousemove",mousemove);