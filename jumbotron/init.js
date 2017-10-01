 console.log("init");
  if(localStorage.getItem("files") === null || localStorage.getItem("files") === "")
  {
    localStorage.setItem("files", JSON.stringify([]));
  }
  if (localStorage.getItem("chatMessages") === null || localStorage.getItem("chatMessages") === "")
  {
    localStorage.setItem("chatMessages", JSON.stringify([]));
  }
  if (localStorage.getItem("username") === null)
  {
    localStorage.setItem("username", "");
  }
  if (localStorage.getItem("classes") === null || localStorage.getItem("classes") === "")
  {
    localStorage.setItem("classes", JSON.stringify(["TGI11/1", "TGI11/2", "TGI12/1", "TGI12/2", "TGI13/1", "TGI13/2"]));
  }
  if (localStorage.getItem("themes") === null || localStorage.getItem("themes") === "")
  {
    localStorage.setItem("themes", JSON.stringify(["Deutsch", "Englisch", "Informatik", "Geschichte"]));
  }
  if (localStorage.getItem("currentClass"))
  {
    localStorage.setItem("currentClass", JSON.parse(localStorage.getItem("classes")[0]));
  }
