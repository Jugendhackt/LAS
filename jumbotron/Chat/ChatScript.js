init ();


function init ()
{
  var text = "";
  var oldMessages = JSON.parse (localStorage.getItem ("chatMessages"));
  oldMessages.forEach (function (element) {
    text += "<br/>" + element;
  });
  var textBox = document.getElementById ("content");
  textBox.innerHTML = text;
}

document.getElementById ("TextInput").addEventListener ("keyup", TextKeyUp);

var possibleMehrStuff =
  [
    "Ich habe hier paar hübsche Aufgaben für euch",
    "Jetzt reißt euch mal am Riemen.",
    "Da müsst ihr jetzt durch das Tal der Tränen.",
    "Die Aufgabe 3 auf Seite 59 ist ne ganz hübsche.",
    "PCHSCHSCHT!"
  ];

function TextKeyUp (event)
{
  if (event.keyCode !== 13)
  {
    return;
  }
  var textBox = document.getElementById ("TextInput");
  var text = textBox.value;
  var username = localStorage.getItem ("username");
  var messages = JSON.parse (localStorage.getItem ("chatMessages"));
  messages[messages.length] = "<br/>" + username + ": " + text;
  messages[messages.length] = "<br/>" + "Dr. Rhem" + ": " + possibleMehrStuff[Math.floor (Math.random () * possibleMehrStuff.length)];
  var stringToSave = JSON.stringify (messages);
  localStorage.setItem ("chatMessages", stringToSave);
  textBox.value = "";
  init ();
}
