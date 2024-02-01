function calculatetot() {
    let points = document.getElementsByTagName("input");
    document.getElementById("total").innerText = points[0].value * 1 + points[1].value * 2 + points[2].value * 3;
}
function reset() {
    document.getElementById("total").innerText = "0";
    let pointuno = document.getElementById("1p");
    pointuno.value = 0;
    let pointdos = document.getElementById("2p");
    pointdos.value = 0;
    let pointres = document.getElementById("3p");
    pointres.value = 0;
}
