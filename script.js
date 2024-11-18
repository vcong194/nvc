document.addEventListener("DOMContentLoaded", () => {
  // Lắng nghe các nút nhấn
  document.getElementById("btn-money").addEventListener("click", () => {
    window.location.href = "money.html"; // Điều hướng đến trang Bảng kê tiền
  });

  document.getElementById("btn-qr").addEventListener("click", () => {
    window.location.href = "qr.html"; // Điều hướng đến trang Quẹt QR
  });

  document.getElementById("btn-pos").addEventListener("click", () => {
    window.location.href = "pos.html"; // Điều hướng đến trang Quẹt POS
  });

  document.getElementById("btn-transfer").addEventListener("click", () => {
    window.location.href = "transfer.html"; // Điều hướng đến trang Chuyển tài khoản
  });
});
