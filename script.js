// let navButtonsPics = document.querySelector("#nav-buttons").children;
let navButtonsPics = document.querySelector(".nav-buttons").children;
function fillNavButtons() {
    for(i=0; i<navButtonsPics.length; i++){
        navButtonsPics[i].style.backgroundImage = `url(./img/header_img/${i}.jpeg)`;
        navButtonsPics[i].style.backgroundSize ="cover";
    }
}

fillNavButtons();

let navButtonsClone = document.querySelector(".nav-buttons");
let cloneMenuItems = navButtonsClone.cloneNode(true);
let attachCloneToHeader = document.querySelector(".header-text")

function cloneMenu (){
    let animateHeader = document.getElementById("title-text");
    animateHeader.style.animationName="sticky-animation";
    attachCloneToHeader.appendChild(cloneMenuItems).style.visibility="hidden";
    cloneMenuItems.className="cloned-nav";    

    var stickyTimer = setInterval(animateClone,1000);
    function animateClone(){        
        cloneMenuItems.style.visibility="visible";
        cloneMenuItems.style.animationName="btn-sticky-animation";
        clearInterval(stickyTimer);
    }
}
    



function removeClonedNodes (){
    let animateHeader = document.getElementById("title-text");
    animateHeader.style.animationName="sticky-animation-reverse";
    let animateBtnClone = document.querySelector(".cloned-nav");
    animateBtnClone.style.animationName="btn-sticky-animation-reverse"
    while (attachCloneToHeader.children.length >1){
        attachCloneToHeader.removeChild(attachCloneToHeader.lastElementChild);
  }
}


var viewPortCheck = document.querySelector(".nav-buttons");
var bounding = viewPortCheck.getBoundingClientRect();
console.log(bounding);

function isVisible (ele) {
    const { top, bottom } = ele.getBoundingClientRect();
    const vHeight = (window.innerHeight || document.documentElement.clientHeight);
  
    return (
      (top > 0 || bottom > 0) &&
      top < vHeight
    );
  }

function scrollCheck (){
    if (isVisible(viewPortCheck)) {
        // console.log('In viewport!');
        moveToTopOff();
    } else {
        // console.log('Nope...');
        moveToTopOn();
    }
}

window.addEventListener('scroll', scrollCheck);

let scrollBoolean = document.querySelector(".header-text");

//On resize if large screen dropdown clone is there, remove it when window hits 767px wide, add if not there and is larger than 767px
window.addEventListener('resize', windowResize);
function windowResize (){
    if (window.innerWidth < 999 ){
        removeClonedNodes();
    } else if (window.innerWidth > 999){
        scrollCheck();
    }
}

//Add items to the sticky menu on scroll and criterias are met
function moveToTopOn (){
    let leftAlignHeader = document.querySelector(".header-text");
    let mediaMatch=window.matchMedia("screen and (min-width: 999px) ") 
    if(mediaMatch.matches && scrollBoolean.children.length >= 1 && scrollBoolean.children.length <2){
        console.log("I have children!")
        cloneMenu(); 
    }   
}

//Remove the items from sticky menu when it reaches the top again
function moveToTopOff (){
    let leftAlignHeader = document.querySelector(".header-text");
    removeClonedNodes();
}