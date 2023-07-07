"use strict"

// 要素を取得
const zoom = document.querySelectorAll(".zoom");
const zoomback = document.getElementById("zoomback");
const zoomimg = document.getElementById("zoomimg");
const custom = document.getElementById("custom");
const price = document.getElementById("price");

// 一括でイベントリスナ
zoom.forEach(function (value) {
    value.addEventListener("click", kakudai);
});

function kakudai(e) {
    // 拡大領域を表示
    zoomback.style.display = "flex";
    // 押された画像のリンクを渡す
    let path = e.target.getAttribute("src")
    switch (path) {
        case "img/VVG-car1.jpg":
            custom.textContent = "Custom A"
            price.textContent = "￥5,000,000"
            break;
        case "img/VVG-car2.jpg":
            custom.textContent = "Custom B"
            price.textContent = "￥5,400,000"
            break;
        case "img/VVG-car3.jpg":
            custom.textContent = "Custom C"
            price.textContent = "￥5,400,000"
            break;
        case "img/VVG-car4.jpg":
            custom.textContent = "Custom D"
            price.textContent = "￥5,000,000"
            break;
    }
    zoomimg.setAttribute("src", path);
    // 「deka」クラスを付与
    zoomimg.classList.add("deka");
}

function modosu() {
    zoomback.style.display = "none";
    // 「deka」クラスを削除
    zoomimg.classList.remove("deka")
}

// 元に戻すイベントリスナを指定
zoomback.addEventListener("click", modosu);

// 拡大領域を無きものに
function modosu() {
    zoomback.style.display = "none";
}
