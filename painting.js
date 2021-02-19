// let classNumCheck = document.querySelectorAll(".cls-1");

// function clearColour (){
//     var i =0;
//     while(i<300){
//         document.querySelector(".cls-1").classList.replace("cls-1","cls-2");
//         document.querySelector(".cls-2").style.fill="white";
//         i++;
//     }
    
// }

// let clearBtn = document.getElementById("btn-clear");

// clearBtn.addEventListener("click",clearColour);

//colour picker from https://github.com/Simonwep/pickr
const pickr = new Pickr({
    el: '.color-picker',
    theme: 'nano', // or 'monolith', or 'nano'
    showAlways: true,
    useAsButton: true,
    position: 'right',

    swatches: [
        '#0066B3',
        '#808285',
        '#2C2D8B',
        '#A82014',
        '#E65925',
        '#5A422F',
        '#19553C',
        '#793721',
        '#B7BEC5',
        '#EFB736',
        '#93ABAF',
        '#A43E8B ',
        '#D2223E',
        '#FFF200',
        '#A43E8B',
    ],


    components: {

        // Main components
        preview: true,
        opacity: true,
        hue: true,

        // Input / output Options
        interaction: {
            hex: true,
            rgba: true,
            hsla: false,
            hsva: false,
            cmyk: false,
            input: true,
            clear: false,
            save: false
        }
    }
});

let colourStorage

pickr.on('change', (color, instance) => {
    const rgbaColor = color.toRGBA().toString();
    // console.log(rgbaColor);
    colourStorage = rgbaColor;
})

function targetTest (e){
    var clickedItem = e.target
    if(!clickedItem.classList.contains("outline")){
        clickedItem.style.fill=colourStorage;
    }
}

document.addEventListener("click", targetTest, false);