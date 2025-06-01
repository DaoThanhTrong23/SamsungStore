document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".btn_mua_ngay").forEach(btn => {
        btn.addEventListener("click", function () {
        
            const card = this.closest(".card-body");
            // Này anh chỉnh theo card-body sản phẩm của em nên đừng chỉnh gì bên card nữa nha không nó lỗi 
            
            const img = card.parentElement.querySelector("img")?.getAttribute("src") || [];
            const name = card.querySelector("h5 strong")?.innerText.trim() || "Không rõ tên";
            const color = card.querySelector("p")?.innerText.replace("Màu sắc:", "").trim() || "Không rõ màu";
            const priceText = Array.from(card.querySelectorAll("h5 strong"))
                .map(e => e.innerText)
                .find(t => t.includes("VNĐ")) || "";
            const price = parseInt(priceText.replace(/\D/g, ""), 10); // lấy số

            const product = {
                name: name,
                color: color,
                price: price,
                img: img,
                quantity: 1,
            };

            // Đọc giỏ hàng hiện có
            const cart = JSON.parse(localStorage.getItem("cart")) || [];

            // Kiểm tra trùng tên và màu sắc
            const existing = cart.find(item => item.name === product.name && item.color === product.color);
            if (existing) {
                existing.quantity += 1;
            } else {
                cart.push(product);
            }

            localStorage.setItem("cart", JSON.stringify(cart));

            alert(`Đã thêm "${product.name} (${product.color})" vào giỏ hàng.`);
        });
    });
});
