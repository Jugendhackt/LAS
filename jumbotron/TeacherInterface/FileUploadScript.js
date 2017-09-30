window.onload = function ()
{
  fillFields();
  document.getElementById("speichern").addEventListener("click", receiveFormValues);
};

function fillFields ()
{
  var klasse = document.getElementById("KlasseDrop");
  var themen = document.getElementById("ThemaDrop");
  var typen = document.getElementById("TypDrop");

  getClasses().forEach(function (element) {
    var i = new Option(element, element, false, false);
    klasse.add(i);
  });
  getThemen().forEach(function (element) {
    var i = new Option(element, element, false, false);
    themen.add(i);
  });
  getTypen().forEach(function (element) {
    var i = new Option(element, element, false, false);
    typen.add(i);
  });
}

function getClasses()
{
  return ["TGI11/1", "TGI11/2", "TGI12/1", "TGI12/2", "TGI13/1", "TGI13/2"]
}

function getThemen()
{
  return ["Deutsch", "Englisch", "Informatik", "Geschichte"]
}

function getTypen ()
{
  return ["Film", "PDF", "Bild"]
}

function receiveFormValues(event)
{
  console.log(document.getElementById("KlasseDrop").value);
  var file = {
    klasse: document.getElementById("Klasse"),

  }
  event.preventDefault();

  //write to storage
  if(localStorage.getItem("files") == null){
    localStorage.setItem("files", []);
  }
  localStorage.setItem("files", []);
  var files = localStorage.getItem("files");

  //TODO
}
