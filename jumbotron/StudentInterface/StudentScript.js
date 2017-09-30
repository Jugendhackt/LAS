window.onload = function ()
{

}

var thisClass = "TGI13/2";
var files;

function loadData()
{

}

function getFiles()
{
  var files = localStorage.getItem("files");
  if (files === null)
  {
    return [];
  }

  files.forEach(function(element)
  {
    var klasse = element.get("klasse");
    var thema = element.get("thema");
    var beschreibung = element.get("beschreibung");
    var typ = element.get("typ");
    var data = element.get("data");
    var metaData = element.get("metaData");
    var date = element.get("date");
    if (klasse === thisClass)
    {
      files.add(element);
    }
  });
}
