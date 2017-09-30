window.onload = function ()
{
  fillFields();
  document.getElementById("speichern").addEventListener("click", receiveFormValues);
  document.getElementById("file").addEventListener("change", handleFileSelect, false)
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
  return ["PDF", "Bild"]
}

function handleFileSelect (evt)
{
  var files = evt.target.files;
  if (files.length !== 1)
  {
    console.log("Length was", files.length);
    return -1;
  }

  var reader = new FileReader();

  reader.onload = (function (theFile)
  {
    return function(e)
    {
      selectedFile = e.target.result;
      console.log(theFile, " - ", selectedFile);
    };
  })(files[0]);

  reader.readAsDataURL(files[0]);
}

var selectedFile = null;
var metaDataSelectedFile = null;
var uid;

function receiveFormValues(event)
{
  console.log(document.getElementById("KlasseDrop").value);
  var file = {
    klasse: document.getElementById("KlasseDrop").value,
    thema: document.getElementById("ThemaDrop").value,
    beschreibung: document.getElementById("Beschreibung").value,
    typ: document.getElementById("TypDrop").value,
    data: selectedFile,
    metaData: metaDataSelectedFile,
    date: new Date().getDate(),
    id: uid++
  };
  event.preventDefault();

  var files = JSON.parse(localStorage.getItem("files"));
  //write to storage
  console.log(file);
  console.log(files);
  files.push(file);
  localStorage.setItem("files",JSON.stringify(files));
  console.log(files);

}
