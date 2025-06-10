

document.addEventListener("DOMContentLoaded", function () {

    const watchUltra = document.getElementById('click_watchunltra');
    const galaxywatch = document.getElementById('click_galaxywatch');
    const watchclassic = document.getElementById('click_watchclassic');
    const phukienwatch = document.getElementById('click_phukienwatch');

    const display_Ultra = document.getElementById('watchultra');
    const display_Galaxy = document.getElementById('galaxywatch');
    const display_Classic = document.getElementById('watchclassic');
    const display_Phukien = document.getElementById('phuklienwatch');
    const display_das = document.getElementById('das');
    const display_cothebancungthich = document.getElementById('cothebancungthich')

    display_das.style.display = "block";
    display_Ultra.style.display = "none";
    display_Galaxy.style.display = "none";
    display_Classic.style.display = "none";
    display_Phukien.style.display = "none";
    display_cothebancungthich.style.display = "none";

    watchUltra.onclick = function () {
        display_das.style.display = "none";
        display_Ultra.style.display = "block";
        display_Galaxy.style.display = "none";
        display_Classic.style.display = "none";
        display_Phukien.style.display = "none";
        display_cothebancungthich.style.display = "block";
    }
    galaxywatch.onclick = function () {
        display_das.style.display = "none";
        display_Ultra.style.display = "none";
        display_Galaxy.style.display = "block";
        display_Classic.style.display = "none";
        display_Phukien.style.display = "none";
        display_cothebancungthich.style.display = "block";
    }
    watchclassic.onclick = function () {
        display_das.style.display = "none";
        display_Ultra.style.display = "none";
        display_Galaxy.style.display = "none";
        display_Classic.style.display = "block";
        display_Phukien.style.display = "none";
        display_cothebancungthich.style.display = "block";
    }
    phukienwatch.onclick = function () {
        display_das.style.display = "none";
        display_Ultra.style.display = "none";
        display_Galaxy.style.display = "none";
        display_Classic.style.display = "none";
        display_Phukien.style.display = "block";
        display_cothebancungthich.style.display = "block";
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


    const params = new URLSearchParams(window.location.search);
    const action = params.get('action');

    if (action === 'Ultra') {
        const targetLink = document.getElementById('click_watchunltra');
        if (targetLink) {
            targetLink.click();
        }
    }
    if (action === 'galaxyWatch') {
        const targetLink = document.getElementById('click_galaxywatch');
        if (targetLink) {
            targetLink.click();
        }
    }
    if (action === 'watchClassic') {
        const targetLink = document.getElementById('click_watchclassic');
        if (targetLink) {
            targetLink.click();
        }
    }

}
)