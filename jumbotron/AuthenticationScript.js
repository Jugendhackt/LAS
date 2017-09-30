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
      username === "HerzAusGold" && password === "2542";
  }
  else
  {
    let passwordField = document.getElementById ("passwordSchueler");
    let password = passwordField.value;
    return username === "Pottwal" && password === "2525" ||
      username === "Blumentopf" && password === "4242" ||
      username === "HerzAusGold" && password === "2542";
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
  else
  {
    showSnackbar();
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
  else
  {
    showSnackbar();
  }
}

function showSnackbar()
{
  var x = document.getElementById("snackbar");

  x.className = "show";

  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
