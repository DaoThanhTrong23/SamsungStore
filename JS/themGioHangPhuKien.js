function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) section.scrollIntoView({ behavior: 'smooth' });
}

function selectCircle(circle) {
  const card = circle.closest('.product-card');
  const circles = card.querySelectorAll('[class^="color-circle"]');
  circles.forEach(c => c.classList.remove('selected'));
  circle.classList.add('selected');
}

function capNhatSoLuongGioHang() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);
  const badge = document.querySelector('#cart-count');
  if (badge) {
    badge.innerText = totalQty;
    badge.style.display = totalQty > 0 ? 'inline-block' : 'none';
  }
}


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

document.addEventListener('click', e => {
  // Xử lý nút trong .product-card
  const btn = e.target.closest('.product-card button');
  if (btn) {
    e.preventDefault();
    const card = btn.closest('.product-card');
    const img = card.querySelector('img.product-img')?.src || '';
    const name = card.querySelector('h6')?.innerText.trim() || 'Không rõ tên';
    const colorText = card.querySelector('p.text-muted')?.innerText || '';
    const color = colorText.replace('Màu sắc:', '').trim() || 'Không rõ màu';
    const priceText = card.querySelector('p.price')?.innerText || '';
    const price = parseInt(priceText.replace(/\D/g, ''), 10) || 0;

    const product = { name, color, price, img, quantity: 1 };
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const found = cart.find(item => item.name === product.name && item.color === product.color);
    if (found) found.quantity += 1;
    else cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));

    if (typeof window.capNhatSoLuongGioHang === 'function') window.capNhatSoLuongGioHang();
    showToast(`Đã thêm ${product.name} (${product.color}) vào giỏ hàng.`);
    return;
  }

  // Xử lý nút "Mua ngay"
  if (e.target.classList.contains("btn_mua_ngay")) {
    e.preventDefault();
    const card = e.target.closest(".card");

    const img = card?.parentElement?.querySelector("img")?.getAttribute("src") || "";
    const name = card?.querySelector("h5 strong")?.innerText.trim() || "Không rõ tên";
    const color = card?.querySelector("p")?.innerText.replace("Màu sắc:", "").trim() || "Không rõ màu";
    const priceText = Array.from(card.querySelectorAll("h5 strong"))
      .map(e => e.innerText)
      .find(t => t.includes("VNĐ")) || "";
    const price = parseInt(priceText.replace(/\D/g, ""), 10) || 0;

    const product = { name, color, price, img, quantity: 1 };
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existing = cart.find(item => item.name === product.name && item.color === product.color);
    if (existing) existing.quantity += 1;
    else cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));

    if (typeof window.capNhatSoLuongGioHang === "function") window.capNhatSoLuongGioHang();
    showToast(`Đã thêm ${product.name} (${product.color}) vào giỏ hàng.`);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  capNhatSoLuongGioHang();

  document.querySelectorAll('[class^="color-circle"]').forEach(circle =>
    circle.addEventListener('click', () => selectCircle(circle))
  );
});
