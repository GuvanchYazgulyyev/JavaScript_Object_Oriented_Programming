// ReferenceError
// TypeError
// SyntaxError
// URIError

// Error
var user = {
    name: 'Murat Dalkılıç'
}

try {
    //console.log(myFunction());
    console.log(user);
    if (!user.email) {
        // throw new SyntaxError("User E Postası Bulunamadı");
        throw new Error("User E Postası Bulunamadı");

    }

} catch (e) {
    console.log(e);
    console.log(e.message);
    console.log(e.name);
    console.log(e instanceof ReferenceError);
    console.log(e instanceof TypeError);
    console.log(typeof e);
} finally {
    console.log("Burası Sürekli Çalışacak!!!");
}