document.getElementById("tabA")?.addEventListener("click", () => filterProducts("A"));
document.getElementById("tabS")?.addEventListener("click", () => filterProducts("S"));
document.getElementById("tabFE")?.addEventListener("click", () => filterProducts("FE"));
document.getElementById("tabAll")?.addEventListener("click", showAllProducts);

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
document.getElementById("searchInput")?.addEventListener("keyup", function() {
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
