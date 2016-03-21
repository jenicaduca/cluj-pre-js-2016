var parseUsers = JSON.parse(usersJSON);

console.log(parseUsers);

function Users(dataUsers){
  this.name = dataUsers.userName;
  this.email = dataUsers.email;
  this.pass = dataUsers.password;
}

/// validare

function verifica(){
  var nrUsers = parseUsers.length;

   var nrForm = document.getElementById("formular").elements.length;
  //var emailForm = document.getElementById("formular").elements.namedItem("formEmail").value;


  var x = document.getElementById("formular");
  var txt = "";
  var i;
  for (i = 0; i < x.length; i++) {
      txt = txt + x.elements[i].value + "<br>";
  }
  document.getElementById("formText").innerHTML = txt;

//  console.log(valForm);

  // for(i in parseUsers){
  //   if( mail == parseUsers[i].email && parola== parseUsers[i].password){
  //     console.log(" User "+ parseUsers[i].userName+ "logat");
  //     return true;
  //     break;
  //   } else
  //   if(mail==parseUsers[i].email && parola!=parseUsers[i].password){
  //     console.log("eroare login");
  //     return false;
  //     break;
  //   }
  // }
  // if(nr==i-1){
  //   console.log("nu exista user");
  //   return false;
  // }
}

// schimba culoarea la click pt formular
function change() {
    var x = document.getElementsByClassName("focuss");
    var i;
    for (i = 0; i < x.length; i++) {
    x[i].style.backgroundColor = "#ADD8E6";
  }
}
