const TeacherLogins = [
  {
    username: "Pottwal",
    password: "83e19a9ce479dc064bab4bd50134db14918cc967debd3ad223bb8993c523788d"
  },
  {
    username: "Blumentopf",
    password: "0315b4020af3eccab7706679580ac87a710d82970733b8719e70af9b57e7b9e6"
  },
  {
    username: "HerzAusGold",
    password: "39938bd5341cf9783604a0b5818375365c6d6fd12a5b6cab5160e57cce3dcab1"
  },
  {
    username: "Marvin",
    password: "71364402078fad8c6f1209b5d432676834b782f77079786305415d7f5baa709a"
  }
];

const StudentLogins = [
  {
    username: "Pottwal",
    password: "83e19a9ce479dc064bab4bd50134db14918cc967debd3ad223bb8993c523788d"
  },
  {
    username: "Blumentopf",
    password: "0315b4020af3eccab7706679580ac87a710d82970733b8719e70af9b57e7b9e6"
  },
  {
    username: "HerzAusGold",
    password: "39938bd5341cf9783604a0b5818375365c6d6fd12a5b6cab5160e57cce3dcab1"
  },
  {
    username: "Marvin",
    password: "71364402078fad8c6f1209b5d432676834b782f77079786305415d7f5baa709a"
  }
];

function IsInputValid (teacher, username)
{
  if (teacher)
  {
    let passwordField = document.getElementById ("passwordLehrer");
    let password = passwordField.value;
    return getHashed(password).then(hashed =>
    {
      for (let i = 0; i < TeacherLogins.length; i++)
      {
        let element = TeacherLogins[i];
        if (username === element.username && hashed === element.password)
        {
          return true;
        }
      }
      return false;

    });
  }
  else
  {
    let passwordField = document.getElementById ("passwordSchueler");
    let password = passwordField.value;
    return getHashed(password).then(hashed =>
    {
      for (let i = 0; i < StudentLogins.length; i++)
      {
        let element = StudentLogins[i];
        if (username === element.username && hashed === element.password)
        {
          return true;
        }
      }
      return false;
    });
  }
}

function getHashed (clear)
{
  let uint8Array = new TextEncoder("utf-8").encode(clear);
  return window.crypto.subtle.digest(
    {
      name: "SHA-256",
    },
      uint8Array
    )
    .then(function(hash)
    {
      return toHexString(new Uint8Array(hash));
    })
    .catch(function(err)
    {
      console.error(err);
    });
}

function toHexString(byteArray)
{
  return Array.from(byteArray, function(byte)
  {
    return ('0' + (byte & 0xFF).toString(16)).slice(-2);
  }).join('')
}


function StudentClick ()
{
  let usernameField = document.getElementById ("usernameSchueler");
  let username = usernameField.value;
  IsInputValid(false, username).then(t => {
    if (t)
    {
      localStorage.setItem("username", username);
      window.location.href = "StudentInterface/Studentinterface.html";
    }
    else
    {
      showSnackbar();
    }
  });
}

function TeacherClick()
{
  let usernameField = document.getElementById ("usernameLehrer");
  let username = usernameField.value;
  IsInputValid(true, username).then(t => {
    if (t)
    {
      localStorage.setItem("username", username);
      window.location.href = "TeacherInterface/TeacherInterface.html";
    }
    else
    {
      showSnackbar();
    }
  });
}

function showSnackbar()
{
  var x = document.getElementById("snackbar");

  x.className = "show";

  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
