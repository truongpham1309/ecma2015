function vanchuyen(bool) {
    let address = document.querySelector(".vanchuyen");

    if (bool) {
        address.style.display = "flex";
    }
    else {
        address.style.display = "none"
    }
}

function dongiafunc(money) {
    let dongia = document.querySelector("#dongia");
    
    if(money === 1) {
        dongia.value = 500;
    }
    else if(money === 2){
        dongia.value = 1000;
    }
    else if(money === 3){
        dongia.value = 2000;
    }

}

let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
}) 

let formSubmit = () => {
    let soluong = document.querySelector("#soluong"),
        sanpham = document.querySelector("#sanpham"),
        loai = document.querySelector("#loai"),
        dongia = document.querySelector("#dongia"),
        address = document.getElementsByName("address"),
        thongBao = document.querySelector("#thongBao")

    if (soluong.value.length == 0) {
        soluong.focus();
        let err_soluong = "Mời nhập số lượng";
        thongBao.innerHTML = err_soluong;
        return false;
    }
    else if (sanpham.value.length == 0) {
        sanpham.focus();
        let err_sanpham = "Mời nhập sản phẩm";
        thongBao.innerHTML = err_sanpham;
        return false;
    }
    else if (loai.value.length == 0) {
        let err_loai = "Mời chọn loại";
        thongBao.innerHTML = err_loai;
        return false;
    }
    else if(address[0].checked & address[1].checked){
        dongiafunc(loai.value)
        let err_address = "Mời chọn nơi vận chuyển";
        thongBao.innerHTML = err_address;
        return false;
    }
    else{
        thongBao.textContent = ''
        let showInfo = document.querySelector(".showInfo");
        showInfo.innerHTML = `
        Sản phẩm: ${sanpham.value}<br>
        Loại: ${loai.value}<br>
        Đơn giá: ${+loai.value === 1 ? 500 : +loai.value === 2 ? 1000 : 2000}<br>
        Nơi vận chuyển: ${address[0].checked ? "Nội thành" : "Ngoại thành"}<br>
    `
    }

    

}