document.addEventListener("DOMContentLoaded", () => {
  const inputMoneyBtn = document.getElementById("input-money-btn");
  const formContainer = document.getElementById("form-container");
  const backBtn = document.getElementById("back-btn");
  const container = document.querySelector(".container");

  // Hiển thị form nhập bảng kê tiền
  inputMoneyBtn.addEventListener("click", () => {
    container.classList.add("hidden");
    formContainer.classList.remove("hidden");
  });

  // Quay lại màn hình chính
  backBtn.addEventListener("click", () => {
    formContainer.classList.add("hidden");
    container.classList.remove("hidden");
  });
});
