document.addEventListener("DOMContentLoaded", () => {
  const denominations = [500000, 200000, 100000, 50000, 20000, 10000, 5000, 2000, 1000]; // Mệnh giá tiền
  const moneyTable = document.getElementById("money-table");
  const totalMoneyElement = document.getElementById("total-money");
  const moneyTextElement = document.getElementById("money-text");
  const reportAmountElement = document.getElementById("report-amount");
  const differenceElement = document.getElementById("difference");

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
    inputQuantity.addEventListener("input", calculateTotal); // Gắn sự kiện để tính tổng tiền
    cellQuantity.appendChild(inputQuantity);
    row.appendChild(cellQuantity);

    // Cột thành tiền
    const cellAmount = document.createElement("td");
    cellAmount.className = "amount";
    cellAmount.textContent = "0";
    row.appendChild(cellAmount);

    moneyTable.appendChild(row);
  });

  // Hàm chuyển số thành chữ
  function numberToText(num) {
    if (num === 0) return "Không";
    const units = ["", "nghìn", "triệu", "tỷ"];
    const digits = ["không", "một", "hai", "ba", "bốn", "năm", "sáu", "bảy", "tám", "chín"];
    let text = "";
    let unitIndex = 0;

    while (num > 0) {
      const part = num % 1000;
      if (part > 0) {
        const hundreds = Math.floor(part / 100);
        const tens = Math.floor((part % 100) / 10);
        const ones = part % 10;

        let partText = "";
        if (hundreds > 0) partText += digits[hundreds] + " trăm ";
        if (tens > 1) partText += digits[tens] + " mươi ";
        else if (tens === 1) partText += "mười ";
        if (ones > 0) partText += digits[ones];

        text = partText.trim() + " " + units[unitIndex] + " " + text;
      }

      unitIndex++;
      num = Math.floor(num / 1000);
    }

    return text.trim();
  }

  // Hàm tính tổng tiền và hiển thị
  function calculateTotal() {
    let total = 0;
    Array.from(moneyTable.rows).forEach((row, index) => {
      const quantity = parseInt(row.cells[1].querySelector("input").value) || 0; // Lấy số lượng
      const denomination = denominations[index]; // Lấy mệnh giá
      const amount = quantity * denomination; // Tính thành tiền
      row.cells[2].textContent = amount.toLocaleString(); // Cập nhật cột "Thành tiền"
      total += amount; // Tính tổng tiền
    });
    totalMoneyElement.textContent = total.toLocaleString(); // Cập nhật tổng tiền
    moneyTextElement.textContent = numberToText(total); // Hiển thị số tiền bằng chữ
    calculateDifference(); // Tính chênh lệch
  }

  // Hàm tính chênh lệch
  function calculateDifference() {
    const reportAmount = parseInt(reportAmountElement.value) || 0; // Số tiền báo cáo
    const totalMoney = parseInt(totalMoneyElement.textContent.replace(/,/g, "")) || 0; // Tổng tiền
    const difference = reportAmount - totalMoney;
    differenceElement.textContent = difference.toLocaleString(); // Cập nhật chênh lệch
  }

  // Lắng nghe thay đổi số tiền báo cáo
  reportAmountElement.addEventListener("input", calculateDifference);
});
