document.addEventListener("DOMContentLoaded", () => {
    const heroVideo = document.getElementById("Video");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                heroVideo.play().catch(error => {
                    console.error("Video autoplay failed:", error);
                });
            } else {
                heroVideo.pause();
            }
        });
    }, { threshold: 0.5 });

    if (heroVideo) {
        observer.observe(heroVideo);
        heroVideo.addEventListener("ended", () => {
            heroVideo.currentTime = 0;
            heroVideo.play();
        });
    }

    
    const defaultBtn = document.querySelector("[onclick*='spen']");
    if (defaultBtn) {
        changeTabletContent('spen', defaultBtn);
    }

    
    initVideoAutoplay();
    initProductSlider();
});
// Dữ liệu các tính năng tablet
const tabletDataMap = {
    spen: {
        video: "/mp4/-spenn.mp4",
        overlay: "S Pen - Công cụ sáng tạo hoàn hảo",
        images: [
            "/Images/spen_tablet_1.webp",
            "/Images/spen_tablet_2.avif"
        ],
        texts: [
            "<h2>Độ chính xác như bút thật</h2><p>S Pen mới với độ nhạy áp lực 4096 cấp mang lại trải nghiệm viết và vẽ chân thực như trên giấy.</p>",
            "<h2>Thiết kế ergonomic</h2><p>S Pen được thiết kế cong nhẹ theo hình dáng tự nhiên của bàn tay, giúp giảm mỏi khi sử dụng lâu dài.</p>"
        ]
    },
    dex: {
        video: "/mp4/-dex.mp4",
        overlay: "Chế độ DeX - Biến tablet thành máy tính",
        images: [
            "/Images/dex_tablet_1.jpg",
            "/Images/dex_tablet_2.jpg"
        ],
        texts: [
            "<h2>Giao diện desktop quen thuộc</h2><p>Chế độ DeX mang đến trải nghiệm máy tính để bàn với thanh taskbar.</p>",
            "<h2>Kết nối đa dạng</h2><p>Kết nối tablet với màn hình ngoài qua HDMI hoặc không dây.</p>"
        ]
    },
    screen: {
        video: "/mp4/-screen.mp4",
        overlay: "Màn hình AMOLED 120Hz siêu mượt",
        images: [
            "/Images/screen_tablet_1.webp",
            "/Images/screen_tablet_2.webp"
        ],
        texts: [
            "<h2>Công nghệ Dynamic AMOLED 2X</h2><p>Màn hình 14.6 inch với độ phân giải 2960x1848 pixels.</p>",
            "<h2>Tần số quét 120Hz thích ứng</h2><p>Công nghệ tần số quét thích ứng tự động điều chỉnh từ 1-120Hz.</p>"
        ]
    },
    multitasking: {
        video: "/mp4/-multitasking.mp4",
        overlay: "Đa nhiệm mạnh mẽ",
        images: [
            "/Images/multitasking_tablet_1.jpg",
            "/Images/multitasking_tablet_2.jpg"
        ],
        texts: [
            "<h2>Chia đôi màn hình linh hoạt</h2><p>Chạy đồng thời 3 ứng dụng trên cùng màn hình với tỷ lệ có thể điều chỉnh.</p>",
            "<h2>Thanh Taskbar thông minh</h2><p>Truy cập nhanh các ứng dụng yêu thích và ứng dụng gần đây.</p>"
        ]
    }
};

// Hàm thay đổi nội dung feature
function changeTabletContent(key, button = null) {
    const data = tabletDataMap[key];
    const video = document.getElementById("tablet-marketing");

    if (video) {
        video.src = data.video;
        video.load();
        video.play();

        if (!video.dataset.listenerAdded) {
            video.addEventListener("ended", () => {
                video.currentTime = 0;
                video.play();
            });
            video.dataset.listenerAdded = "true";
        }
    }

    document.getElementById("tablet-marketing-overlay").innerHTML = `<h2>${data.overlay}</h2>`;

    const info = document.getElementById("tablet-detail-info");
    info.innerHTML = data.images.map((img, i) => `
        <div class="row mt-5 align-items-center">
            <div class="col-md-6 ${i % 2 ? 'order-md-2' : ''}">
                <img src="${img}" class="img-fluid rounded shadow" alt="Feature ${i + 1}">
            </div>
            <div class="col-md-6 ${i % 2 ? 'order-md-1' : ''}">
                ${data.texts[i]}
            </div>
        </div>
    `).join('');

    document.querySelectorAll(".detail-button .btn").forEach(btn => btn.classList.remove("active"));
    if (button) button.classList.add("active");
}

// Tự động phát/dừng video marketing khi vào vùng hiển thị
function initVideoAutoplay() {
    const video = document.getElementById("tabletVideo");
    if (!video) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            entry.isIntersecting ? video.play() : video.pause();
        });
    }, { threshold: 0.6 });

    observer.observe(video);

    video.addEventListener("ended", () => {
        video.currentTime = 0;
        video.play();
    });
}

// Xử lý slider sản phẩm mượt mà
function initProductSlider() {
    const sliderTablet = document.getElementById('tabletCarousel');
    if (!sliderTablet) return;

    const cardTablet = sliderTablet.querySelector('.card');
    if (!cardTablet) return;

    const scrollAmount = cardTablet.offsetWidth + 32;

    const btnLeft = document.getElementById('scroll-left-tablet');
    const btnRight = document.getElementById('scroll-right-tablet');

    const scrollByAmount = (amount) => {
        sliderTablet.scrollBy({ left: amount, behavior: 'smooth' });
    };

    if (btnLeft && btnRight) {
        btnLeft.addEventListener('click', () => scrollByAmount(-scrollAmount));
        btnRight.addEventListener('click', () => scrollByAmount(scrollAmount));
    }

    const updateButtons = () => {
        const scrollLeft = sliderTablet.scrollLeft;
        const scrollWidth = sliderTablet.scrollWidth;
        const clientWidth = sliderTablet.clientWidth;

        if (btnLeft) btnLeft.style.visibility = (scrollLeft > 0) ? 'visible' : 'hidden';
        if (btnRight) btnRight.style.visibility = (scrollLeft + clientWidth < scrollWidth - 1) ? 'visible' : 'hidden';
    };

    let isScrolling = false;
    const onScroll = () => {
        if (!isScrolling) {
            window.requestAnimationFrame(() => {
                updateButtons();
                isScrolling = false;
            });
            isScrolling = true;
        }
    };

    sliderTablet.addEventListener('scroll', onScroll);
    window.addEventListener('resize', updateButtons);

    updateButtons();
}

const slider_tablet = document.getElementById('product-slider_tablet');
  const card_tablet = slider_tablet.querySelector('.card');
  const scrollA_tablet = card_tablet.offsetWidth + 16; // 250 + khoảng cách giữa card

  document.getElementById('scroll-right_tablet').onclick = () => {
    slider_tablet.scrollBy({ left: scrollA_tablet, behavior: 'smooth' });
  };

  document.getElementById('scroll-left_tablet').onclick = () => {
    slider_tablet.scrollBy({ left: -scrollA_tablet, behavior: 'smooth' });
  };

  // Lọc theo category khi bấm nút Tab A
document.getElementById("tabA").addEventListener("click", function() {
    filterProducts("A");
});

// Lọc theo category khi bấm nút Tab S
document.getElementById("tabS").addEventListener("click", function() {
    filterProducts("S");
});

// Lọc theo category khi bấm nút Tab FE
document.getElementById("tabFE").addEventListener("click", function() {
    filterProducts("FE");
});

// Hàm lọc sản phẩm theo category
function filterProducts(category) {
    let products = document.querySelectorAll('.card');
    products.forEach(product => {
        if (product.getAttribute('data-category') === category) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}
document.getElementById("tabAll").addEventListener("click", function() {
    let products = document.querySelectorAll('.card');
    products.forEach(product => {
        product.style.display = "block";
    });
});
document.getElementById("searchInput").addEventListener("keyup", function() {
    let filter = this.value.toLowerCase();
    let products = document.querySelectorAll(".card");

    products.forEach(product => {
        let title = product.querySelector("h5").innerText.toLowerCase();
        if (title.includes(filter)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
});

document.getElementById("searchInput").addEventListener("keyup", function() {
    let filter = this.value.toLowerCase();
    let products = document.querySelectorAll(".card");
    let found = 0;

    products.forEach(product => {
        let title = product.querySelector("h5").innerText.toLowerCase();
        if (title.includes(filter)) {
            product.style.display = "block";
            found++;
        } else {
            product.style.display = "none";
        }
    });

    // Kiểm tra nếu không tìm thấy sản phẩm nào
    if (found === 0) {
        document.getElementById("notFoundMessage").style.display = "block";
    } else {
        document.getElementById("notFoundMessage").style.display = "none";
    }
});



