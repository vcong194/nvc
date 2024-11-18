document.addEventListener("DOMContentLoaded", () => {
  const menuButtons = {
    "menu-money": "form-money",
    "menu-pos": "form-payment",
    "menu-qr": "form-payment",
    "menu-bank": "form-payment",
  };

  const menuContainer = document.querySelector(".container"); // Menu chính
  const forms = document.querySelectorAll(".hidden"); // Tất cả các form bị ẩn

  // Khi nhấn nút menu
  Object.keys(menuButtons).forEach((btnId) => {
    const button = document.getElementById(btnId);
    button.addEventListener("click", () => {
      menuContainer.classList.add("hidden"); // Ẩn menu chính
      const formId = menuButtons[btnId];
      document.getElementById(formId).classList.remove("hidden"); // Hiển thị form tương ứng

      if (formId === "form-payment") {
        const titles = {
          "menu-pos": "Nhập thanh toán POS",
          "menu-qr": "Nhập thanh toán QR",
          "menu-bank": "Nhập thanh toán chuyển khoản bệnh viện",
        };
        document.getElementById("payment-title").innerText = titles[btnId]; // Đặt tiêu đề phù hợp
      }
    });
  });

  // Khi nhấn nút "Quay lại"
  document.querySelectorAll("[id^='back']").forEach((backBtn) => {
    backBtn.addEventListener("click", () => {
      forms.forEach((form) => form.classList.add("hidden")); // Ẩn tất cả form
      menuContainer.classList.remove("hidden"); // Hiển thị menu chính
    });
  });
});
