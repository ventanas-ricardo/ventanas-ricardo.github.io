window.onload = function () {
    let audio = new Audio("assets/sound/bienvenidoaricardo.wav");
    audio.play();
}


function buy_click(index) {
    window.location.href = "sub/item" + String(index) + ".html";
}

window.buy_click = buy_click;
