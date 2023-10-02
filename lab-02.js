// Cau1 a
function kiemtrasoAmDuong (n){
    if(n<0){
        console.log(n,'là số âm')
    }else if(n>0){
        console.log(n,'là số dương')
    }else{
        console.log(n,'không là số âm hoặc dương')
    }
}
kiemtrasoAmDuong(-1)
   //b 
   function kiemtraSoChanLe(n){
    if(n%2===0){
        console.log(n,'là số chẵn')
    }else{
        console.log(n,'là số lẻ')
    }
   }
   kiemtraSoChanLe(-22)

   //c 
   function kiemtrasolonnhat(a,b,c){
    if(a>b && a>c){
        console.log(a,'là số lớn nhất')
    }else if(b>a && b>c){
        console.log(b,'là số lớn nhất')
    }else if(c>a && c>b){
        console.log(c,'là số lớn nhất')
    }
   }
   kiemtrasolonnhat(233,675,34)

   
   function timSoLonNhat(a, b, c) {
    let soLonNhat = a;
    if (b > soLonNhat) {
      soLonNhat = b;
    }
    if (c > soLonNhat) {
      soLonNhat = c;
    }
    return soLonNhat;
  }
   let soLonNhat = timSoLonNhat(10, 5, 8);
  console.log("Số lớn nhất là: " + soLonNhat);

  function soLonNhatIn3So(x,y,z){
    let max = x
    console.log(x,'là số lớn nhất')
    if(y > max){
         console.log(y,'là số lớn nhất')
    }else if(z > max){
        console.log(z,'là số lớn nhất')
        }
  }
  soLonNhatIn3So(3225,645,432)

  //Bai 2
  let a2 = 2
  let b2 = 3
  let c2 = 1
  function giaiPhuongTrinhBac2 (a2,b2,c2){
    const delta = b2*b2-4*a2*c2
    
    if (a2===0 && b2===0){
        console.log('Phuong trinh vo nghiem')
    }if  (a2=0){
        const x= -c/b
        console.log('Nghiem la x=',x)
    }if  (delta<0){
        console.log('Phuong trinh vo nghiem')
    }else {
            const x1 =(-b2 + Math.sqrt(delta))/(2*a2)
            const x2 =(-b2 - Math.sqrt(delta))/(2*a2)
            console.log('x1=',x1 + '/ x2=',x2)
    
        }
  }
  giaiPhuongTrinhBac2(2,-5,2)















  















  function tinhGiaCuoc(soPhut){
    const phiCoDinh = 25000
    let tongChiPhi = 0
    let chiPhi =0
    
    if(soPhut >= 0 && soPhut <=50){
        chiPhi = soPhut * 600
    }
    else if(soPhut > 50 && soPhut<=200){
        chiPhi =50*600 + (soPhut -50)*400
    }
    else if (soPhut >200){
        chiPhi =50*600 +150*400 + (soPhut-200)*200
    }

     tongChiPhi= phiCoDinh + chiPhi
     return tongChiPhi
}
 
let soPhut =60
let tongChiPhi = tinhGiaCuoc(soPhut)
console.log('Gia cuoc dien thoai cho',soPhut +'phút gọi là',tongChiPhi + 'đồng')


function tinhGiaCuocDienThoai(soPhutGoi) {
    const phiThueBaoBatBuoc = 25000; // Phí thuê bao bắt buộc là 25,000 đồng
    const phiPhutGoi = [600, 400, 200]; // Mảng phí cho từng khoảng phút gọi
    const phutGoiMoiKhoang = [50, 150, Infinity]; // Mảng số phút cho từng khoảng phí
  
    let giaCuoc = phiThueBaoBatBuoc; // Bắt đầu với phí thuê bao bắt buộc
  
    for (let i = 0; i < phiPhutGoi.length; i++) {
      if (soPhutGoi <= phutGoiMoiKhoang[i]) {
        giaCuoc += soPhutGoi * phiPhutGoi[i];
        break; // Kết thúc vòng lặp khi đã tính xong giá cước
      } else {
        giaCuoc += phutGoiMoiKhoang[i] * phiPhutGoi[i];
        soPhutGoi -= phutGoiMoiKhoang[i]; // Giảm số phút đã tính giá cước
      }
    }
  
    return giaCuoc;
  }
  
  // Sử dụng hàm để tính giá cước với số phút gọi điện thoại cụ thể.
  const soPhutGoi = 250; // Ví dụ có 250 phút gọi
  const giaCuoc = tinhGiaCuocDienThoai(soPhutGoi);
  console.log(`Giá cước điện thoại cho ${soPhutGoi} phút gọi là ${giaCuoc} đồng`);