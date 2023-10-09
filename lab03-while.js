let arr = [3,451,5,2,6,76,3,5,1,243,6,4]
let i = 0
let tong =0
while(arr[i] !== undefined){
        tong =tong + arr[i]
        i=i+1
}
console.log('Tong cac phan tu trong mang la',tong)
// cau c
i = 0
let lonNhat = arr[0]
let nhoNhat = arr[0]
while(arr[i] !== undefined){
    if (arr[i]> lonNhat){
        lonNhat= arr[i]
    }
    if (arr[i]< nhoNhat){
        nhoNhat= arr[i]
    }
    i++
}
console.log('So lon nhat',lonNhat)
console.log('So nho nhat',nhoNhat)





let start = 0; // Chỉ số của phần tử đầu mảng
let end = arr.length - 1; // Chỉ số của phần tử cuối mảng


while (start < end) {
  // Sử dụng biến tạm để hoán đổi giá trị của hai phần tử
  let temp = arr[start];
  arr[start] = arr[end];
  arr[end] = temp;
  // Di chuyển chỉ số start về phía trước và chỉ số end về phía sau
  start++;
  end--;
}

console.log("Mảng sau khi đảo ngược: " + arr);

let arr2 = [3,451,5,2,6,76,3,5,1,243,6,4]
const reversedArr = []; // Mảng tạm thời để lưu kết quả đảo ngược
let i1 = arr2.length - 1;

while (i1 >= 0) {
  reversedArr.push(arr2[i1]);
  i1--;
}

console.log("Mảng sau khi đảo ngược: " + reversedArr);



 
