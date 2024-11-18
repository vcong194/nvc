function saveToExcel() {
    const table = document.getElementById('bangKeTien');
    let wb = XLSX.utils.table_to_book(table);
    XLSX.writeFile(wb, 'bang_ke_tien.xlsx');
}
