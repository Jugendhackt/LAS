init ();


function init ()
{
  var text = "";
  var oldMessages = JSON.parse (localStorage.getItem ("chatMessages"));
  oldMessages.forEach (function (element) {
    text += element + "<br/><br/>";
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
  var contentBox = document.getElementById ("content");
  var username = localStorage.getItem ("username");
  contentBox.innerHTML += "<br/><br/>" + username + ": " + text;
  textBox.value = "";
}
