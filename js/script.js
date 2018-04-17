(function () {

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBSryvjwspbSO7wA2oZg4-D7HJ3MfVxkRI",
        authDomain: "limbitless-solutions.firebaseapp.com",
        databaseURL: "https://limbitless-solutions.firebaseio.com",
        projectId: "limbitless-solutions",
        storageBucket: "limbitless-solutions.appspot.com",
        messagingSenderId: "799796256120"
    };
    firebase.initializeApp(config);

    var txtUsername = document.getElementById('txtUsername');
    var txtPassword = document.getElementById('txtPassword');
    var btnLogin = document.getElementById('btnLogin');

    if (btnLogin !== null) {
        btnLogin.addEventListener('click', e => {
            const username = txtUsername.value;
            const password = txtPassword.value;
            const auth = firebase.auth();

            if (document.getElementById('remember').checked) {
                auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
                //console.log("Checked");
            } else {
                auth.setPersistence(firebase.auth.Auth.Persistence.SESSION);
                //console.log("Not checked");
            }

            /*const promise = */
            auth.signInWithEmailAndPassword(username, password).catch(function(error){
                alert("Login failed!");
            });

        });
    }

    firebase.auth().onAuthStateChanged(firebaseUser => {

        if (firebaseUser) {
            //console.log(firebaseUser.email);
            if (firebaseUser.email == 'admin@limbitless-solutions.org') {
                if (GetFilename(window.location.href) !== 'admin') {
                    window.location = 'admin.html';
                }
            }

            if (GetFilename(window.location.href) !== 'portal' && firebaseUser.email !== 'admin@limbitless-solutions.org') {
                window.location = 'portal.html';
            }

        }
    });


}());

function GetFilename(url) {
    if (url) {
        var m = url.toString().match(/.*\/(.+?)\./);
        if (m && m.length > 1) {
            return m[1];
        }
    }
    return "";
}