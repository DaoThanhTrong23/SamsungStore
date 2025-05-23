document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("carousel");
  const btnLeft = document.getElementById("slide-left");
  const btnRight = document.getElementById("slide-right");

  const scrollAmount = 430;

  btnLeft.addEventListener("click", () => {
    container.scrollBy({
      left: -scrollAmount,
      behavior: "smooth"
    });
  });

  btnRight.addEventListener("click", () => {
    container.scrollBy({
      left: scrollAmount,
      behavior: "smooth"
    });
  });

  // (Tùy chọn) Ẩn nút khi không còn chỗ cuộn
  const updateButtons = () => {
    btnLeft.style.visibility = container.scrollLeft > 0 ? "visible" : "hidden";
    btnRight.style.visibility = container.scrollLeft + container.clientWidth < container.scrollWidth
      ? "visible"
      : "hidden";
  };

  const slider = document.getElementById('product-slider');
  const card = slider.querySelector('.card');
  const scrollA = card.offsetWidth + 16; // 250 + khoảng cách giữa card

  document.getElementById('scroll-right').onclick = () => {
    slider.scrollBy({ left: scrollA, behavior: 'smooth' });
  };

  document.getElementById('scroll-left').onclick = () => {
    slider.scrollBy({ left: -scrollA, behavior: 'smooth' });
  };

  const slider_tablet = document.getElementById('product-slider_tablet');
  const card_tablet = slider_tablet.querySelector('.card');
  const scrollA_tablet = card_tablet.offsetWidth + 16; // 250 + khoảng cách giữa card

  document.getElementById('scroll-right_tablet').onclick = () => {
    slider_tablet.scrollBy({ left: scrollA_tablet, behavior: 'smooth' });
  };

  document.getElementById('scroll-left_tablet').onclick = () => {
    slider_tablet.scrollBy({ left: -scrollA_tablet, behavior: 'smooth' });
  };



  const slider_pk = document.getElementById('product-slider_phu_kien');
  const card_pk = slider_pk.querySelector('.card');
  const scrollA_pk = card_pk.offsetWidth + 0; // 250 + khoảng cách giữa card

  document.getElementById('scroll-right_phu_kien').onclick = () => {
    slider_pk.scrollBy({ left: scrollA_pk, behavior: 'smooth' });
  };

  document.getElementById('scroll-left_phu_kien').onclick = () => {
    slider_pk.scrollBy({ left: -scrollA_pk, behavior: 'smooth' });
  };

  // Cập nhật khi cuộn hoặc resize
  container.addEventListener("scroll", updateButtons);
  window.addEventListener("resize", updateButtons);
  updateButtons(); // gọi lần đầu
});
