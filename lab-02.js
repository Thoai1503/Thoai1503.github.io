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