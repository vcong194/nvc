// Hiển thị lời chào theo thời gian
window.onload = function() {
    const greetingElement = document.getElementById("greeting");
    const now = new Date();
    const hours = now.getHours();
    let greeting = "Chào bạn!";

    if (hours >= 5 && hours < 12) {
        greeting = "Chào bạn, chúc buổi sáng tốt lành!";
    } else if (hours >= 12 && hours < 18) {
        greeting = "Chào bạn, chúc buổi chiều tốt lành!";
    } else {
        greeting = "Chào bạn, chúc buổi tối tốt lành!";
    }

    greetingElement.innerText = greeting;
};

// Hiển thị Trang tính
function showTrangTinh() {
    document.getElementById("main-content").innerHTML = `
        <h2>Trang tính</h2>
        <table id="bangKeTien">
            <thead>
                <tr><th>STT</th><th>Diễn giải</th><th>Số tiền</th><th>Tổng tiền</th></tr>
            </thead>
            <tbody>
                <tr><td>1</td><td>Ví dụ 1</td><td><input type="number" value="1000" class="amount"></td><td class="total"></td></tr>
                <tr><td>2</td><td>Ví dụ 2</td><td><input type="number" value="2000" class="amount"></td><td class="total"></td></tr>
            </tbody>
        </table>
        <button onclick="saveToExcel()">Lưu trữ dữ liệu</button>
        <button onclick="printPage()">In trang này</button>
    `;
    updateTotal();
}

// Cập nhật tổng tiền
function updateTotal() {
    let totals = document.querySelectorAll('.total');
    let amounts = document.querySelectorAll('.amount');

    amounts.forEach((input, index) => {
        const totalCell = totals[index];
        totalCell.innerText = input.value;
    });
}

// Lưu trữ dữ liệu thành file Excel
function saveToExcel() {
    const table = document.getElementById('bangKeTien');
    let wb = XLSX.utils.table_to_book(table);
    XLSX.writeFile(wb, 'bang_ke_tien.xlsx');
}

// In trang
function printPage() {
    window.print();
}

// Chuyển sang trang Lưu trữ dữ liệu
function showLuuTru() {
    document.getElementById("main-content").innerHTML = `
        <h2>Lưu trữ dữ liệu</h2>
        <p>Trang này sẽ chứa dữ liệu đã lưu từ trang tính.</p>
    `;
}
