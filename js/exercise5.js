// EXERCISE 1 

function printResult() {
    var diemChuan = parseInt(document.getElementById("inputDiemChuan").value);
    var diemMon1 = parseFloat(document.getElementById("inputDiem1").value);
    var diemMon2 = parseFloat(document.getElementById("inputDiem2").value);
    var diemMon3 = parseFloat(document.getElementById("inputDiem3").value);


    var divDemo = document.getElementById("demo");

    if (diemMon1 * diemMon2 * diemMon3 === 0) {
        console.log("Rất tiếc, điểm số bạn không đạt!");
   
        divDemo.innerHTML = "Rất tiếc, điểm số bạn không đạt!";
    } else {
        var diemUutien = xetUutien();
        var diemTong = diemMon1 + diemMon2 + diemMon3 + diemUutien;

        if (diemTong >= diemChuan) {
            console.log("Chúc mừng bạn đã trúng tuyển với tổng điểm là:", diemTong);

            divDemo.innerHTML = "Chúc mừng bạn đã trúng tuyển với tổng điểm là: " + diemTong;
        } else {
            console.log("Rất tiếc, bạn đã không trúng tuyển với tổng điểm là:", diemTong)

            divDemo.innerHTML = "Rất tiếc, bạn đã không trúng tuyển với tổng điểm là: " + diemTong;
        }
    }    

}

function xetUutien() {
    var diemUutien = khuVuc() + doiTuong();
    return diemUutien;
}

function khuVuc() {
    var khuvuc = document.getElementById("khuVuc").value;
    
    switch (khuvuc) {
        case "khuvucA": return 2;
        break;
        case "khuvucB": return 1;
        break;
        case "khuvucC": return 0.5;
        break;
        case "khuvucX": return 0;
    }
}

function doiTuong() {
    var doituong = document.getElementById("doiTuong").value;

    switch (doituong) {
        case "1": return 2.5;
        break;
        case "2": return 1.5;
        break;
        case "3": return 1;
        break;
        case "0": return 0;
    }
}

// EXERCISE 2

function sortNumber() {
    var hoTen = document.getElementById("hoTen").value;
    var tienDien = countNumber();

    var listInfo = "Số tiền điện phải thanh toán của khách hàng " + hoTen + " là: " + tienDien + " VNĐ.";

    console.log(listInfo);

    var divDemo = document.getElementById("demo2");
    divDemo.innerHTML = listInfo;

}

function countNumber(){
    var dienTieuthu = parseInt(document.getElementById("dientieuthu").value);

    if(dienTieuthu <= 50){
        return dienTieuthu * 500;
    }
    else if(dienTieuthu > 50 && dienTieuthu <=100){
        return 50 *500 + (dienTieuthu - 50) *650;
    }
    else if(dienTieuthu > 100 && dienTieuthu <= 150){
        return 50 * 500 + 50 * 650 + (dienTieuthu - 100) * 850;
    }
    else if(dienTieuthu > 150 && dienTieuthu <= 350){
        return 50 * 500 + 50 * 650 + 100 * 850 + (dienTieuthu - 150) * 1100;
    }
    else{
        return 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (dienTieuthu - 350) * 1300;
    }
}



