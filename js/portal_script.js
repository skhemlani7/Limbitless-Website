initApp = function() {

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.
            var uid = user.uid;
            //document.write(uid);
        } else {
          window.location = 'index.html';
        }
    });
};

document.getElementById("sign-in-status").addEventListener("click",e=>{
    firebase.auth.signOut();
});

window.addEventListener('load', function() {
  initApp()
});