//Bai 1
let arr = [3, 451, 27]
let doDaiMang = arr.length

for(let i = 0; i < doDaiMang; i = i+1){
    console.log('Phan tu thu %s = %s',i, arr[i])
}
// Bai 1 b
let arr1 = [3,451,5,2,6,76,3,5,1,243,6,4]
let doDaiMang1 = arr1.length
let tongPhanTu = 0


for(let i=0; i<doDaiMang1; i= i+1){
    tongPhanTu = tongPhanTu + arr1[i]
    console.log('Tong cac gia tri trong mang la: %s',i,arr1[i])
}
// Bai 1c
let soLonNhat = arr1[0]
let soNhoNhat= arr1[0]
for (i=1;i<doDaiMang1;i=i+1){
    if (soLonNhat < arr1[i]){
        soLonNhat = arr1[i]
    }  
    if (soNhoNhat > arr1[i]){
        soNhoNhat = arr1[i]
    }
    console.log('So lon nhat la',soLonNhat)
    console.log('So nho nhat la',soNhoNhat)
}
// Bai 1d


// Bai 1e
let arr2 = []
let j = 0
 for(let i = doDaiMang1 - 1; i >=0; i--){
    arr2[j] = arr1[i]
    j++
 }
 console.log(arr2)  

 function tinhTong(n) {
    let tong = 0;
    for (let i = 1; i <= n; i++) {
      tong += i;
    }
    return tong;
  }
  
  // Sử dụng hàm để tính tổng S(n) cho một giá trị n cụ thể
  const n = 10; // Thay đổi giá trị n tại đây nếu cần
  const ketQua = tinhTong(n);
  console.log(`Tổng của S(${n}) là: ${ketQua}`);

  function tinhtong(m){
    let tong1 =0
    for (i>1;i<=m;i++){
        tong1 += i 
    }
return tong1
  }
  
  const kQ = tinhtong(9)
  console.log('Tong của S là %s',kQ)
  //cau
  const tanSuatXuatHien ={}
  for(let i=0;i<doDaiMang1;i++){
    const phanTuthuI = arr1[i]
    tanSuatXuatHien[phanTuthuI] =(tanSuatXuatHien[phanTuthuI] ||0) +1
  }
 
console.log('=>>>>', tanSuatXuatHien)

//cau g
for(let i =doDaiMang1 -1; i>=0;i--){
    arr1[i +1]= arr1[i]
}
console.log(arr1)

//cau h
const doDaiMangMoi = arr1.length
let checkTangDan = true

for(let i=0; i<doDaiMangMoi; i++){
    if(arr1[i+1]<arr1[i]){
        checkTangDan = false
        break
    }
}
if (checkTangDan === true){
    console.log('mang tang dan')
}
else{
    console.log('mang khong tang dan')
}