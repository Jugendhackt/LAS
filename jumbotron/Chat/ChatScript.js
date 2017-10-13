init ();


function init ()
{
  var text = "";
  var oldMessages = JSON.parse (localStorage.getItem ("chatMessages"));
  oldMessages.forEach (function (element) {
    text += "<br/><br/>" + element;
  });
  var textBox = document.getElementById ("content");
  textBox.innerHTML = text;
  window.scrollTo(0,document.body.scrollHeight);
  var textInput = document.getElementById("TextInput");
  textInput.focus();
}

document.getElementById ("TextInput").addEventListener ("keyup", TextKeyUp);

var possibleMehrStuff =
  [
    "Ich habe hier paar nette Aufgaben für euch",
    "Jetzt reißt euch mal am Riemen.",
    "Da müsst ihr jetzt durch das Tal der Tränen.",
    "Die Aufgabe 3 auf Seite 59 ist ne ganz hübsche.",
    "PCHSCHSCHT!"
  ];

var easterEgg = "Der Pottwal: He, das ist ja wirklich aufregend, so vieles rauszufinden, so vieles, was ich noch vor mir habe, mir wird ganz schwindlig vor lauter Vorfreude. – Was ist denn das, was da plötzlich so schnell auf mich zukommt? So sehr, sehr schnell. So riesig und so flach und so rund. Das braucht einen riesigen Namen … wie …. Grund! Ob er wohl nett zu mir ist?"

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
  messages[messages.length] = username + ": " + text;
  var botReply = "Dr. Rhem" + ": " + possibleMehrStuff[Math.floor (Math.random () * possibleMehrStuff.length)];
  if (text === "Oh nein, nicht schon wieder.")
  {
    botReply = easterEgg;
  }
  messages[messages.length] = botReply;
  var stringToSave = JSON.stringify (messages);
  localStorage.setItem ("chatMessages", stringToSave);
  textBox.value = "";
  init ();
}
