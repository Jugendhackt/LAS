 console.log("init");
  if(localStorage.getItem("files") === null || localStorage.getItem("files") === "")
  {
    localStorage.setItem("files", JSON.stringify([]));
  }
  if (localStorage.getItem("chatMessages") === null)
  {
    localStorage.setItem("chatMessages", ["Test", "bla"]);
  }
  if (localStorage.getItem("username") === null)
  {
    localStorage.setItem("username", "");
  }
