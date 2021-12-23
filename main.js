var images = ["2020-Chevrolet-Corvette-Stingray-007.jpg", "dbb3jhz-b15a8fe9-797a-4951-bc58-660adb4a3610 (1).jpg", "DG017_005VPr818f7ebfmb7b6f5l7fe3ac04p-scaled.jpg"];
var names = ["Mom", "Dad", "Me", "Us"];
var i = 0;

function update() {

    var array_length = images.length - 1;
    var updated_image = images[i];
    var updated_text = names[i];

    document.getElementById("family_book_image").src = updated_image;
    document.getElementById("name").innerHTML = updated_text;

    i++;


    if (i > array_length) {
        i = 0;

    }
}