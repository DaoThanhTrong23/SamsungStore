
let sanPhamGoc = [];
let filterLoai = null;
let filterGia = null;

function renderSanPham(danhSach) {
    const container = document.getElementById('danhSachSanPham');
    container.innerHTML = '';
    danhSach.forEach(sp => {
        const theCard = document.createElement('a');
        theCard.className = 'card mx-4 my-2';
        theCard.style.cssText = 'flex: 0 0 auto; scroll-snap-align: start; width: 250px; text-align: center;';
        theCard.innerHTML = `
            <div class="card-header" style="height: 270px; position: relative;">
                <div style="position: absolute; background-color: #2189FF; color: white; border-radius: 20px; width: fit-content; padding: 2px 10px; left: 10px; top: 10px;">
                    Mới
                </div>
                <img src="${sp.hinhAnh}" class="card-img-top" alt="${sp.tenSanPham}">
            </div>
            <div class="card-body">
                <h5><strong>${sp.tenSanPham}</strong></h5>
                <p>Màu sắc: ${sp.mauSac}</p>
                <h5><strong>Giá: ${sp.gia.toLocaleString('vi-VN')} VNĐ</strong></h5>
                <button class="btn_mua_ngay">Mua ngay</button>
            </div>`;
        container.appendChild(theCard);
    });
}

function applyFilter() {
    let filtered = [...sanPhamGoc];

    if (filterLoai) {
        filtered = filtered.filter(sp => sp.loai === filterLoai);
    }

    if (filterGia) {
        const [min, max] = filterGia.split('-').map(Number);
        filtered = filtered.filter(sp => sp.gia >= min && sp.gia <= max);
    }

    renderSanPham(filtered);
}

function setupFilterListeners() {
    document.querySelectorAll('[data-loai]').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const selected = link.classList.contains('selected');

            document.querySelectorAll('[data-loai]').forEach(el => el.classList.remove('selected'));

            if (!selected) {
                link.classList.add('selected');
                filterLoai = link.dataset.loai;
            } else {
                filterLoai = null;
            }
            applyFilter();
        });
    });

    document.querySelectorAll('[data-gia]').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const selected = link.classList.contains('selected');

            document.querySelectorAll('[data-gia]').forEach(el => el.classList.remove('selected'));

            if (!selected) {
                link.classList.add('selected');
                filterGia = link.dataset.gia;
            } else {
                filterGia = null;
            }
            applyFilter();
        });
    });


    // này chuyển trang trên nav

    const params = new URLSearchParams(window.location.search);
    const action = params.get('action');

    if (action === 'click_type_Z') {
        const targetLink = document.getElementById('type_Z');
        if (targetLink) {
            targetLink.click();
        }
    }
    if (action === 'click_type_S') {
        const targetLink = document.getElementById('type_S');
        if (targetLink) {
            targetLink.click();
        }
    }
    if (action === 'click_type_A') {
        const targetLink = document.getElementById('type_A');
        if (targetLink) {
            targetLink.click();
        }
    }















}

fetch('smartphone.json')
    .then(res => res.json())
    .then(data => {
        sanPhamGoc = data;
        renderSanPham(sanPhamGoc);
        setupFilterListeners();
    })
    .catch(err => console.error('Lỗi tải JSON:', err));
