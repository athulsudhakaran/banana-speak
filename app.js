var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var output = document.querySelector("#output");
var url = "https://api.funtranslations.com/translate/minion.json"
function getTranslation(input) {
    return url + "?" + "text=" + input
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! try again after some time")
}


function clickHandler() {
    var input = txtInput.value; 

    fetch(getTranslation(input))
        .then(response => response.json())
        .then(json => {
            var translated = json.contents.translated;
            output.innerText = translated;
           })
        .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler)