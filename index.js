// Tạo mảng
var mangSoNguyen = [];

var getEle = function (id) {
    return document.querySelector(id);
}

// Bắt sự kiện click nhập số
document.getElementById('btnNhapSo').addEventListener('click', function () {
    var nhapSoNguyen = getEle('#nhapSoNguyen').valueAsNumber;
    var danhSachMang = getEle('#danhSachMang');
    if (isNaN(nhapSoNguyen)) {
        danhSachMangTb.innerHTML = '(*) Bạn không được bỏ trống ô này';
        danhSachMang.innerHTML = '';
    }
    else if (nhapSoNguyen % 1 == 0) {
        mangSoNguyen.push(nhapSoNguyen);
        danhSachMangTb.innerHTML = '';
        danhSachMang.innerHTML = mangSoNguyen;
        getEle('#nhapSoNguyen').value = '';
    }
    else {
        danhSachMangTb.innerHTML = '(*) Bạn không được nhập số thập phân';
        danhSachMang.innerHTML = '';
    }
});

document.getElementById('btnReset').addEventListener('click', function () {
    mangSoNguyen = [];
    danhSachMang.innerHTML = mangSoNguyen;
    danhSachMangTb.innerHTML = '';
});

// CÁC FUNCTION CHỨC NĂNG
var tinhTongCacSoDuong = function () {
    var tongCacSoDuong = 0;
    for (var i = 0; i < mangSoNguyen.length; i++) {
        if (mangSoNguyen[i] > 0) {
            tongCacSoDuong += mangSoNguyen[i];
        }
    }
    return tongCacSoDuong;
}

var demCacSoDuong = function () {
    var soLuongSoDuong = 0;
    for (var i = 0; i < mangSoNguyen.length; i++) {
        if (mangSoNguyen[i] > 0) {
            soLuongSoDuong++;
        }
    }
    return soLuongSoDuong;
}

var timSoNhoNhat = function () {
    var giaTriMin = mangSoNguyen[0];
    for (var i = 1; i < mangSoNguyen.length; i++) {
        if (giaTriMin > mangSoNguyen[i]) {
            giaTriMin = mangSoNguyen[i];
        }
    }
    return giaTriMin;
}

var timSoDuongNhoNhat = function () {
    var giaTriDuongMin = mangSoNguyen[0];
    for (var i = 1; i < mangSoNguyen.length; i++) {
        if (mangSoNguyen[i] > 0) {
            if (giaTriDuongMin > mangSoNguyen[i]) {
                giaTriDuongMin = mangSoNguyen[i];
            }
        }
    }
    return giaTriDuongMin;
}

var timSoChanCuoiCung = function () {
    var soChanCuoiCung = 0;
    var viTriSoChanCuoiCung = 0;
    for (var i = 0; i < mangSoNguyen.length; i++) {
        if (mangSoNguyen[i] % 2 == 0) {
            viTriSoChanCuoiCung = i;
        }
        else {
            soChanCuoiCung = -1;
        }
    }
    return soChanCuoiCung = mangSoNguyen[viTriSoChanCuoiCung];
}

var doiChoGiaTri = function (nhapViTriMot, nhapViTriHai) {
    var swap = 0;
    swap = mangSoNguyen[nhapViTriMot];
    mangSoNguyen[nhapViTriMot] = mangSoNguyen[nhapViTriHai];
    mangSoNguyen[nhapViTriHai] = swap;
    return mangSoNguyen;
}

function btnDoiSo() {
    var nhapViTriMot = getEle('#nhapViTriMot').valueAsNumber;
    var nhapViTriHai = getEle('#nhapViTriHai').valueAsNumber;
    var kiemTraViTri = getEle('#kiemTraViTri');
    if (isNaN(nhapViTriMot) || isNaN(nhapViTriHai)) {
        kiemTraViTri.innerHTML = '(*) Bạn không được bỏ trống 2 vị trí';
    }
    else if (nhapViTriMot % 1 != 0 || nhapViTriHai % 1 != 0) {
        kiemTraViTri.innerHTML = '(*) Bạn không được nhập vị trí thập phân';
    }
    else if (nhapViTriMot < 0 || nhapViTriHai < 0) {
        kiemTraViTri.innerHTML = '(*) Bạn không được nhập vị trí âm';
    }
    else {
        var mangSauKhiDoiViTri = doiChoGiaTri(nhapViTriMot, nhapViTriHai);
        ketQuaChucNang.innerHTML = 'Vị trí ' + nhapViTriMot + ' và ' + nhapViTriHai + ' đã được đổi chỗ cho nhau: ' + mangSauKhiDoiViTri;
    }
}

var sapXepMangTangDan = function () {
    mangSoNguyen.sort(function (a, b) {
        return a - b;
    });
    return mangSoNguyen;
}

var timSoNguyenToDauTien = function () {
    var soNguyenToDauTien = 0;
    var viTriSoNguyenToDauTien = 0;
    debugger
    for (var i = 0; i < mangSoNguyen.length; i++) {
        if (mangSoNguyen[i] < 2) {
            soNguyenToDauTien = -1;
        }
        else if (mangSoNguyen[i] == 2) {
            return soNguyenToDauTien = mangSoNguyen[i];
        }
        else if (mangSoNguyen[i] == 3) {
            return soNguyenToDauTien = mangSoNguyen[i];
        }
        else if (mangSoNguyen[i] % 2 == 0) {
            soNguyenToDauTien = -1;
        }
        else {
            for (var j = 2; j <= Math.sqrt(mangSoNguyen[i]); j += 2) {
                if (mangSoNguyen[i] % j == 0) {
                    soNguyenToDauTien = -1;
                }
                else if (mangSoNguyen[i] % 3 == 0) {
                    soNguyenToDauTien = -1;
                }
                else {
                    viTriSoNguyenToDauTien = i;
                    return soNguyenToDauTien = mangSoNguyen[viTriSoNguyenToDauTien];
                }
            }
        }
    }
    return soNguyenToDauTien;
}

function btnNhapSoThuc() {
    var nhapSoThuc = getEle('#nhapSoThuc').valueAsNumber;
    if (nhapSoThuc % 1 != 0) {
        mangSoNguyen.push(nhapSoThuc);
        danhSachMangTb.innerHTML = '';
        danhSachMang.innerHTML = mangSoNguyen;
        getEle('#nhapSoThuc').value = '';
        kiemTraChucNang.innerHTML = '';
    }
    else {
        kiemTraChucNang.innerHTML = '(*) Bạn phải nhập số thực';
    }
}

function btnTimSoNguyen() {
    var demSoNguyen = 0;
    for (var i = 0; i < mangSoNguyen.length; i++) {
        if (mangSoNguyen[i] % 1 == 0) {
            demSoNguyen++;
        }
    }
    ketQuaChucNang.innerHTML = 'Số lượng số nguyên trong mảng là: ' + demSoNguyen;
}

var soSanhSo = function () {
    debugger;
    var soDuong = 0;
    var soAm = 0;
    for (var i = 0; i < mangSoNguyen.length; i++) {
        if (mangSoNguyen[i] > 0) {
            soDuong++;
        }
        if (mangSoNguyen[i] < 0) {
            soAm++;
        }
    }
    if (soDuong > soAm) {
        return ketQuaChucNang.innerHTML = 'Số dương nhiều hơn';
    }
    else if (soDuong == soAm) {
        return ketQuaChucNang.innerHTML = 'Số âm và số dương bằng nhau';
    }
    else if (soDuong < soAm) {
        return ketQuaChucNang.innerHTML = 'Số âm nhiều hơn';
    }
}

// Bắt sự kiện chọn chức năng 
document.getElementById('btnChucNang').addEventListener('click', function () {
    var chonChucNang = getEle('#chonChucNang').value;
    var ketQuaChucNang = getEle('#ketQuaChucNang');
    var kiemTraChucNang = getEle('#kiemTraChucNang');
    var chucNangSau = getEle('#chucNangSau');
    var chucNangChin = getEle('#chucNangChin');
    if (mangSoNguyen.length == 0) {
        kiemTraChucNang.innerHTML = '(*) Chưa có giá trị nào trong mảng. Vui lòng nhập giá trị ở trên!!'
    }
    else {
        kiemTraChucNang.innerHTML = '';
        switch (Number(chonChucNang)) {
            case 1:
                chucNangChin.style.display = 'none';
                chucNangSau.style.display = 'none';
                var tongCacSoDuong = tinhTongCacSoDuong();
                ketQuaChucNang.innerHTML = 'Tổng các số dương trong mảng là: ' + tongCacSoDuong;
                break;
            case 2:
                chucNangChin.style.display = 'none';
                chucNangSau.style.display = 'none';
                var soLuongSoDuong = demCacSoDuong();
                ketQuaChucNang.innerHTML = 'Số lượng các số dương trong mảng là: ' + soLuongSoDuong;
                break;
            case 3:
                chucNangChin.style.display = 'none';
                chucNangSau.style.display = 'none';
                var giaTriMin = timSoNhoNhat();
                ketQuaChucNang.innerHTML = 'Số nhỏ nhất là: ' + giaTriMin;
                break;
            case 4:
                chucNangChin.style.display = 'none';
                chucNangSau.style.display = 'none';
                var giaTriDuongMin = timSoDuongNhoNhat();
                ketQuaChucNang.innerHTML = 'Số dương nhỏ nhất là: ' + giaTriDuongMin;
                break;
            case 5:
                chucNangChin.style.display = 'none';
                chucNangSau.style.display = 'none';
                var soChanCuoiCung = timSoChanCuoiCung();
                ketQuaChucNang.innerHTML = 'Số chẵn cuối cùng trong mảng là: ' + soChanCuoiCung;
                break;
            case 6:
                chucNangChin.style.display = 'none';
                chucNangSau.style.display = 'block';
                break;
            case 7:
                chucNangChin.style.display = 'none';
                chucNangSau.style.display = 'none';
                var mangSapXepTangDan = sapXepMangTangDan();
                ketQuaChucNang.innerHTML = 'Mảng được sắp xếp theo tăng dần: ' + mangSapXepTangDan;
                break;
            case 8:
                chucNangChin.style.display = 'none';
                chucNangSau.style.display = 'none';
                var soNguyenToDauTien = timSoNguyenToDauTien();
                ketQuaChucNang.innerHTML = 'Số nguyên tố đầu tiên trong mảng là: ' + soNguyenToDauTien;
                break;
            case 9:
                chucNangChin.style.display = 'block';
                chucNangSau.style.display = 'none';
                break;
            case 10:
                chucNangChin.style.display = 'none';
                chucNangSau.style.display = 'none';
                soSanhSo();
                break;
        }
    }
});





