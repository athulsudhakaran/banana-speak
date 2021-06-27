var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var URL = "https://api.funtranslations.com/translate/minion.json"


function getTranslation(input) {
    return URL + "?" + "text=" + input
}



function clickHandler() {
    var inputText = txtInput.value; 

    fetch(getTranslation(inputText))
        .then(response => response.json())
        .then(json => {
            var translated = json.contents.translated;
            outputDiv.innerText = translated; 
           })
        
};

btnTranslate.addEventListener("click", clickHandler)