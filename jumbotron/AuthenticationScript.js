/**
 * @return {boolean}
 */
function IsInputValid (teacher)
{
  if (teacher)
  {
    let usernameField = document.getElementById ("usernameLehrer");
    let username = usernameField.value;
    let passwordField = document.getElementById ("passwordLehrer");
    let password = passwordField.value;
    return username === "Pottwal" && password === "2525" ||
      username === "Blumentopf" && password === "4242" ||
      username === "HerzAusGold" && password === "2542";
  }
  else
  {
    let usernameField = document.getElementById ("usernameSchueler");
    let username = usernameField.value;
    let passwordField = document.getElementById ("passwordSchueler");
    let password = passwordField.value;
    return username === "Pottwal" && password === "2525" ||
      username === "Blumentopf" && password === "4242" ||
      username === "HerzAusGold" && password === "2542";
  }
}

function StudentClick ()
{
  if (IsInputValid(false))
  {
    window.location.href = "StudentInterface/Studentinterface.html";
  }
}

function TeacherClick()
{
  if (IsInputValid(true))
  {
    window.location.href = "TeacherInterface/TeacherInterface.html";
  }
}
