window.onload = function ()
{
  getFiles();
}

var thisClass = "TGI13/2";
var files;

function loadData()
{

}

function getFiles() {
  console.log("getting files");
  var files = JSON.parse(localStorage.getItem("files"));
  console.log(files);
  if("" === files) console.log("leer");
  if (files === null || files === "") {
    return [];
  }
  files.forEach(function (name) {
    printLerninhalte(name)
  });
}

function printLerninhalte(element)
{
  console.log(element)
  document.getElementById("lerninhalte").innerHTML +=  "<div id=\"lerninhalte\">\n" +
    "      <div class=\"card\" style=\"width: 20rem;\">\n" +
    "        <div class=\"card-body\">\n" +
    "          <h4 class=\"card-title\">" +
  element.thema +
  "</h4>\n" +
    "          <hr>\n" +
    "          <p class=\"card-text\">" + element.beschreibung +
    "</p>\n" +
    "<a href=" + element.data + " class='btn btn-primary' download\>" +
  element.typ;
}
