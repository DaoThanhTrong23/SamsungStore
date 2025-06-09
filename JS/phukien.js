//Quản lý tab//
var tabLinks = document.querySelectorAll(".tablinks");//chứa tất cả các phần tử có class ".tablink"//
var tabContent = document.querySelectorAll(".tabcontent");//chứa tất cả phần tử có class ".tabcontent"//

//khi một hàm đc nhấp, hàm openTabs sẽ đc gọi với tham số là phần tử đã nhấp vào//
tabLinks.forEach(function(el) {
   el.addEventListener("click", openTabs);
});

function openTabs(el) {
   var btn = el.currentTarget;
   var electronic = btn.dataset.electronic;

   tabContent.forEach(function(el) {
      el.classList.remove("active");
   });

   tabLinks.forEach(function(el) {
      el.classList.remove("active");
   });

   document.querySelector("#" + electronic).classList.add("active");
   btn.classList.add("active");
}

//Circles//
function selectCircle(el) {
  // Xóa class 'selected' khỏi tất cả các vòng tròn (bất kể class gì)
  document.querySelectorAll('.color-circlecam, .color-circle1, .color-circle2').forEach(item => {
    item.classList.remove('selected');
  });

  // Thêm class 'selected' cho phần tử được click
  el.classList.add('selected');
}

//Cuon//
  function scrollToSection(sectionId) {
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }

  
