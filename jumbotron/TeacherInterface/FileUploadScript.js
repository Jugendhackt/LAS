window.onload = function ()
{
  fillFields();
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

function receiveFormValues()
{O
  //TOD
}
