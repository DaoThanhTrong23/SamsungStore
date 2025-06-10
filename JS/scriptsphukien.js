// Thêm navbar vào #navbar
document.getElementById("navbar").innerHTML = `
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand fw-bold" href="#">Galaxy Store</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navmenu">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><a class="nav-link" href="#">Trang chủ</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Phụ kiện</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Liên hệ</a></li>
        </ul>
      </div>
    </div>
  </nav>
`;

// Xử lý click tab chuyển đổi nội dung
const tablinks = document.querySelectorAll(".tablinks");
const tabcontents = document.querySelectorAll(".tabcontent");

tablinks.forEach(btn => {
  btn.addEventListener("click", () => {
    // Bỏ active các tab và content
    tablinks.forEach(tab => tab.classList.remove("active"));
    tabcontents.forEach(content => content.classList.remove("active"));

    // Thêm active vào tab được click và content tương ứng
    btn.classList.add("active");
    const target = btn.getAttribute("data-electronic");
    document.getElementById(target).classList.add("active");
  });
});

// Xử lý active danh mục category
const categoryTexts = document.querySelectorAll(".category-text");
categoryTexts.forEach(item => {
  item.addEventListener("click", () => {
    categoryTexts.forEach(txt => txt.classList.remove("active"));
    item.classList.add("active");
  });
});


// Tạo animation cho banner tự động đổi màu nền
const banner = document.querySelector(".banner-container");
let colors = ["#222831", "#393E46", "#3A4750", "#00ADB5"];
let colorIndex = 0;

setInterval(() => {
  banner.style.backgroundColor = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
}, 5000);

// Hiện tooltip khi hover vào badge mới
const badges = document.querySelectorAll(".badge-new, .badge-newhot");
badges.forEach(badge => {
  badge.title = "Sản phẩm mới về!";
});

// Thêm sản phẩm tự động vào mục bán chạy
const allProductsContainer = document.querySelector("#allproducts .product-list");
const newProduct = document.createElement("div");
newProduct.className = "product-cardsp text-center p-3 rounded shadow";
newProduct.innerHTML = `
  <div class="badge-newhot">HOT</div>
  <img src="Images/tab3 (2).png" class="product-img mb-2 img-fluid" alt="Galaxy Watch">
  <h6 class="fw-bold">Ốp Galaxy Tab S9 Lite</h6>
  <p class="text-muted mb-1">Màu sắc: Đen</p>
  <div class="color-circle mb-2"></div>
  <p class="price fw-bold">890.000 VND</p>
  <span class="text-decoration-line-through">1.290.000 VND</span>
  <div class="stars mb-2">⭐⭐⭐⭐☆ <span class="text-muted">(3091)</span></div>
  <button class="btn btn-dark rounded-pill px-4">Mua ngay</button>
`;
allProductsContainer.appendChild(newProduct);

// Scroll ngang cho danh mục phụ kiện
const categoryScroll = document.querySelector(".category-scroll");
categoryScroll.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  categoryScroll.scrollLeft += evt.deltaY;
});

// Tăng số lượng đánh giá ngẫu nhiên mỗi lần load
const starCounts = document.querySelectorAll(".stars span");
starCounts.forEach(count => {
  const base = parseInt(count.textContent.replace(/[()]/g, ""));
  const randomInc = Math.floor(Math.random() * 20);
  count.textContent = `(${base + randomInc})`;
});
