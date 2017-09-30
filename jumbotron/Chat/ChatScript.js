init ();


function init ()
{
  var text = "";
  var oldMessages = JSON.parse (localStorage.getItem ("chatMessages"));
  oldMessages.forEach (function (element) {
    text += element + "<br/>";
  });
  var textBox = document.getElementById ("content");
  textBox.innerHTML = text;
}

document.getElementById ("TextInput").addEventListener ("keyup", TextKeyUp);

function TextKeyUp (event)
{
  if (event.keyCode !== 13)
  {
    return;
  }
  var textBox = document.getElementById ("TextInput");
  var text = textBox.value;
  var username = localStorage.getItem ("username");
  var textToAdd = "<br/><br/>" + username + ": " + text;
  var messages = JSON.parse(localStorage.getItem("chatMessages"));
  messages[messages.length] = textToAdd;
  var stringToSave = JSON.stringify(messages);
  localStorage.setItem("chatMessages", stringToSave);
  textBox.value = "";
  init();
}
