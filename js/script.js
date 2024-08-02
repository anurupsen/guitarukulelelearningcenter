// var message="Sorry, Selection is disabled. Message from Anurup sen";

// function clickIE() {if (document.all) {alert(message);return false;}}
// function clickNS(e) {if 
// (document.layers||(document.getElementById&&!document.all)) {
// if (e.which==2||e.which==3) {alert(message);return false;}}}
// if (document.layers) 
// {document.captureEvents(Event.MOUSEDOWN);document.onmousedown=clickNS;}
// else{document.onmouseup=clickNS;document.oncontextmenu=clickIE;}

// document.oncontextmenu=new Function("return false")



// function disableselect(e){
// return false
// }
// function reEnable(){
// return true
// }
// document.onselectstart=new Function ("return false")
// if (window.sidebar){
// document.onmousedown=disableselect
// document.onclick=reEnable
// }

// cancel selection 


let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
}

let mainVid = document.querySelector('.main-video');

document.querySelectorAll('.course-3 .box .video video').forEach(vid =>{

    vid.onclick = () =>{
        let src = vid.getAttribute('src');
        mainVid.classList.add('active');
        mainVid.querySelector('video').src = src;
    }

});

document.querySelector('#close-vid').onclick = () =>{
    mainVid.classList.remove('active');
}

