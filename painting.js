//colour picker from https://github.com/Simonwep/pickr
const pickr = new Pickr({
    el: '.color-picker',
    theme: 'nano', // or 'monolith', or 'nano'
    showAlways: true,
    useAsButton: true,
    position: 'top',
    autoReposition: false,
    inline: true,
    default: '#0066B3',

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
        '#A43E8B',
        '#D2223E',
        '#FFF200',
        '#A43E8B',
        '#000000',
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

let colourStorage //variable to store the selected colour

pickr.on('change', (color) => {
    const rgbaColor = color.toRGBA().toString();
    colourStorage = rgbaColor;
})

//Selects svg element and fills it with the stored colour
function colourTarget (e){
    var clickedItem = e.target
    if(!clickedItem.classList.contains("outline") && !clickedItem.hasAttribute("viewBox") && !clickedItem.classList.contains("colouring-area")){ //prevents colouring the contour when clicking the white space near svg
        clickedItem.style.fill=colourStorage;
    }
}

document.addEventListener("click", colourTarget, false);

//changes the svg based on clicked img
function changeSvg (e){
    let svgTarget = e.target
    if(svgTarget.classList.contains("target-prot")){ // only works with the image gallery class, prevents colouring other elements on page
        loadSvg("#svg",svgTarget.getAttribute("src"));                
    }

}

document.addEventListener("click", changeSvg, false);

//loads in the svg file for inline HTML
function loadSvg(selector, url) {
    let target = document.querySelector(selector);
    // Request the SVG file
    let ajax = new XMLHttpRequest();
    ajax.open("GET", url, true);
    ajax.send();

    // Append the SVG to the target
    ajax.onload = function() {
        target.innerHTML = ajax.responseText;
        target.classList.add("outline");
        document.querySelector("svg").setAttribute("height","100%");
    }
}

//To clear the picture of colours, NOT WORKING YET, variation in each svg drawing preventing proper targeting
function clearColours (){
    let svgParent = document.querySelector(".scaling-svg-container");
    let selectAllDescendantsOfSvg = svgParent.getElementsByTagName("*");
    let attributeSet = selectAllDescendantsOfSvg[1];
    if(attributeSet.firstChild.hasAttribute="path"){
        attributeSet.style.fill="#000000";
        console.log(selectAllDescendantsOfSvg[1]);   
    }
}

//auto collapsing content after svg is selected
let autoCollapseDrawing = document.querySelectorAll(".target-prot");

//loop through add event listener to each of the autoCollapseDrawing array values (each svg drawing preview)
for(i=0;i<autoCollapseDrawing.length;i++){
    autoCollapseDrawing[i].addEventListener('click',autoCollapseWhenSelect);
}

//activates the collapse animation
function autoCollapseWhenSelect (){
    let autoCollapseSelectionBtn = [].slice.call(document.querySelectorAll(".collapse"));
    autoCollapseSelectionBtn.map((collapse)=> {
        return new bootstrap.Collapse(collapse)
    })
}


// let clearColourBtn = document.querySelector(".btn-zoom-clear");
// clearColourBtn.addEventListener("click", clearColours);