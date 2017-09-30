window.onload = function ()
{
  if(localStorage.getItem("files") === null)
  {
    localStorage.setItem("files", []);
  }
  if (localStorage.getItem("chatMessages") === null)
  {
    localStorage.setItem("chatMessages", ["Test", "bla"]);
  }
  if (localStorage.getItem("username") === null)
  {
    localStorage.setItem("username", "");
  }
};
