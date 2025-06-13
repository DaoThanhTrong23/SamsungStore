document.addEventListener("DOMContentLoaded", () => {
    const heroVideo = document.getElementById("Video");
    // theo dõi xem video có nằm trong vùng nhìn thấy của người dùng hay không
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) { //nếu nằm trong vùng hiển thị thì chạy video
                heroVideo.play().catch(error => {
                    console.error("Video autoplay failed:", error);
                });
            } else {
                heroVideo.pause();
            }
        });
    }, { threshold: 0.5 }); // ít nhất 50% nhìn thấy

    observer.observe(heroVideo);
    // lặp lại video khi kết thúc
    heroVideo.addEventListener("ended", () => {
        heroVideo.currentTime = 0;
        heroVideo.play();
    });

    // Gọi mặc định camera khi load
    const defaultBtn = document.querySelector("[onclick*='camera']");
    changeContent('camera', defaultBtn);
});

// làm dataMap để bên html load nội dung cho dễ

const dataMap = {
    camera: {
        video: "/mp4/camera.webm",
        overlay: "Công cụ AI ProVisual Engine tiên tiến nhất", 
        image: ["/Images/camera_galaxy_1.avif","/Images/camera_galaxy_2.jpg","/Images/camera_galaxy_3.webp","/Images/camera_galaxy_4.avif","/Images/camera_galaxy_5.avif"],
        text: [
            "<h2>Chụp ảnh chân dung đẹp nhất với tính năng Object Aware Engine</h2><p>Chụp tông màu da và kết cấu chính xác hơn với những tiến bộ mới nhất trong công cụ nhận biết đối tượng của chúng tôi. Giờ đây Galaxy S25 Ultra không chỉ có khả năng phát hiện vật thể mà còn phát hiện ánh sáng, giúp mang lại sắc tố da tự nhiên hơn.</p>",
            "<h2>Video Nightography vô đối</h2><p>Tính năng chụp đêm Nightography mới nhất của chúng tôi trên Galaxy S25 series có thể phát hiện chuyển động của vật thể trong video chính xác hơn, giúp phân biệt rõ ràng hơn giữa vật thể chuyển động và vật thể không chuyển động. Khi sử dụng dữ liệu này, chúng tôi có thể giảm tiếng ồn trong video được quay vào ban đêm. Video quay đêm sẽ thay đổi.</p>",
            "<h2>Chi tiết sắc nét nhất từ mọi góc độ</h2><p>Chụp ảnh động, độ phân giải cao từ mọi góc độ với ProVisual Engine thế hệ tiếp theo và các camera mạnh mẽ hơn của điện thoại Galaxy S25 Ultra. Ống kính góc rộng 200MP tuyệt vời, điểm ảnh lớn nhất từ trước đến nay trên điện thoại thông minh Samsung Galaxy kết hợp với ống kính telephoto 50MP tuyệt đẹp và ống kính 50MP siêu rộng mang lại mức độ rõ nét và trung thực mới cho mỗi lần chụp.</p>",
            "<h2>Nhận thông tin chi tiết có độ phân giải cao từ zoom quang học của chúng tôi</h2><p>Không có chi tiết nào ngoài tầm với khi sử dụng các tính năng thu phóng tiên tiến của điện thoại Galaxy S25 Ultra. Các vật thể sắc nét, rõ ràng và rực rỡ đến kinh ngạc ngay cả khi bạn ở xa. Tính năng thu phóng quang học 3x, 5x và thu phóng chất lượng quang học 2x, 10x của điện thoại Galaxy S25 Ultra được tăng cường với AI Zoom giúp tạo ra khả năng vô song để đến gần đối tượng của bạn hơn mà không cần di chuyển chút nào. Tổng cộng, bạn có thể phóng to lên đến 100 lần với Space Zoom.</p>",
            "<h2>Chụp và chỉnh sửa chuyên nghiệp</h2><p>Trở thành một nhiếp ảnh gia chuyên nghiệp với ứng dụng camera Expert RAW sáng tạo của chúng tôi và chụp ảnh chất lượng cao ở chế độ HDR. Sau khi chụp xong, các tệp RAW sẽ tự động được lưu vào gallery của bạn, sẵn sàng để chỉnh sửa đa dạng như cân bằng trắng và phơi sáng.</p>"
        ]
    },
    ap: {
        video: "/mp4/ap.webm",
        overlay:"Bộ vi xử lý mạnh nhất của Galaxy",
        image: ["/Images/ap_galaxy_1.avif","/Images/ap_galaxy_2.avif","/Images/ap_galaxy_3.avif"],
        text: [
            "<h2>Bộ xử lý hàng đầu trong ngành được tùy chỉnh cho Galaxy</h2><p>Giới thiệu bộ vi xử lý 3 nm đầu tiên dành cho thiết bị di động dòng S. IP độc đáo của Galaxy, bao gồm ProScaler và công cụ Mobile Digital Natural Image (mDNIe), đã được áp dụng vào AP tùy chỉnh của chúng tôi. Các chipset hiện đại này giúp tăng tốc mọi khía cạnh hiệu suất, mang lại những cải tiến toàn diện cho trải nghiệm chơi game và xem của bạn.</p><p>Bộ vi xử lý thế hệ tiếp theo này, bao gồm các cải tiến về CPU, GPU và NPU, mang đến những cải tiến về chơi game và AI đáng kinh ngạc, giúp thay đổi cách bạn sáng tạo, làm việc và giải trí.</p>",
            "<h2>Chơi game thực tế với tính năng dò tia và Vulkan</h2><p>GPU và CPU mạnh mẽ nhất của chúng tôi cho phép dò tia hiệu quả, một công nghệ dựng hình tiên tiến đảm bảo game của bạn chân thực hơn với bóng đổ và phản xạ động. Đồ họa của chúng tôi được tối ưu hóa với AP, Vulkan để tăng tốc hơn nữa việc dò tia, tăng cường tải liền mạch và giúp chơi game ổn định.</p>",
            "<h2>Vui lâu hơn, chơi game lâu hơn</h2><p>Khi chơi game nhiều, công nghệ Vapor Chamber cho phép bạn sử dụng thiết bị của bạn thoải mái hơn và lâu hơn. Giống như trong điện thoại Galaxy S25 Ultra hoàn toàn mới, Vật liệu giao diện nhiệt (TIM) tùy chỉnh và thiết kế của chúng tôi giúp tản nhiệt hiệu quả hơn. Điện thoại Galaxy S25 Ultra thậm chí còn mỏng hơn và nhờ Vapor Chamber lớn hơn và TIM được thiết kế riêng cho Galaxy S25 Series, kiến trúc tản nhiệt cũng đã được cải thiện.</p>"
        ]
    },
    pin: {
        video: "/mp4/pin.webm",
        overlay:"Sức mạnh vượt trội kéo dài",
        image: ["/Images/pin_galaxy_1.avif","/Images/pin_galaxy_2.jpg"],
        text: [
            "<h2>Thời lượng pin được tối ưu hóa, giải trí nhiều hơn</h2><p>Ngoài pin mạnh, phần mềm và phần cứng của Galaxy còn được tối ưu hóa để hoạt động lâu hơn. Công nghệ công cụ hình ảnh tự nhiên kỹ thuật số di động (mDNIe) có trong Galaxy IP độc đáo của chúng tôi đã được tích hợp vào bộ xử lý tùy chỉnh để giảm mức tiêu thụ hiện tại cho màn hình, giúp tăng thời gian sử dụng pin. Pin hiệu suất cao 5.000 mAh của chúng tôi cung cấp hơn 31 giờ xem video.</p>",
            "<h2>Sạc siêu nhanh 45W mang tính cách mạng</h2><p>Giảm thời gian chết với các thiết bị Galaxy có khả năng sạc siêu nhanh. Sạc siêu nhanh 45W giúp bạn sạc điện thoại từ 0 đến 65% chỉ trong 30 phút, nghĩa là bạn sẽ mất ít thời gian cắm sạc hơn và có nhiều thời gian hơn để tập trung vào các ưu tiên của mình. Ngay cả sạc không dây cũng khả thi với các thiết bị tương thích Qi.</p>"
        ]
    },
    screen: {
        video: "/mp4/screen.webm",
        overlay:"Thế hệ tiếp theo của màn hình đàn hồi",
        image: ["/Images/screen_galaxy_1.avif","/Images/screen_galaxy_2.avif","/Images/screen_galaxy_3.avif","/Images/screen_galaxy_4.avif"],
        text: [
            "<h2>Nhìn rõ hơn, sống động hơn với ProScaler</h2><p>Trải nghiệm chi tiết hơn bao giờ hết với tính năng ProScaler, được hỗ trợ bởi thuật toán xử lý hình ảnh tiên tiến. Thuật toán dựa trên AI này tạo ra một màn hình có độ chân thực cao dựa trên tỷ lệ tín hiệu trên nhiễu đỉnh Signal-to-Noise Ratio (PSNR) để cải thiện độ phân giải, khiến mọi khoảnh khắc đều vô cùng mãn nhãn.</p>",
            "<h2>Loại kính cứng nhất của Samsung Galaxy</h2><p>Galaxy S25 Ultra được gia cường với kính hiển thị Corning® Gorilla® Armor 2 để bảo vệ thiết bị Galaxy của bạn. Vật liệu chuyên dụng Corning® Gorilla® Armor 2 của Corning giúp giảm sự phản xạ bề mặt trong khi vẫn giữ được cảm ứng, và tất cả đều có thể thực hiện được thông qua một quy trình phân lớp chính xác.</p>",
            "<h2>Công nghệ màn hình sống động tiên phong</h2><p>Nâng cao trải nghiệm trên màn hình của bạn với tính năng Vision Booster mạnh mẽ. Tính năng đột phá này phát hiện ánh sáng môi trường và điều chỉnh màu sắc và độ tương phản của màn hình để có trải nghiệm hình ảnh tốt nhất. Thậm chí nó có thể đạt tới độ sáng cực đại 2.600 nits, đảm bảo khả năng xem ngoài trời tốt hơn. Và với tính năng ánh xạ tông màu tiên tiến, bạn sẽ có trải nghiệm xem rõ ràng hơn và thoải mái hơn.</p>",
            "<h2>Bẻ cong các định luật vật lý và công nghệ màn hình</h2><p>Màn hình Galaxy Z Flip làm được những điều không thể – uốn cong mà không bị vỡ. Một kỳ tích có thể thực hiện được với kính siêu mỏng, siêu linh hoạt mang tính cách mạng. Kết hợp với FlexHinge siêu mạnh mẽ, các thiết bị này có thể uốn cong và giữ nguyên các góc động.</p>"
        ]
    }
}


// hàm thay đổi nội dung html khi click vào
// mỗi khi click vào sẽ lấy key của button đó ra 
function changeContent(key, button = null) {
    const data = dataMap[key];
    const video = document.getElementById("video-marketing");
    const videoSource = document.getElementById("video-marketing-source");

    // cập nhật video theo key
    videoSource.src = data.video;
    video.load();
    video.play();

    // để video tự load lần đầu
    if (!video.dataset.listenerAdded) {
        video.addEventListener("ended", () => {
            video.currentTime = 0;
            video.play();
        });
        video.dataset.listenerAdded = "true";
    }
    const overlay = document.getElementById("video-marketing-overlay");
    overlay.innerText = data.overlay;

    // cập nhật nội dung
    const info = document.getElementById("detail-info");
    info.innerHTML = "";

    // bước này tạo các thẻ và append vào html
    for (let i = 0; i < data.image.length; i++) {
        const section = document.createElement("div");
        section.className = "row mt-5 align-items-center";

        const imgCol = document.createElement("div");
        imgCol.className = "col-md-6";
        const img = document.createElement("img");
        img.className = "img-fluid";
        img.src = data.image[i];
        imgCol.appendChild(img);

        const textCol = document.createElement("div");
        textCol.className = "col-md-6";
        textCol.style.textAlign = "justify";
        textCol.innerHTML = data.text[i];
        // chỗ này làm cho nội dung so le nhau
        if (i % 2 === 0) {
            section.appendChild(imgCol);
            section.appendChild(textCol);
        } else {
            section.appendChild(textCol);
            section.appendChild(imgCol);
        }

        info.appendChild(section);
    }

    // cập nhật trạng thái active cho nút
    document.querySelectorAll(".detail-button .btn").forEach(btn => {
        btn.classList.remove("active");
    });
    if (button) {
        button.classList.add("active");
    }
}
