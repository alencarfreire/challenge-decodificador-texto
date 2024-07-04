let outputText = document.getElementById("outputText");
let afterResult = document.querySelector(".box-result-preview");
let buttonCopy = document.querySelector(".box-result-preview-button-copy");
let boxResult = document.querySelector(".box-result");

function adjustStyle() {
  afterResult.style.display = "none";
  buttonCopy.style.display = "block";
  boxResult.style.justifyContent = "space-between";
  outputText.style.display = "block";
  outputText.style.height = "80%";
}

function encryptText() {
  let text = document.getElementById("inputText").value;
  let encryptedText = text
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
  outputText.innerText = encryptedText;
  adjustStyle();
}

function decryptText() {
  let text = document.getElementById("inputText").value;
  let encryptedText = text
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
  outputText.innerText = encryptedText;
  adjustStyle();
}

function copyToClipboard() {
  let text = document.getElementById("outputText");
  text.select();
  text.setSelectionRange(0, 99999); // Para dispositivos móveis
  navigator.clipboard.writeText(text.value);
}
