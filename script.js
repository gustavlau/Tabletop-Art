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


// function cloneMenu (){
//     let animateHeader = document.querySelector(".title-text");
//     attachCloneToHeader.appendChild(cloneMenuItems).style.visibility="hidden";
//     cloneMenuItems.className="title-text";
//     // cloneMenuItems.classList.add("title-text");
//     cloneMenuItems.style.flexGrow="1";
//     animateHeader.style.flexGrow="1";  
//     var stickyTimer = setInterval(animateClone,1000);
//     function animateClone(){        
//         cloneMenuItems.style.visibility="visible";
//         cloneMenuItems.style.animationName="btn-sticky-animation";
//         clearInterval(stickyTimer);
//     }
// }

let scrollHeaderDiv = document.querySelector(".remove");
var toggleHeader = 1;


function cloneMenu (){
    scrollHeaderDiv.appendChild(cloneMenuItems).style.display="none";
    // scrollHeaderDiv.classList.add("title-text");
    // scrollHeaderDiv.style.flexGrow="0";
    scrollHeaderDiv.style.flexGrow="2"; 
    cloneMenuItems.classList.add("cloned-nav");
    cloneMenuItems.classList.remove("nav-buttons");
    setTimeout(function(){
        cloneMenuItems.style.display="flex";   
        cloneMenuItems.style.WebkitAnimation = "btn-sticky-animation .5s 1";                
    },800);
}

    

    // setTimeout(function(){
    //     //Moves the children from cloneMenuItems to createScrollDiv to avoid too many nests
    //     while(cloneMenuItems.childNodes.length){
    //         createScrollDiv.appendChild(cloneMenuItems.firstChild);
    //     }
    // },1000);
    
 
function removeClonedNodes (){    
    cloneMenuItems.style.WebkitAnimation = "btn-sticky-animation-reverse 0.5s 1";
    cloneMenuItems.style.display="none";
    scrollHeaderDiv.style.flexGrow="0";
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
    let mediaMatch=window.matchMedia("screen and (min-width: 999px) ") 
    if(mediaMatch.matches && scrollBoolean.children.length >= 2 && scrollBoolean.children.length <3){
        console.log("I have children!");
        if(scrollHeaderDiv.style.flexGrow !="2"){
            cloneMenu();
        }
         
    }   
}

//Remove the items from sticky menu when it reaches the top again
function moveToTopOff (){
    removeClonedNodes();
}



