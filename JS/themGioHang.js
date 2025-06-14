document.addEventListener("click", function (e) {
    // e.preventDefault()
    if (e.target.classList.contains("btn_mua_ngay")) {
        e.preventDefault()
        const card = e.target.closest(".card");
        // chỗ này đọc các value từ lấy từ card (cần tối ưu hơn)
        const img = card.parentElement.querySelector("img")?.getAttribute("src") || "";
        const name = card.querySelector("h5 strong")?.innerText.trim() || "Không rõ tên";
        const color = card.querySelector("p")?.innerText.replace("Màu sắc:", "").trim() || "Không rõ màu";
        const priceText = Array.from(card.querySelectorAll("h5 strong"))
            .map(e => e.innerText)
            .find(t => t.includes("VNĐ")) || "";
        const price = parseInt(priceText.replace(/\D/g, ""), 10);

        const product = {
            name,
            color,
            price,
            img,
            quantity: 1,
        };

        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        // kiểm tra nếu trùng thì tăng quantity, không thì thêm vào localStorage
        const existing = cart.find(item => item.name === product.name && item.color === product.color);
        if (existing) {
            existing.quantity += 1;
        } else {
            cart.push(product);
        }

        localStorage.setItem("cart", JSON.stringify(cart));

        // Gọi cập nhật bubble ngay sau khi thêm
        if (typeof window.capNhatSoLuongGioHang === "function") {
            window.capNhatSoLuongGioHang();
        }

        showToast(`Đã thêm ${product.name} (${product.color}) vào giỏ hàng.`);
    }
});


// thông báo mỗi khi bỏ vào giỏ hàng và tắt sau 3s
function showToast(message) {
    const toast = document.createElement("div");
    toast.innerHTML = `
        <i class="fa-solid fa-circle-check" style="font-size: 70px;"></i>
        <span style="font-size: 20px; margin-top: 10px;">${message}</span>
    `;

    Object.assign(toast.style, {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "#333",
        color: "#fff",
        padding: "20px 30px",
        borderRadius: "8px",
        fontSize: "14px",
        opacity: "1",
        pointerEvents: "auto",
        transition: "opacity 0.3s ease",
        zIndex: "9999",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        maxWidth: "90%",
        boxSizing: "border-box"
    });

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = 0;
        toast.style.pointerEvents = "none";
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}
