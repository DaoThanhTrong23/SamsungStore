document.addEventListener("DOMContentLoaded", function () {
    const btn_pro = document.getElementById("btn_pro");
    const btn_buds = document.getElementById("btn_buds");
    const btn_fe = document.getElementById("btn_fe");

    const fram_das = document.getElementById("das");
    const fram_pro = document.getElementById("pro");
    const fram_buds = document.getElementById("buds");
    const fram_fe = document.getElementById("budsFe");

    const fram_cothebancungthich = document.getElementById("cothebancungthich");


    fram_das.style.display = "block";
    fram_pro.style.display = "none";
    fram_buds.style.display = "none";
    fram_fe.style.display = "none";
    fram_cothebancungthich.style.display = "none";

    btn_pro.onclick = function () {
        fram_das.style.display = "none";
        fram_pro.style.display = "block";
        fram_buds.style.display = "none";
        fram_fe.style.display = "none";
        fram_cothebancungthich.style.display = "block";
    }
    btn_buds.onclick = function () {
        fram_das.style.display = "none";
        fram_pro.style.display = "none";
        fram_buds.style.display = "block";
        fram_fe.style.display = "none";
        fram_cothebancungthich.style.display = "block";
    }
    btn_fe.onclick = function () {
        fram_das.style.display = "none";
        fram_pro.style.display = "none";
        fram_buds.style.display = "none";
        fram_fe.style.display = "block";
        fram_cothebancungthich.style.display = "block";
    }


})