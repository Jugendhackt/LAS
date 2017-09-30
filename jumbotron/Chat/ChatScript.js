window.onload = function LoadMessages()
{
  var text = "";
  var oldMessages = localStorage.getItem("chatMessages");
  /*oldMessages.forEach(function (element)
  {
    text += element;
  });*/
  console.log(oldMessages);
  console.log(oldMessages.type);
  var textBox = document.getElementById("content");
  textBox.innerHTML = text;
};
