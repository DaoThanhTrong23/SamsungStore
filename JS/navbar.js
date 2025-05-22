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

            const cuahangMenu = document.getElementById("cuahangMenu");
            const cuahangDropdown = document.getElementById("cuahangDropdown");

            const smartphoneMenu = document.getElementById("smartphoneMenu");
            const smartphoneDropdown = document.getElementById("smartphoneDropdown");

            const tabletMenu = document.getElementById("tabletMenu");
            const tabletDropdown = document.getElementById("tabletDropdown");

            const smartwatchtMenu = document.getElementById("smarthwatchMenu");
            const smartwatchDropdown = document.getElementById("smartwatchDropdown");

            const phukienMenu = document.getElementById("phukienMenu");
            const phukienDropdown = document.getElementById("phukienDropdown");

            function hideAllDropdowns() {
                cuahangDropdown.style.display = "none";
                smartphoneDropdown.style.display = "none";
                tabletDropdown.style.display = "none";
                smartwatchDropdown.style.display = "none";
                phukienDropdown.style.display = "none";
                }

            hideAllDropdowns()
            
            // show menu của hàng
            if (cuahangMenu && cuahangDropdown) {
                cuahangMenu.addEventListener("mouseenter", () => {
                    hideAllDropdowns()
                    cuahangDropdown.style.display = "flex";  

                });
                cuahangMenu.addEventListener("mouseleave", () => {
                    setTimeout(() => {
                        if (!cuahangDropdown.matches(':hover')) {
                            cuahangDropdown.style.display = "none";
                        }
                    }, 200);
                });

                cuahangDropdown.addEventListener("mouseleave", () => {
                    cuahangDropdown.style.display = "none";
                });
                cuahangDropdown.addEventListener("mouseenter", () => {
                    hideAllDropdowns()
                    cuahangDropdown.style.display = "flex";

                });
            } else {
                console.warn("Không tìm thấy phần tử cuahangMenu hoặc cuahangDropdown");
            }

            // show menu smartphone
            if (smartphoneMenu && smartphoneDropdown) {
                smartphoneMenu.addEventListener("mouseenter", () => {
                    hideAllDropdowns()
                    smartphoneDropdown.style.display = "flex";

                });
                smartphoneMenu.addEventListener("mouseleave", () => {
                    setTimeout(() => {
                        if (!smartphoneDropdown.matches(':hover')) {
                            smartphoneDropdown.style.display = "none";
                        }
                    }, 200);
                });

                smartphoneDropdown.addEventListener("mouseleave", () => {
                    smartphoneDropdown.style.display = "none";
                });
                smartphoneDropdown.addEventListener("mouseenter", () => {
                    hideAllDropdowns()
                    smartphoneDropdown.style.display = "flex";
                });
            } else {
                console.warn("Không tìm thấy phần tử smartphoneMenu hoặc smartphoneDropdown");
            }

            // show menu tablet
            if (tabletMenu && tabletDropdown) {
                tabletMenu.addEventListener("mouseenter", () => {
                    hideAllDropdowns()
                    tabletDropdown.style.display = "flex";
                });
                tabletMenu.addEventListener("mouseleave", () => {
                    setTimeout(() => {
                        if (!tabletDropdown.matches(':hover')) {
                            tabletDropdown.style.display = "none";
                        }
                    }, 200);
                });

                tabletDropdown.addEventListener("mouseleave", () => {
                    tabletDropdown.style.display = "none";
                });
                tabletDropdown.addEventListener("mouseenter", () => {
                    hideAllDropdowns()
                    tabletDropdown.style.display = "flex";
                });
            } else {
                console.warn("Không tìm thấy phần tử tabletMenu hoặc tabletDropdown");
            }

            // show menu smartwatch
            if (smartwatchtMenu && smartwatchDropdown) {
                smartwatchtMenu.addEventListener("mouseenter", () => {
                    hideAllDropdowns()
                    smartwatchDropdown.style.display = "flex";
                });
                smartwatchtMenu.addEventListener("mouseleave", () => {
                    setTimeout(() => {
                        if (!smartwatchDropdown.matches(':hover')) {
                            smartwatchDropdown.style.display = "none";
                        }
                    }, 200);
                });

                smartwatchDropdown.addEventListener("mouseleave", () => {
                    smartwatchDropdown.style.display = "none";
                });
                smartwatchDropdown.addEventListener("mouseenter", () => {
                    hideAllDropdowns()
                    smartwatchDropdown.style.display = "flex";
                });
            } else {
                console.warn("Không tìm thấy phần tử smartwatchtMenu hoặc smartwatchDropdown");
            }


             // show menu phụ kiện
            if (phukienMenu && phukienDropdown) {
                phukienMenu.addEventListener("mouseenter", () => {
                    hideAllDropdowns()
                    phukienDropdown.style.display = "flex";
                });
                phukienMenu.addEventListener("mouseleave", () => {
                    setTimeout(() => {
                        if (!phukienDropdown.matches(':hover')) {
                            phukienDropdown.style.display = "none";
                        }
                    }, 200);
                });

                phukienDropdown.addEventListener("mouseleave", () => {
                    phukienDropdown.style.display = "none";
                });
                phukienDropdown.addEventListener("mouseenter", () => {
                    hideAllDropdowns()
                    phukienDropdown.style.display = "flex";
                });
            } else {
                console.warn("Không tìm thấy phần tử phukienMenu hoặc phukienDropdown");
            }
        })
        .catch(error => console.error("Error loading navbar:", error));
});
