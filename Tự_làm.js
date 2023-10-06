let Hocsinh = {
    Tên : 'Võ Giang Thoại',
    Tuổi: 22,
    Địachỉ: 'Quận 12'
}
console.log(Hocsinh)

Hocsinh.Địachỉ = 'Hóc Môn'
console.log(Hocsinh)


//Bài Tập lab-02
//Bài 2 d

function soPhut(n){
    let phiCoDinh =25000
    let chiPhi= 0
    let tongChiphi =0
    if (n<=50){
       chiPhi = 600*n
    }
    else if (n>50 && n<=200){
        chiPhi= 600*50 + (n-50)*400 
    }
    else if (n>200){
        chiPhi = 600*50+150*40+(n-200)*200
       tongChiphi= chiPhi+ phiCoDinh
    }
    
    return tongChiphi
}


let sum= soPhut(270)
console.log('Tong cuoc phi cua %s phut goi la %s',270,sum)