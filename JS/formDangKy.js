

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("signup-form");

    form.addEventListener("submit",function(event) {
        event.preventDefault();

        let isValid = true;

        const email = document.getElementById("email").value.trim();
        const password  = document.getElementById("password").value.trim();
        const confirmPassword  = document.getElementById("confirm-password").value.trim();
        const termsChecked = document.getElementById("terms-condition").checked;

        // Xoá các lỗi cũ

        document.getElementById("emailError").textContent = "";
        document.getElementById("passwordError").textContent = "";
        document.getElementById("confirmPasswordError").textContent = "";
        document.getElementById("termsError").textContent = "";

        // Kiểm tra email

        if(email === ""){
            document.getElementById("emailError").textContent = "Vui lòng nhập email";
            isValid = false;
        } else if(!/^\S+@\S+\.\S+$/.test(email)) {
            document.getElementById("emailError").textContent = "Email không hợp lệ";
            isValid = false;
        }

        // Kiểm tra password

        if(password === ""){
            document.getElementById("passwordError").textContent = "Vui lòng nhập mật khẩu";
            isValid = false;
        }

        // Kiểm tra confirm-password

        if(confirmPassword === "") {
            document.getElementById("confirmPasswordError").textContent = "Vui lòng nhập mật khẩu";
            isValid = false;
        } else if (confirmPassword != password) {
            document.getElementById("confirmPasswordError").textContent = "Mật khẩu không khớp";
            isValid = false;
        }
        
        // Kiểm tra checkbox

        if (!termsChecked) {
            document.getElementById("termsError").textContent = "Bạn cần đồng ý với điều khoản và điều kiện";
            isValid = false;
        }

        if (isValid) {
            let users = JSON.parse(localStorage.getItem("users")) || [];
            const isDuplicate = users.some(user => user.email === email)
            if (isDuplicate)
            {
                document.getElementById("emailError").textContent = "Email này đã được đăng ký";
                return;
            }
            const newuser = {
                "email": email,
                "password": password
            };
            users.push(newuser)
            localStorage.setItem("users", JSON.stringify(users));

            alert("Đăng ký thành công");
            form.reset()
        }
    });
});