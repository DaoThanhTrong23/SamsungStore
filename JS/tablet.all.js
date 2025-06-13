document.getElementById("tabA")?.addEventListener("click", () => filterProducts("A"));
document.getElementById("tabS")?.addEventListener("click", () => filterProducts("S"));
document.getElementById("tabFE")?.addEventListener("click", () => filterProducts("FE"));
document.getElementById("tabAll")?.addEventListener("click", showAllProducts);

document.getElementById("sortSelect")?.addEventListener("change", function () {
    const order = this.value;
    if (order) {
        sortProducts(order);
    }
});
// Hàm hiển thị tất cả sản phẩm
function showAllProducts() {
    const products = document.querySelectorAll('.card');
    products.forEach(product => {
        product.style.display = "block";
    });


    const notFoundMsg = document.getElementById("notFoundMessage");
    if (notFoundMsg) {
        notFoundMsg.style.display = "none";
    }


    const searchInput = document.getElementById("searchInput");
    if (searchInput) {
        searchInput.value = "";
    }
}

// Hàm lọc sản phẩm theo category
function filterProducts(category) {
    const products = document.querySelectorAll('.card');
    products.forEach(product => {
        product.style.display = product.dataset.category === category ? "block" : "none";
    });


    const notFoundMsg = document.getElementById("notFoundMessage");
    if (notFoundMsg) {
        notFoundMsg.style.display = "none";
    }


    const searchInput = document.getElementById("searchInput");
    if (searchInput) {
        searchInput.value = "";
    }
}

// Tìm kiếm sản phẩm
document.getElementById("searchInput")?.addEventListener("keyup", function () {
    const filter = this.value.trim().toLowerCase();
    const products = document.querySelectorAll(".card");
    let found = false;

    products.forEach(product => {
        const title = product.querySelector("h5")?.innerText.toLowerCase() || "";
        const description = product.querySelector("p")?.innerText.toLowerCase() || "";

        const isMatch = title.includes(filter) || description.includes(filter);
        product.style.display = isMatch ? "block" : "none";
        if (isMatch) found = true;
    });


    const notFoundMsg = document.getElementById("notFoundMessage");
    if (notFoundMsg) {
        notFoundMsg.style.display = found ? "none" : "block";
    }
});

// này chuyển trang trên nav

const params = new URLSearchParams(window.location.search);
const action = params.get('action');

if (action === 'click_type_tab_S') {
    const targetLink = document.getElementById('tabS');
    if (targetLink) {
        targetLink.click();
    }
}
if (action === 'click_type_tab_A') {
    const targetLink = document.getElementById('tabA');
    if (targetLink) {
        targetLink.click();
    }
}
if (action === 'click_type_tab_FE') {
    const targetLink = document.getElementById('tabFE');
    if (targetLink) {
        targetLink.click();
    }
}

document.getElementById("sortSelect")?.addEventListener("change", function () {
    const order = this.value;
    if (order) {
        sortProducts(order);
    }
});

function sortProducts(order) {
    const productContainer = document.querySelector("#link_ds_sanpham .row");
    const products = Array.from(productContainer.querySelectorAll(".card"))
        .filter(card => card.style.display !== "none");

    products.sort((a, b) => {
        const priceA = getPriceFromCard(a);
    const priceB = getPriceFromCard(b);
    return order === "asc" ? priceA - priceB : priceB - priceA;
});


products.forEach(product => productContainer.appendChild(product));
}

function getPriceFromCard(card) {
    const priceText = card.querySelector("h5.gia strong").innerText || "";
    const price = parseFloat(priceText.replace(/[^\d]/g, ""));
    return isNaN(price) ? 0 : price;
}