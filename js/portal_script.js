(function(){
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.
            var uid = user.uid;
            var email = user.email;
            document.getElementById('logout').addEventListener('click',  function(e) {
                firebase.auth().signOut();
                e.preventDefault();
            });
        } else {
          window.location = 'index.html';
        }
    });

}());