const clock = function() {
    let getDate = new Date();
    document.getElementById('clock').innerHTML = getDate.toLocaleTimeString();
}
setInterval(function() { clock();}, 1000);