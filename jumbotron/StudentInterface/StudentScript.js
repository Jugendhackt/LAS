onLoad();

function onLoad()
{
  getFiles();
  fillClasses();
}

var files;

function classesChanged()
{
  var drop = document.getElementById("KlasseDrop");
  localStorage.setItem("currentClass", drop.options[drop.selectedIndex].text);
  getFiles();
}

function fillClasses()
{
  var drop = document.getElementById("KlasseDrop");
  getClasses().forEach(function (element) {
    var i = new Option(element, element,  false, false);
    drop.add(i);
  });
}

function getClasses()
{
  return JSON.parse(localStorage.getItem("classes"));
}

function getFiles()
{
  console.log("getting files");
  var files = JSON.parse(localStorage.getItem("files"));
  console.log(files);
  if("" === files) console.log("leer");
  if (files === null || files === "")
  {
    return [];
  }
  var currentClass = localStorage.getItem("currentClass");
  files.forEach(function (element)
  {
    if (element.klasse === currentClass)
    {
      printLerninhalte (element);
    }
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
          "<a href='" + (element.video === "" ? element.data : element.video) + "' class='btn btn-primary'" + (element.metaData === null ? "" : (" download='" + element.metaData)) + "'\>" +
    (element.typ !== null ? element.typ : "video");
}
