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
        case "img/VVG-goods1.jpg":
            custom.textContent = "Casquette"
            price.textContent = "￥8,000"
            break;
        case "img/VVG-goods2.jpg":
            custom.textContent = "Sunglasses"
            price.textContent = "￥15,000"
            break;
        case "img/VVG-goods3.jpg":
            custom.textContent = "Necklace"
            price.textContent = "￥8,000"
            break;
        case "img/VVG-goods4.jpg":
            custom.textContent = "Ring"
            price.textContent = "￥15,000"
            break;
        case "img/VVG-goods5.jpg":
            custom.textContent = "Western belt"
            price.textContent = "￥15,000"
            break;
        case "img/VVG-goods6.jpg":
            custom.textContent = "Biker boots"
            price.textContent = "￥40,000"
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
