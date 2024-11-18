document.addEventListener("DOMContentLoaded", () => {
  const denominations = [500000, 200000, 100000, 50000, 20000, 10000, 5000, 2000, 1000]; // Mệnh giá tiền
  const moneyTable = document.getElementById("money-table");
  const totalMoneyElement = document.getElementById("total-money");

  // Tạo bảng kê tiền
  denominations.forEach((denomination) => {
    const row = document.createElement("tr");

    // Cột mệnh giá
    const cellDenomination = document.createElement("td");
    cellDenomination.textContent = denomination.toLocaleString() + " VND";
    row.appendChild(cellDenomination);

    // Cột số lượng
    const cellQuantity = document.createElement("td");
    const inputQuantity = document.createElement("input");
    inputQuantity.type = "number";
    inputQuantity.min = "0";
    inputQuantity.value = "0";
    inputQuantity.addEventListener("input", calculateTotal); // Gắn sự kiện tính toán tổng tiền
    cellQuantity.appendChild(inputQuantity);
    row.appendChild(cellQuantity);

    // Cột thành tiền
    const cellAmount = document.createElement("td");
    cellAmount.className = "amount";
    cellAmount.textContent = "0";
    row.appendChild(cellAmount);

    moneyTable.appendChild(row);
  });

  // Hàm tính toán tổng tiền
  function calculateTotal() {
    let total = 0;
    Array.from(moneyTable.rows).forEach((row, index) => {
      const quantity = parseInt(row.cells[1].querySelector("input").value) || 0; // Lấy số lượng
      const denomination = denominations[index]; // Lấy mệnh giá tương ứng
      const amount = quantity * denomination; // Tính thành tiền
      row.cells[2].textContent = amount.toLocaleString(); // Cập nhật cột "Thành tiền"
      total += amount; // Cộng vào tổng tiền
    });
    totalMoneyElement.textContent = total.toLocaleString(); // Cập nhật tổng tiền
  }

  // Nút quay lại
  document.getElementById("back").addEventListener("click", () => {
    window.location.href = "index.html"; // Quay lại menu chính
  });
});
