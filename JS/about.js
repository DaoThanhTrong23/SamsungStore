// Button đầu tiên
document.getElementById('toggleButton').onclick = function() {
    document.getElementById('modal').style.display = 'block';
}

// Button thứ hai
document.getElementById('toggleButton1').onclick = function() {
    document.getElementById('modal1').style.display = 'block';
}

// Đóng modal đầu tiên
document.getElementById('closeButton').onclick = function() {
    document.getElementById('modal').style.display = 'none';
}

// Đóng modal thứ hai
document.getElementById('closeButton1').onclick = function() {
    document.getElementById('modal1').style.display = 'none';
}

// Đóng modal khi nhấn ra ngoài
window.onclick = function(event) {
    if (event.target == document.getElementById('modal')) {
        document.getElementById('modal').style.display = 'none';
    }
    if (event.target == document.getElementById('modal1')) {
        document.getElementById('modal1').style.display = 'none';
    }
}


document.getElementById('supportButton').onclick = function() {
        document.getElementById('contactModal').style.display = 'block';
    }
    document.getElementById('productInquiryButton').onclick = function() {
        document.getElementById('contactModal').style.display = 'block';
    }
    document.getElementById('feedbackButton').onclick = function() {
        document.getElementById('contactModal').style.display = 'block';
    }

    // Đóng modal
    document.getElementById('modalCloseButton').onclick = function() {
        document.getElementById('contactModal').style.display = 'none';
        document.getElementById('successNotification').style.display = 'none'; // Ẩn thông báo khi đóng modal
    }

    // Đóng modal khi nhấn ra ngoài
    window.onclick = function(event) {
        if (event.target == document.getElementById('contactModal')) {
            document.getElementById('contactModal').style.display = 'none';
            document.getElementById('successNotification').style.display = 'none'; // Ẩn thông báo khi đóng modal
        }
    }

    // Xử lý gửi biểu mẫu
    document.getElementById('contactForm').onsubmit = function(e) {
        e.preventDefault();
        document.getElementById('successNotification').style.display = 'block'; // Hiển thị thông báo
        document.getElementById('contactForm').reset(); // Đặt lại biểu mẫu
    }




//Cuộn đến phần tử có id cụ thể
  function scrollToSection(sectionId) {
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }
//Lick vào để mở form
 function toggleForm(formId) {
        const forms = document.querySelectorAll('.form-content');
        forms.forEach(form => {
            if (form.id === formId) {
                form.style.display = form.style.display === 'block' ? 'none' : 'block';
            } else {
                form.style.display = 'none';
            }
        });
    }
