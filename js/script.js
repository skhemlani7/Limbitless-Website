(function() {

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

    btnLogin.addEventListener('click',e => {
        const username = txtUsername.value;
        const password = txtPassword.value;
        const auth = firebase.auth();
        
        if(document.getElementById('remember').checked) {
            auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
            //console.log("Checked");
        } else {
            auth.setPersistence(firebase.auth.Auth.Persistence.SESSION);
            //console.log("Not checked");
        }

        /*const promise = */auth.signInWithEmailAndPassword(username,password);
        
    });

    /*
    register.addEventListener('click', e => {
        const username = txtUsername.value;
        const password = txtPassword.value;
        const auth = firebase.auth();

        const promise = auth.createUserWithEmailAndPassword(username,password);
    });
    */

    firebase.auth().onAuthStateChanged(firebaseUser => {
        //window.firebaseUser = firebaseUser;
        if (firebaseUser) {
            window.location = 'scratch.html';/////////////////////////////////////////////////////////////////////////////////////////
            //console.log(firebaseUser);
        }
        //if(!firebaseUser && window.location == 'portal.html'){
          //  window.location = 'index.html';
        //}
    });


}());