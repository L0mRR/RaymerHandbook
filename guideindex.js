fetch('../resources/guides.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });
function appendData(data) {

    const cards = [
    document.getElementById("guide1"), 
    document.getElementById("guide2"), 
    document.getElementById("guide3")
    ];
    const cardTitle = [
    document.getElementById("title1"), 
    document.getElementById("title2"), 
    document.getElementById("title3")    
    ];
    const cardBody = [
        document.getElementById("body1"), 
        document.getElementById("body2"), 
        document.getElementById("body3")    
    ];
    const cardPDF = [
        document.getElementById("pdf1"), 
        document.getElementById("pdf2"), 
        document.getElementById("pdf3")    
    ];
    const cardDOC = [
        document.getElementById("doc1"), 
        document.getElementById("doc2"), 
        document.getElementById("doc3")    
    ];

    const highest = getHighest(data);

    for (var i = 0; i < data.length; i++) {
        if (highest.includes(data[i].edition)){
            cardTitle[0].innerHTML = "Raymer Handbook Edition " + data[i].edition;
            cardBody[0].innerHTML = "Patch " + data[i].PatchNumber + " <br>Guide Released " + data[i].Date;
            cardPDF[0].setAttribute('href', "../resources/" + data[i].pdf);
            cardDOC[0].setAttribute('href', data[i].doc);
            cards[0].style.display = 'block';
            cardTitle.shift();
            cardBody.shift();
            cardPDF.shift();
            cardDOC.shift();
            cards.shift();
        }
    }
    for (var i=0; i < cards.length; i++) {
        cards[i].style.display = 'none';
    }
}
function getHighest(data) {
    const editionNumbers = [];
    for (var i = 0; i < data.length; i++) {
        editionNumbers[i] = data[i].edition;
    }
    editionNumbers.sort(function(a, b) { return b - a;});
    return [editionNumbers[0],editionNumbers[1],editionNumbers[2]]
}
