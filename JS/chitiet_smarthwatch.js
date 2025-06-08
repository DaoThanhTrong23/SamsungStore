

document.addEventListener("DOMContentLoaded", function () {

    const watchUltra = document.getElementById('click_watchunltra');
    const galaxywatch = document.getElementById('click_galaxywatch');
    const watchclassic = document.getElementById('click_watchclassic');
    const phukienwatch = document.getElementById('click_phukienwatch');

    const display_Ultra = document.getElementById('watchultra');
    const display_Galaxy = document.getElementById('galaxywatch');
    const display_Classic = document.getElementById('watchclassic');
    const display_Phukien = document.getElementById('phuklienwatch');

    display_Ultra.style.display = "block";
    display_Galaxy.style.display = "none";
    display_Classic.style.display = "none";
    display_Phukien.style.display = "none";

    watchUltra.onclick = function () {
        display_Ultra.style.display = "block";
        display_Galaxy.style.display = "none";
        display_Classic.style.display = "none";
        display_Phukien.style.display = "none";
    }
    galaxywatch.onclick = function () {
        display_Ultra.style.display = "none";
        display_Galaxy.style.display = "block";
        display_Classic.style.display = "none";
        display_Phukien.style.display = "none";
    }
    watchclassic.onclick = function () {
        display_Ultra.style.display = "none";
        display_Galaxy.style.display = "none";
        display_Classic.style.display = "block";
        display_Phukien.style.display = "none";
    }
    phukienwatch.onclick = function () {
        display_Ultra.style.display = "none";
        display_Galaxy.style.display = "none";
        display_Classic.style.display = "none";
        display_Phukien.style.display = "block";
    }

    // Này của cái phần có thể bạn cũng thích

    const slider = document.getElementById('product-slider_phu_kien');
    const btnLeft = document.getElementById('scroll-left_phu_kien');
    const btnRight = document.getElementById('scroll-right_phu_kien');

    btnLeft.addEventListener('click', () => {
        slider.scrollBy({ left: -300, behavior: 'smooth' });
    });

    btnRight.addEventListener('click', () => {
        slider.scrollBy({ left: 300, behavior: 'smooth' });
    });
}
)