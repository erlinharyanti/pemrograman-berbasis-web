let nama ='Erlin'  //string
let umur= 19 //int
let tinggiBadan = 158.9 //float
let beratBadan = 47
let pacar = 1
let namaPanggilan=["lin", "elin", "er"]

console.log(nama)
alert(`nama gue ${nama} usia ${umur} tinggi badan gue ${tinggiBadan} cm dan berat badan gue ${beratBadan}`)

console.log(namaPanggilan[0])
namaPanggilan[2] = "eyinnnn";
console.log(namaPanggilan)
namaPanggilan[1] = 20;
console.log(namaPanggilan)

// beratBadan = 43
// if(pacar == null){
//     pacar ='belum ada'
// }else{
//     pacar = 'ada'
// }
    
switch(pacar){
    case 1:
        pacar ='punya 1'
        break
    case 2:
        pacar ='punya 2'
        break
    default:
        pacar ='belum ada'
        break
}

let uangAwal = 100000
let uangTambahan = 20000
const uangAkhir = uangAwal + uangTambahan

alert(`uang gue awalnya Rp.${uangAwal}, terus dikasi ${pacar} aku Rp${uangTambahan}, jadinya total uangku= Rp${uangAkhir}`)
