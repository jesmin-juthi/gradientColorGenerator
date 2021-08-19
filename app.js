var colorCode = document.querySelector('.colorCode');
var genNewColor = document.querySelector('.genNewColor');


genNewColor.addEventListener('click', colorGenerator);

function colorGenerator(){
    var color1 = "#";
    var color2 = "#";
    var symbols = '0123456789ABCDEF';
    for(var i=0; i<6; i++){
        color1 += symbols[Math.floor(Math.random() * 16)];
        color2 += symbols[Math.floor(Math.random() * 16)];
    }
    colorCode.innerHTML = `background : linear-gradient(to right,  ${color1}, ${color2})`;
    document.documentElement.style.background = `linear-gradient(to right,  ${color1}, ${color2})`;
}
window.onload = colorGenerator;