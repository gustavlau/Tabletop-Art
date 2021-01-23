// let navButtonsPics = document.querySelector("#nav-buttons").children;

function fillNavButtons() {
    let navButtonsPics = document.querySelector(".nav-buttons").children;
    for(i=0; i<navButtonsPics.length; i++){
        navButtonsPics[i].style.backgroundImage = `url(./img/header_img/${i}.jpeg)`;
        navButtonsPics[i].style.backgroundSize ="cover";
        console.log(navButtonsPics);
    }
}

fillNavButtons();
