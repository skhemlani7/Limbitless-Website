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