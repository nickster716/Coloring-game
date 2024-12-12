let pink = document.querySelector(".color1");
let orange = document.querySelector(".color2");
let yellow = document.querySelector(".color3");
let green = document.querySelector(".color4");
let blue = document.querySelector(".color5");

let color="darkgray";

function makeColorPalette(){
    let colorCont= document.querySelector(".color-container");
    let colorCollection = ["pink", "orange", "yellow", "greenyellow", "aqua"];
    for(let j=0; j< colorCont.children.length; j++){
        let colors= colorCont.children[j];
        colors.style.backgroundColor= colorCollection[j%colorCollection.length];

        colors.addEventListener("click",assignColor);
    }
}

// can also define the function beside click too instead of calling it and defining somewhere else

// function makeColorPalette(){
//     let colorCont= document.querySelector(".color-container");
//     let colorCollection = ["pink", "orange", "yellow", "greenyellow", "aqua"];
//     for(let j=0; j< colorCont.children.length; j++){
//         let colors= colorCont.children[j];
//         colors.style.backgroundColor= colorCollection[j%colorCollection.length];

//         colors.addEventListener("click", function(e){color=e.target.style.backgroundColor;});
//     }
// }


makeColorPalette();

function assignColor(e){
    console.log(e);
    color = e.target.style.backgroundColor;
}



let cirCont = document.querySelector(".circle-container");
function init(){
    for(let i=0; i<cirCont.children.length;i++){
        let circl= cirCont.children[i];
        circl.style.backgroundColor = "darkgray";
        circl.addEventListener("click",colorit);
    }
}
init();

function colorit(e){
    console.log(e);
    if (e.target.style.backgroundColor == "darkgray"){
        e.target.style.backgroundColor = color;    
    }
    else if (e.target.style.backgroundColor != "darkgray" && e.target.style.backgroundColor == color) {
        e.target.style.backgroundColor = "darkgray";
    }
    else{
        e.target.style.backgroundColor = color;
    }
    
}
