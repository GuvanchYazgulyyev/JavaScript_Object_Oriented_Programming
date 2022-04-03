// Immediate Functions

// function welcome() {
//     var contries = ['Turkey', 'Poland', 'Turkmenistan', 'Russian', 'Japan', 'German', 'Holland'];

//     var contry = new Date();

//     var msg = 'Hello: ' + contries[contry.getDay()];
//     return msg;
// }


// Kullanım şekli
// (function () {

// })();


(function() {
    var contries = ['Turkey', 'Poland', 'Turkmenistan', 'Russian', 'Japan', 'German', 'Holland'];

    var contry = new Date();

    var msg = 'Hello: ' + contries[contry.getDay()];
    console.log(msg);
}());


//console.log(welcome());