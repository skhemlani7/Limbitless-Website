(function(){


    //logic to add game to carousel
    var div = document.createElement("div");
    div.setAttribute('class', 'carousel-item'); 
    var subdiv = document.createElement("div");
    subdiv.setAttribute('class', 'text'); 
    var myHeader = document.createElement("h1");
    myHeader.innerHTML = "TEST";
    var myParagraph = document.createElement("p");
    myParagraph.innerHTML = "THIS IS A TEST";
    var a_tag = document.createElement("a");
    a_tag.setAttribute('href','https://play.google.com/store/apps/details?id=com.optimesoftware.checkers.free');
    a_tag.setAttribute('target', '_blank');
    var button_tag = document.createElement("button");
    button_tag.setAttribute('type', 'button');
    button_tag.setAttribute('class', "btn download");
    a_tag.appendChild(button_tag);
    subdiv.appendChild(myHeader);
    subdiv.appendChild(myParagraph);
    subdiv.appendChild(a_tag);
    div.appendChild(subdiv);
    var myImage = document.createElement("img");
    myImage.setAttribute('class', "d-block w-100");
    myImage.setAttribute('style',"filter:brightness(50%);");
    myImage.setAttribute('src',"https://upload.wikimedia.org/wikipedia/en/8/80/Street_Fighter_V_box_artwork.png");
    div.appendChild(myImage);
    document.getElementById("carouselSelector").appendChild(div);


    var dbRef = firebase.database().ref();

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.
            
            dbRef.child('games').on('value', snap => {
                var obj = snap.val();
                var length = Object.keys(obj).length; 

                for(key=0;key<length;key++){
                    //Instead of logging to console, generate a div in bootstrap carousel format for each game
                    console.log(obj[key]);
                }
            });

            //dbRef.child('users').child(uid).on('value', snap => console.log(snap.val()));
            var uid = user.uid;            
            var patientName = document.getElementById('patientName');
            var patientNickname = document.getElementById('patientNickname');
            var currentlevel = document.getElementById('currentlevel');
            var nextlevel = document.getElementById('nextlevel');

            //Use snap.val() for the full object
            dbRef.child('users').child(uid).on('value', snap =>{
                obj = snap.val();
                level = obj['currentlevel'];
                patientNickname.innerText = obj['nickname'];
                patientName.innerText = obj['name'];
                currentlevel.innerText = "Level" + " " +level;
                nextlevel.innerText = "Level" + " " + String(Number(level)+1);
            });
            //console.log(userQuery.child('level').value);

            document.getElementById('logout').addEventListener('click',  function(e) {
                firebase.auth().signOut();
                e.preventDefault();
            });
            document.getElementById('home').addEventListener('click', function(e){
                smoothScroll(document.getElementById('sectionOne'));
                e.preventDefault();
            });
            document.getElementById('games').addEventListener('click', function(e){
                smoothScroll(document.getElementById('sectionTwo'));
                e.preventDefault();
            });
            document.getElementById('devices').addEventListener('click', function(e){
                smoothScroll(document.getElementById('sectionDevices'));
                e.preventDefault();
            });

        } else {
          window.location = 'index.html';
        }
    });

}());

//Scroll function for nav bar
//onclick="smoothScroll(document.getElementById('second'))"
window.smoothScroll = function(target) {
    var scrollContainer = target;
    do { //find scroll container
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);

    var targetY = 0;
    do { //find the top of target relatively to the container
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);

    scroll = function(c, a, b, i) {
        i++; if (i > 30) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function(){ scroll(c, a, b, i); }, 20);
    }
    // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}