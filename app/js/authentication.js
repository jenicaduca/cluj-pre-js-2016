var parseUsers = JSON.parse(usersJSON);


function Users(dataUsers){
  this.name = dataUsers.userName;
  this.email = dataUsers.email;
  this.pass = dataUsers.password;

}

// var user = new Users();
//
// var authenticate = function() {
//       return user.email + ' ' + user.pass;
//   };
// LocalStorageManager.setValue("key",data);
// LocalStorageManager.getValue("key");

function Authentication (){
  var nrUsers = parseUsers.length;
   var bool= true;

   var emailDiv= document.getElementById("formText1").value;
   var passDiv= document.getElementById("formText2").value;
  //  console.log('values:', emailDiv, passDiv)

  //  authenticate( emailDiv, passDiv );
  //  console.log(authenticate( emailDiv, passDiv ));
    for (var i = 0; i < nrUsers; i++) {
          if (parseUsers[i].email == emailDiv)
               {
                //  var LocalStorageManager =   window.localStorage.setItem(emailDiv, JSON.stringify(value));
                 if(parseUsers[i].password == passDiv)
                   {

                    //  document.getElementById("mesageLogin").innerHTML = "login succes!!";
                   window.location.replace = ("file:///home/jenica.duca/work/cluj-pre-js-2016/app/playlist_page.html");
                     break;
                  }
                 else
                 {
                    document.getElementById("mesageLogin").innerHTML = "Incorect password!!";
                    bool=false;
                    break;

                 }
               }  else {
                  document.getElementById("mesageLogin").innerHTML = "is not a user!!";
                  bool=false;
                }

        }

  return bool;
}
