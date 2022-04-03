document.getElementById('myBtn').addEventListener('click', function(e) {
    var name = document.getElementById('name');
    var age = document.getElementById('age');
    var errors = document.getElementById('errors');
    errors.innerHTML = '';

    try {
        if (name.value.length === 0) {
            throw new Error('Ad Kısmı Zorunludur!!!!');
        }
        if (name.value.length > 30) {
            throw new Error("Ad Çok Uzun!!!!");
        }

        if (age.value.length === 0) {
            throw new Error('Yaş Kısmı Zorunludur!!!!');
        }

        if (isNaN(age.value)) {
            throw new Error("Yaş Kısmı Sayı İle Giriniz!!!");
        }

        console.log("İstek Gönderildi!!!");
    } catch (err) {
        errors.innerHTML = err;
    } finally {
        name.value = '';
        age.value = '';
    }

    e.preventDefault();
});