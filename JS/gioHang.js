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

    fetch('locations.json')
        .then(response => response.json())
        .then(locations => {
            Object.keys(locations).forEach(province => {
                const opt = document.createElement('option');
                opt.value = province;
                opt.textContent = province;
                provinceSelect.appendChild(opt);
            });

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
        })
        .catch(error => {
            console.error('Lỗi khi tải dữ liệu địa phương:', error);
        });



    document.getElementById('paymentForm').addEventListener('submit', function (e) {
        e.preventDefault();

        const dataLogin = localStorage.getItem("loggedInUser");

        if (dataLogin) {
            const user = JSON.parse(dataLogin);
            const email_user = user.email;

            document.getElementById('customerEmail').value = email_user;
        } else {
            alert("Vui lòng đăng nhập tài khoản Samsung Account");
        }

        const selectedPayment = document.querySelector('input[name="payment"]:checked');
        if (!selectedPayment) {
            alert("Vui lòng chọn phương thức thanh toán.");
            return;
        }
        const modal = new bootstrap.Modal(document.getElementById('customerModal'));
        modal.show();
    });

    document.getElementById('customerForm').addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('customerName').value.trim();
        const phone = document.getElementById('customerPhone').value.trim();
        const address = document.getElementById('customerAddress').value.trim();



        if (!name || !phone || !address) {
            alert("Vui lòng điền đầy đủ thông tin.");
            return;
        }


        document.getElementById('alertContent').innerText = `Tên: ${name}\nSĐT: ${phone}\nĐịa chỉ: ${address}`;
        const successAlert = document.getElementById('successAlert');
        successAlert.classList.remove('d-none');


        setTimeout(() => {
            successAlert.classList.add('d-none');
            localStorage.removeItem("cart");
            location.reload();
        }, 3000);

        const modal = bootstrap.Modal.getInstance(document.getElementById('customerModal'));
        modal.hide();

        document.getElementById('customerForm').reset();
    });



});




