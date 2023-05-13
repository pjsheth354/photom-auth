const loginForm = document.querySelector('#loginForm')
loginForm.addEventListener('submit',(e) => {
  
  e.preventDefault();

  const email = loginForm['username'].value;
  const password = loginForm['password'].value;
  auth.signInWithEmailAndPassword(email,password).then((usercredential)=>{
    if (usercredential.user.uid == "WprNPOxnD8OX4EEFqvm3Rx1VYnv1"){
        alert("Login Successfull");
        location.href = "adminpage.html"
    }
    else if (usercredential.user.uid == "oPeap0ViqtWGdxHO90r1BnPQXXq1"){
        alert("Login Successfull");
        location.href = "./Plant Page/tata-mi-my-plantpage.html"
    }
    else if (usercredential.user.uid == "8j0erjtfV4NQSOMrYZXET2OUAiU2"){
        alert("Login Successfull");
        location.href = "./Plant Page/tprel-dholera-plantpage.html"
    }
    else if (usercredential.user.uid == "RPnUhffMMScm3RJwfdcOABHx7Mj1"){
        alert("Login Successfull");
        location.href = "./Plant Page/tprel-raghanesda-plantpage.html"
    }
    else if (usercredential.user.uid == "Cwml0bSm6JeB4w9UlT2F4INjr373"){
        alert("Login Successfull");
        location.href = "./Plant Page/ujjawala-plantpage.html"
    }
    else if (usercredential.user.uid == "Owm9KoRfzjf7mzJiVfoYCztUdm52"){
        alert("Login Successfull");
        location.href = "./Plant Page/visual-percept-plantpage.html"
    }
    else{
        alert("Enter a valid username and password");
    }
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    alert(errorMessage);
    // ..
  });
})
