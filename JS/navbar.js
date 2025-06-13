document.addEventListener("DOMContentLoaded", function () {
    fetch("navbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar").innerHTML = data;


            // đăng xuát tài khoản
            document.getElementById("click_dangxuat").addEventListener("click", function (e) {
                const confirmLogout = confirm("Bạn muốn tiếp tục đăng xuất?");
                if (confirmLogout) {
                    localStorage.removeItem("loggedInUser");
                    location.reload()
                }
            });

            // Hiển thị tên người dùng nếu đã đăng nhập
            const loggedUser = JSON.parse(localStorage.getItem("loggedInUser"));
            const tenDangNhapEl = document.getElementById("ten_dang_nhap");
            if (loggedUser && tenDangNhapEl) {
                tenDangNhapEl.textContent = "Xin chào: " + loggedUser.email;
            }

            // Setup menu dropdowns
            const menus = [
                ["cuahangMenu", "cuahangDropdown"],
                ["smartphoneMenu", "smartphoneDropdown"],
                ["tabletMenu", "tabletDropdown"],
                ["smarthwatchMenu", "smartwatchDropdown"],
                ["taingheMenu", "taingheDropdown"],
                ["phukienMenu", "phukienDropdown"]
            ];

            function hideAllDropdowns() {
                menus.forEach(([_, dropdownId]) => {
                    const dropdown = document.getElementById(dropdownId);
                    if (dropdown) dropdown.style.display = "none";
                });
            }

            function setupMenuEvents(menuId, dropdownId) {
                const menu = document.getElementById(menuId);
                const dropdown = document.getElementById(dropdownId);
                if (menu && dropdown) {
                    menu.addEventListener("mouseenter", () => {
                        hideAllDropdowns();
                        dropdown.style.display = "flex";
                    });
                    menu.addEventListener("mouseleave", () => {
                        setTimeout(() => {
                            if (!dropdown.matches(':hover')) {
                                dropdown.style.display = "none";
                            }
                        }, 200);
                    });
                    dropdown.addEventListener("mouseenter", () => {
                        dropdown.style.display = "flex";
                    });
                    dropdown.addEventListener("mouseleave", () => {
                        dropdown.style.display = "none";
                    });
                }
            }

            menus.forEach(([menuId, dropdownId]) => setupMenuEvents(menuId, dropdownId));

            // Gọi cập nhật số giỏ hàng
            window.capNhatSoLuongGioHang();
        })
        .catch(error => console.error("Lỗi tải navbar:", error));






});

// hàm cập nhật số lượng sản phẩm trong giỏ hàng
// nếu total = 0 thì không hiện, khác 0 thì hiện bubble

window.capNhatSoLuongGioHang = function () {
    const cartCount = document.getElementById("cart-count");
    if (!cartCount) return;

    try {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        // hàm reduce sẽ theo dõi các sum qua từng vòng lặp và cộng dồn với item.quantity
        // nếu không đọc được quantity sẽ mặc định +0 cho sum
        const totalQuantity = cart.reduce((sum, item) => sum + (item.quantity || 0), 0);

        if (totalQuantity > 0) {
            cartCount.textContent = totalQuantity;
            cartCount.style.display = "flex";
        } else {
            cartCount.style.display = "none";
        }
    } catch (e) {
        cartCount.style.display = "none";
    }
};
