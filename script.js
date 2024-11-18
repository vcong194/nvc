document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('report-form');
  const saveButton = document.getElementById('save-report');
  const thucNopInput = document.getElementById('thuc-nop');
  
  // Tính toán thực nộp
  form.addEventListener('input', function () {
    const tongPos = parseFloat(document.getElementById('tong-pos').value) || 0;
    const tongQr = parseFloat(document.getElementById('tong-qr').value) || 0;
    const tongChuyenKhoan = parseFloat(document.getElementById('tong-chuyen-khoan').value) || 0;
    const soTienBaoCao = tongPos + tongQr + tongChuyenKhoan;

    thucNopInput.value = soTienBaoCao.toFixed(2);
  });

  // Tính thành tiền cho bảng kê tiền
  const moneyInputs = document.querySelectorAll('.so-luong');
  moneyInputs.forEach(input => {
    input.addEventListener('input', function () {
      const soLuong = parseFloat(input.value) || 0;
      const loaiTien = parseFloat(input.dataset.loai);
      const thanhTien = soLuong * loaiTien;
      input.parentElement.nextElementSibling.querySelector('.thanh-tien').textContent = thanhTien.toFixed(2);
    });
  });

  // Lưu báo cáo dưới dạng PDF
  saveButton.addEventListener('click', function () {
    const doc = new jsPDF();
    doc.text("Báo cáo làm việc", 20, 20);
    
    // Thêm thông tin từ form
    doc.text(`Tên: ${document.getElementById('ten').value}`, 20, 30);
    doc.text(`Ngày làm việc: ${document.getElementById('ngay-lam-viec').value}`, 20, 40);
    
    // Tạo bảng kê tiền
    let yOffset = 50;
    document.querySelectorAll('.so-luong').forEach(input => {
      const soLuong = input.value;
      const loaiTien = input.dataset.loai;
      const thanhTien = input.parentElement.nextElementSibling.querySelector('.thanh-tien').textContent;
      doc.text(`Loại tiền: ${loaiTien} - Số lượng: ${soLuong} - Thành tiền: ${thanhTien}`, 20, yOffset);
      yOffset += 10;
    });

    // Lưu file PDF
    doc.save('bao-cao-lam-viec.pdf');
  });
});
