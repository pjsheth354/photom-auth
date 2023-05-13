auth.onAuthStateChanged((user) => {
    if(user.email == "admin@photom.com" || user.email == "client@mimy.com"){
        console.log("User is logged in");
    }
    else{
        location.href = "../index.html"
    }
})
