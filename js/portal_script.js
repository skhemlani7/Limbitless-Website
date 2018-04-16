(function(){
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.
            var uid = user.uid;
            console.log(uid);
            console.log(user.email);
        } else {
          window.location = 'index.html';
        }
    });

    //

}());