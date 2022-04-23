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
    var mainContainer = document.getElementById("middle");
    for (var i = 0; i < data.length; i++) {
        var div = document.createElement("div");
        div.innerHTML = data[i].Name + ' ' + data[i].Date + ' <a href=../resources/' + data[i].pdf + '>PDF</a>' + ' <a href=' + data[i].doc + '>DOC</a>';
        mainContainer.appendChild(div);
    }
}