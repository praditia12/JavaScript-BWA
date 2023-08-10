function login(usernameIinput, passwordInput) {
    var usernameRegistered = "adit";
    var passwordRegistered = "12233";

    // if else conditation
    if (usernameIinput == usernameRegistered && passwordInput == passwordRegistered ) {
        alert("Berhasil Login");
    } else {
        alert("Login Gagal"); 
    }
}

login('adit',"12233");