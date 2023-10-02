//Bai 1
let arr = [3, 451, 27]
let doDaiMang = arr.length

for(let i = 0; i < doDaiMang; i = i+1){
    console.log('Phan tu thu %s = %s',i, arr[i])
}
// Bai 1 b
let arr1 = [3,451,5,2,6,76,3,5,1,243,6,4]
let doDaiMang1 = arr.length
let tongPhanTu =0

for(let i=0; i<doDaiMang; i= i+1){
    tongPhanTu = tongPhanTu + arr[i]
    console.log('Tong cac gia tri trong mang la: %s',i,arr[i])

}
// Bai 1c
let soLonNhat = arr1[0]
let soNhoNhat= arr1[0]
for (i=1;i<doDaiMang1;i=i+1){
    if (soLonNhat < arr[i]){
        soLonNhat = arr[i]
    }  
    if (soNhoNhat > arr[i]){
        soNhoNhat = arr[i]
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



