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
  var files = localStorage.getItem("files");
  console.log(files);
  if("" === files) console.log("leer");
  if (files === null) {
    return [];
  }
  files.forEach(function (name) {
    var object = {
      klasse : name.getItem("klasse"),
      thema : name.getItem("thema"),
      beschreibung : name.getItem("beschreibung"),
      typ : name.getItem("typ"),
      data : name.getItem("data"),
      metaData : name.getItem("metaData"),
      date : name.getItem("date")
    }
    printLerninhalte(object)
  });
}

function printLerninhalte(element) {
  document.getElementById("lerninhalte").innerHTML = "<h2>lalal</h2>";
}
