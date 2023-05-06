const logoutForm = document.querySelector(".logoutForm");
logoutForm.addEventListener('click',(e) => {
    e.preventDefault();
    auth.signOut().then(()=>{
        console.log("User Signed Out Successfully");
        location.href = "../index.html"
    })
})

var profile_email
auth.onAuthStateChanged((user) => {
    if(user){
        console.log("User is logged in");
        profile_email = user.email;
    }
    else{
        location.href = "../index.html"
    }
})

function profilebtn(){
    alert(profile_email)
}