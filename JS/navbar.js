document.addEventListener("DOMContentLoaded", function () {
    fetch("navbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar").innerHTML = data;
            const loggedUser = JSON.parse(localStorage.getItem("loggedInUser"));
            const tenDangNhapEl = document.getElementById("ten_dang_nhap");
            if (loggedUser && tenDangNhapEl) {
                tenDangNhapEl.textContent = "Xin chào: " + loggedUser.email;
            }
        })
        .catch(error => console.error("Error loading navbar:", error));
});
