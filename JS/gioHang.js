document.addEventListener("DOMContentLoaded", () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const items = document.getElementById("items");

    if (cart.length === 0) {
        items.innerHTML = "<p>Giỏ hàng trống.</p>";
        return;
    }

    let total = 0;

    cart.forEach((item, index) => {
        total += item.price * item.quantity;

        const itemDiv = document.createElement("div");
        itemDiv.className = "d-flex justify-content-around mt-5 cart-item";

        itemDiv.innerHTML = `
            <img class="col-4 img-fluid" style="max-width: 25%;" src="${item.img}">
            <div class="col-8 d-flex justify-content-between">
                <div>
                    <span><strong>${item.name}</strong></span><br>
                    <span>Màu: ${item.color}</span><br>
                </div> 
                <div>
                    <span>Giá: ${(item.price * item.quantity).toLocaleString()} VND</span><br>
                    <button class="delete-btn mt-3" data-index="${index}" aria-label="Xoá sản phẩm">
                        <i class="fas fa-trash"></i>
                    </button>
                    <br>
                    <div class="number-input mt-4">
                        <button class="decrease">-</button>
                        <input type="number" class="quantity" value="${item.quantity}" step="1" min="1" style="width: 50px; text-align:center;">
                        <button class="increase">+</button>
                    </div>
                </div>
            </div>
        `;

        items.appendChild(itemDiv);
    });

    // Gắn sự kiện xoá
    document.querySelectorAll(".delete-btn").forEach(btn => {
        btn.addEventListener("click", function () {
            const index = this.dataset.index;
            cart.splice(index, 1);
            localStorage.setItem("cart", JSON.stringify(cart));
            location.reload(); // load lại trang để cập nhật
        });
    });

    // Gắn tăng/giảm số lượng
    document.querySelectorAll(".cart-item").forEach((wrapper, i) => {
        const input = wrapper.querySelector(".quantity");
        const btnUp = wrapper.querySelector(".increase");
        const btnDown = wrapper.querySelector(".decrease");

        btnUp.addEventListener("click", () => {
            input.stepUp();
            cart[i].quantity = parseInt(input.value);
            localStorage.setItem("cart", JSON.stringify(cart));
            location.reload();
        });

        btnDown.addEventListener("click", () => {
            input.stepDown();
            cart[i].quantity = parseInt(input.value);
            localStorage.setItem("cart", JSON.stringify(cart));
            location.reload();
        });
    });

    // (Tuỳ chọn) Hiển thị tổng tiền
    // Hiển thị tổng tiền
    const percent100 = document.getElementById("percent100");
    const percent90 = document.getElementById("percent90");
    const percent10 = document.getElementById("percent10");

    percent100.innerText = total.toLocaleString() + " VNĐ";
    percent90.innerText = (total * 0.9).toLocaleString() + " VNĐ";
    percent10.innerText = (total * 0.1).toLocaleString() + " VNĐ";





    const provinceSelect = document.getElementById('province');
    const districtSelect = document.getElementById('district');
    const wardSelect = document.getElementById('ward');

    // Dữ liệu mẫu (chỉ vài dòng, Trọng có thể thêm tiếp)
    const locations = {
        "Đồng Tháp": {
        "Cao Lãnh": ["Phường 1", "Phường 2", "Phường 3"],
        "Sa Đéc": ["Tân Quy Đông", "Tân Phú Đông", "An Hòa"],
        "Hồng Ngự": ["An Bình A", "An Bình B", "An Lạc"],
        "Tam Nông": ["Phú Thành A", "Phú Thọ", "Phú Thành B"],
        "Thanh Bình": ["Thanh Bình", "Tân Bình", "Tân Quới"],
        "Lấp Vò": ["Lấp Vò", "Mỹ An Hưng A", "Mỹ An Hưng B"]
        },
        "Hà Nội": {
            "Ba Đình": ["Phúc Xá", "Trúc Bạch", "Vĩnh Phúc"],
            "Hoàn Kiếm": ["Chương Dương", "Hàng Bạc", "Hàng Buồm"],
            "Đống Đa": ["Cát Linh", "Văn Miếu", "Quốc Tử Giám"],
            "Cầu Giấy": ["Dịch Vọng", "Quan Hoa", "Nghĩa Đô"]
        },
        "Hồ Chí Minh": {
            "Quận 1": ["Bến Nghé", "Bến Thành", "Đa Kao"],
            "Quận 3": ["Phường 1", "Phường 3", "Phường 5"],
            "Gò Vấp": ["Phường 6", "Phường 7", "Phường 10"],
            "Tân Bình": ["Phường 2", "Phường 4", "Phường 6"]
        },
        "Đà Nẵng": {
            "Hải Châu": ["Phước Ninh", "Nam Dương", "Hòa Thuận Đông"],
            "Thanh Khê": ["Xuân Hà", "Thanh Khê Đông", "Thạc Gián"],
            "Sơn Trà": ["Phước Mỹ", "An Hải Bắc", "An Hải Đông"]
        },
        "Hải Phòng": {
            "Ngô Quyền": ["Máy Tơ", "Lạc Viên", "Lê Lợi"],
            "Hồng Bàng": ["Quang Trung", "Hạ Lý", "Phạm Hồng Thái"],
            "Lê Chân": ["An Biên", "Niệm Nghĩa", "Trại Cau"]
        },
        "Cần Thơ": {
            "Ninh Kiều": ["Tân An", "An Cư", "Xuân Khánh"],
            "Bình Thủy": ["Bình Thủy", "Trà Nóc", "Long Hòa"],
            "Cái Răng": ["Hưng Phú", "Lê Bình", "Thường Thạnh"]
        },
        "Thừa Thiên Huế": {
            "TP Huế": ["Thuận Thành", "Phú Cát", "Vĩnh Ninh"],
            "Hương Trà": ["Tứ Hạ", "Hương Vân", "Hương Xuân"]
        },
        "Bình Dương": {
            "Thủ Dầu Một": ["Phú Cường", "Hiệp Thành", "Phú Hòa"],
            "Dĩ An": ["Dĩ An", "Tân Đông Hiệp", "Bình An"]
        },
        "Đồng Nai": {
            "Biên Hòa": ["Tân Hiệp", "Tân Phong", "Trảng Dài"],
            "Long Khánh": ["Xuân Trung", "Xuân Lập", "Bàu Sen"]
        },
        "Nghệ An": {
            "Vinh": ["Hưng Dũng", "Hưng Bình", "Quang Trung"],
            "Cửa Lò": ["Nghi Thu", "Nghi Tân", "Thu Thuỷ"]
        },
        "Thanh Hóa": {
            "TP Thanh Hóa": ["Ba Đình", "Điện Biên", "Trường Thi"],
            "Sầm Sơn": ["Quảng Tiến", "Quảng Châu", "Trường Sơn"]
        },
        "Quảng Ninh": {
            "Hạ Long": ["Bãi Cháy", "Yết Kiêu", "Hồng Gai"],
            "Uông Bí": ["Phương Đông", "Trưng Vương", "Thanh Sơn"]
        }
    };


    // Load Tỉnh/Thành
    Object.keys(locations).forEach(province => {
        const opt = document.createElement('option');
        opt.value = province;
        opt.textContent = province;
        provinceSelect.appendChild(opt);
    });

    // Khi chọn Tỉnh thì load Quận
    provinceSelect.addEventListener('change', function () {
        districtSelect.innerHTML = '<option value="">-- Quận/Huyện --</option>';
        wardSelect.innerHTML = '<option value="">-- Phường/Xã --</option>';
        const selectedProvince = this.value;
        if (locations[selectedProvince]) {
            Object.keys(locations[selectedProvince]).forEach(district => {
                const opt = document.createElement('option');
                opt.value = district;
                opt.textContent = district;
                districtSelect.appendChild(opt);
            });
        }
    });

    // Khi chọn Quận thì load Phường
    districtSelect.addEventListener('change', function () {
        wardSelect.innerHTML = '<option value="">-- Phường/Xã --</option>';
        const selectedProvince = provinceSelect.value;
        const selectedDistrict = this.value;
        const wards = locations[selectedProvince]?.[selectedDistrict] || [];
        wards.forEach(ward => {
            const opt = document.createElement('option');
            opt.value = ward;
            opt.textContent = ward;
            wardSelect.appendChild(opt);
        });
    });









    document.getElementById('paymentForm').addEventListener('submit', function (e) {
        e.preventDefault(); // Ngăn reload trang

        // Kiểm tra người dùng đã chọn phương thức thanh toán chưa
        const selectedPayment = document.querySelector('input[name="payment"]:checked');
        if (!selectedPayment) {
            alert("Vui lòng chọn phương thức thanh toán.");
            return;
        }

        // Hiện modal nhập thông tin khách hàng
        const modal = new bootstrap.Modal(document.getElementById('customerModal'));
        modal.show();
    });

    // Xử lý gửi form thông tin khách hàng
    document.getElementById('customerForm').addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('customerName').value.trim();
        const phone = document.getElementById('customerPhone').value.trim();
        const address = document.getElementById('customerAddress').value.trim();

        if (!name || !phone || !address) {
            alert("Vui lòng điền đầy đủ thông tin.");
            return;
        }

        // Ở đây bạn có thể gửi dữ liệu đến server hoặc xử lý đơn hàng
        alert(`Đặt hàng thành công!\nTên: ${name}\nSĐT: ${phone}\nĐịa chỉ: ${address}`);

        // Ẩn modal sau khi xác nhận
        const modal = bootstrap.Modal.getInstance(document.getElementById('customerModal'));
        modal.hide();

        // Reset form nếu cần
        document.getElementById('customerForm').reset();
    });



});




