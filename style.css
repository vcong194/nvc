document.addEventListener('DOMContentLoaded', function () {
  // Xử lý phần chào
  const greetingElement = document.getElementById('greeting').querySelector('h1');
  const currentHour = new Date().getHours(); // Lấy giờ hiện tại

  if (currentHour < 12) {
    greetingElement.textContent = "Chào buổi sáng!";
  } else if (currentHour < 18) {
    greetingElement.textContent = "Chào buổi chiều!";
  } else {
    greetingElement.textContent = "Chào buổi tối!";
  }

  // Các phần tử menu
  const menuLamViec = document.getElementById('menu-lam-viec');
  const menuLuuTru = document.getElementById('menu-luu-tru');
  const menuLamViecLink = document.getElementById('menu-lam-viec-link');
  const menuLuuTruLink = document.getElementById('menu-luu-tru-link');

  // Hàm hiển thị menu làm việc
  menuLamViecLink.addEventListener('click', function () {
    menuLamViec.classList.add('active');
    menuLuuTru.classList.remove('active');
  });

  // Hàm hiển thị menu lưu trữ
  menuLuuTruLink.addEventListener('click', function () {
    menuLuuTru.classList.add('active');
    menuLamViec.classList.remove('active');
  });

  // Mặc định hiển thị Menu làm việc
  menuLamViec.classList.add('active');
});
