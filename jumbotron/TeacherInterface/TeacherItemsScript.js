onLoad();

function onLoad()
{
  getFiles();
  fillClasses();
  listenForDelete(document.getElementsByClassName("deleteButton"));

}

function listenForDelete(deleteButtons) {
  for(var button of deleteButtons){
    button.addEventListener("click", function (sender) {
      console.log(sender);
      document.getElementById(sender.srcElement.id + "div").outerHTML = "";
      var files = JSON.parse(localStorage.getItem("files"));
      for(var ele of files){
        if(ele.id === sender.srcElement.id){
          files.splice(ele.indexOf(), 1);
        }
      }
    });}
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
  var div = document.getElementById("lerninhalte");
  while (div.firstChild)
  {
    div.removeChild(div.firstChild);
  }
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

  var divCard = document.createElement("div");
  divCard.setAttribute("id", element.id + "div");
  divCard.setAttribute("class", "card");
  divCard.setAttribute("style", "width: 20rem;");
  var divCardBody = document.createElement("div");
  divCardBody.setAttribute("class", "card-body");
  var thema = document.createElement("h4");
  thema.setAttribute("class", "card-title");
  thema.appendChild(document.createTextNode(element.thema));
  var horizontalRuler = document.createElement("hr");
  var beschreibung = document.createElement("p");
  beschreibung.setAttribute("class", "card-text");
  beschreibung.appendChild(document.createTextNode(element.beschreibung));
  var button = document.createElement("button");
  button.setAttribute("class", "btn btn-primary deleteButton");
  button.setAttribute("id", element.id);
  button.innerHTML = "löschen";

  divCardBody.appendChild(thema);
  divCardBody.appendChild(horizontalRuler);
  divCardBody.appendChild(beschreibung);
  divCardBody.appendChild(button);
  divCard.appendChild(divCardBody);

  document.getElementById("lerninhalte").appendChild(divCard);
}

