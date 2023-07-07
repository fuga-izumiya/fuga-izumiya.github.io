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
        case "img/VVG-fashion1.jpg":
            custom.textContent = "CellChrome T-shirt (white)"
            price.textContent = "￥3,000"
            break;
        case "img/VVG-fashion2.jpg":
            custom.textContent = "CellChrome T-shirt (Navy)"
            price.textContent = "￥3,000"
            break;
        case "img/VVG-fashion3.jpg":
            custom.textContent = "Leather jacket"
            price.textContent = "￥45,000"
            break;
        case "img/VVG-fashion4.jpg":
            custom.textContent = "Ringer T-shirt"
            price.textContent = "￥6,000"
            break;
        case "img/VVG-fashion5.jpg":
            custom.textContent = "Denim pants"
            price.textContent = "￥12,000"
            break;
        case "img/VVG-fashion6.jpg":
            custom.textContent = "Double knee denim pants"
            price.textContent = "￥25,000"
            break;
        case "img/VVG-fashion7.jpg":
            custom.textContent = "Raglan long T-shirt"
            price.textContent = "￥9,000"
            break;
        case "img/VVG-fashion8.jpg":
            custom.textContent = "Corduroy jacket"
            price.textContent = "￥15,000"
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
