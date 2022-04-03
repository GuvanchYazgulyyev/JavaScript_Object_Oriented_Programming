var a = 10;
var b = a;

console.log(a);
console.log(b);

var obj1 = {
    name: 'Kıvanç',
    age: 10
}

var obj2 = obj1;
obj1.age = 22;
console.log(obj1.age);
console.log(obj2.age);


var num = 60;
var account = {
    name: 'Murat',
    accountnumber: '00001351351'
}

function Update(a, b) {
    a = 500;
    b.accountnumber = '111100555548';
}

Update(num, account);

console.log(num);
console.log(account);

var urunler = [
    { name: 'Urun Adı: ', price: 1500 },
    { name: 'Urun Adı: ', price: 1700 },
    { name: 'Urun Adı: ', price: 1000 },
    { name: 'Urun Adı: ', price: 3500 },
    { name: 'Urun Adı: ', price: 4500 },
    { name: 'Urun Adı: ', price: 2000 },
]

function urunFiltrele(Urn) {

}

urunFiltrele(urunler);

console.log(urunFiltrele);
console.log(urunler);