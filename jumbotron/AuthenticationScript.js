/**
 * @return {boolean}
 */
function IsInputValid (teacher, username)
{
  if (teacher)
  {
    let passwordField = document.getElementById ("passwordLehrer");
    let password = passwordField.value;
    return username === "Pottwal" && password === "2525" ||
      username === "Blumentopf" && password === "4242" ||
      username === "HerzAusGold" && password === "2542"||
      username === "Marvin" && password === "IstDochEhNichtSicher";
  }
  else
  {
    let passwordField = document.getElementById ("passwordSchueler");
    let password = passwordField.value;
    return username === "Pottwal" && password === "2525" ||
      username === "Blumentopf" && password === "4242" ||
      username === "HerzAusGold" && password === "2542" ||
      username === "Marvin" && password === "IstDochEhNichtSicher";
  }
}

function StudentClick ()
{
  let usernameField = document.getElementById ("usernameSchueler");
  let username = usernameField.value;
  if (IsInputValid(false, username))
  {
    localStorage.setItem("username", username);
    window.location.href = "StudentInterface/Studentinterface.html";
  }
}

function TeacherClick()
{
  let usernameField = document.getElementById ("usernameLehrer");
  let username = usernameField.value;
  if (IsInputValid(true, username))
  {
    localStorage.setItem("username", username);
    window.location.href = "TeacherInterface/TeacherInterface.html";
  }
}
