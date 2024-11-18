// Lưu trữ thông tin đã nhập vào localStorage
document.getElementById("bangKeForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Lấy dữ liệu từ form
    const ten = document.getElementById("ten").value;
    const soTien = document.getElementById("soTien").value;

    if (ten && soTien) {
        const newData = { ten, soTien };

        // Lưu vào localStorage theo tên người đặt
        let storedData = JSON.parse(localStorage.getItem("data")) || [];
        storedData.push(newData);
        localStorage.setItem("data", JSON.stringify(storedData));

        // Cập nhật danh sách lưu trữ
        updateStorageList();
        
        // Clear form
        document.getElementById("bangKeForm").reset();
    }
});

// Hiển thị danh sách lưu trữ
function updateStorageList() {
    const listLuuTru = document.getElementById("listLuuTru");
    listLuuTru.innerHTML = ''; // Xóa danh sách cũ

    const storedData = JSON.parse(localStorage.getItem("data")) || [];
    
    storedData.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `Tên: ${item.ten} - Số Tiền: ${item.soTien}`;
        listLuuTru.appendChild(li);
    });
}

// Cập nhật danh sách lưu trữ khi tải trang
updateStorageList();

// Tạo file Excel từ dữ liệu trong localStorage
document.getElementById("downloadBtn").addEventListener("click", function() {
    const storedData = JSON.parse(localStorage.getItem("data")) || [];

    // Chuyển đổi dữ liệu thành bảng Excel
    const ws = XLSX.utils.json_to_sheet(storedData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Bảng Kê Tiền");

    // Tải xuống file Excel
    XLSX.writeFile(wb, "BangKeTien.xlsx");
});