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
  console.log(element);
  //var divLerninhalte = document.createElement("div");
  //divLerninhalte.setAttribute("id", "lerninhalte");
  //document.getElementById("lerninhalte").innerHTML += divLerninhalte.to TODO
  document.getElementById("lerninhalte").innerHTML +=
    "<div id='lerninhalte'>" +
      "<div class='card' style='width: 20rem;'>" +
        "<div class='card-body'>" +
          "<h4 class='card-title'>" + element.thema + "</h4>" +
          "<hr>" +
          "<p class='card-text'>" + element.beschreibung + "</p>" +
          "<a href=" + element.data + " class='btn btn-primary' download\>" +
  element.typ;
}
