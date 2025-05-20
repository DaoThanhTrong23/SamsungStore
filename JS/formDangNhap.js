document.addEventListener("DOMContentLoaded", function () {
  const form_login = document.getElementById("login_form");

  form_login.addEventListener("submit", function (event) {
    event.preventDefault();

    let isValid = true;

    const email = document.getElementById("email_login").value.trim();
    const password = document.getElementById("password_login").value.trim();

    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";

    if (email === "") {
      document.getElementById("emailError").textContent = "Vui lòng nhập email";
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      document.getElementById("emailError").textContent = "Email không hợp lệ";
      isValid = false;
    }

    if (password === "") {
      document.getElementById("passwordError").textContent = "Vui lòng nhập mật khẩu";
      isValid = false;
    }

    if (isValid) {
      let users = JSON.parse(localStorage.getItem("users")) || [];

      const matchedUser = users.find(
        (user) => user.email === email && user.password === password
      );

      if (matchedUser) {
        alert("Đăng nhập thành công");
        localStorage.setItem("loggedInUser", JSON.stringify(matchedUser));
        window.location.href = "../index.html";
      } else {
        alert("Email hoặc mật khẩu không đúng");
      }
    }
  });
});
