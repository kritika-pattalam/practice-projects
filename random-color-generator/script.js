const generateColor = function() {
    let color_letters="0123456789ABCDEF";
    let color = "#";
    for(let i = 0; i< 6; i++) {
        color += color_letters[Math.floor(Math.random() * color_letters.length)];
    }
    document.getElementById("color_display").style.backgroundColor = color;
    document.getElementById("color_display").innerText = color;
    

}
window.onload = function() {
    generateColor();
    document.getElementById("generate").addEventListener('click', generateColor);
}
